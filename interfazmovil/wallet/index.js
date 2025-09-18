import {
  createAuthenticatedClient,
  OpenPaymentsClientError,
  isFinalizedGrant
} from '@interledger/open-payments'
import readline from 'readline/promises'
;(async () => {
  // Client configuration
  const PRIVATE_KEY_PATH = 'private.key'
  const KEY_ID = 'fbc2ea97-d64e-43d7-9d45-d018829543f0'

  // Make sure the wallet addresses starts with https:// (not $)
  const CLIENT_WALLET_ADDRESS_URL = 'https://ilp.interledger-test.dev/c884c441'
  const SENDING_WALLET_ADDRESS_URL = 'https://ilp.interledger-test.dev/pepeda'
  const RECEIVING_WALLET_ADDRESS_URL = 'https://ilp.interledger-test.dev/peperecibe'

  const client = await createAuthenticatedClient({
    walletAddressUrl: "https://ilp.interledger-test.dev/c884c441",
    keyId: "fbc2ea97-d64e-43d7-9d45-d018829543f0",
    privateKey: "private.key"
  })

  // Step 1: Get the sending and receiving wallet addresses
  const sendingWalletAddress = await client.walletAddress.get({
    url: "https://ilp.interledger-test.dev/pepeda"
  })
  const receivingWalletAddress = await client.walletAddress.get({
    url: "https://ilp.interledger-test.dev/peperecibe"
  })

  console.log('\nStep 1: got wallet addresses', {
    receivingWalletAddress,
    sendingWalletAddress
  })

  // Step 2: Get a grant for the incoming payment, so we can create the incoming payment on the receiving wallet address
  const incomingPaymentGrant = await client.grant.request(
    {
      url: receivingWalletAddress.authServer
    },
    {
      access_token: {
        access: [
          {
            type: 'incoming-payment',
            actions: ['read', 'complete', 'create']
          }
        ]
      }
    }
  )

  console.log(
    '\nStep 2: got incoming payment grant for receiving wallet address',
    incomingPaymentGrant
  )

  if (!isFinalizedGrant(incomingPaymentGrant)) {
    throw new Error('Expected finalized incoming payment grant')
  }

  // Step 3: Create the incoming payment. This will be where funds will be received.
  const incomingPayment = await client.incomingPayment.create(
    {
      url: receivingWalletAddress.resourceServer,
      accessToken: incomingPaymentGrant.access_token.value
    },
    {
      walletAddress: receivingWalletAddress.id,
      incomingAmount: {
        assetCode: receivingWalletAddress.assetCode,
        assetScale: receivingWalletAddress.assetScale,
        value: '1000'
      }
    }
  )

  console.log(
    '\nStep 3: created incoming payment on receiving wallet address',
    incomingPayment
  )

  // Step 4: Get a quote grant, so we can create a quote on the sending wallet address
  const quoteGrant = await client.grant.request(
    {
      url: sendingWalletAddress.authServer
    },
    {
      access_token: {
        access: [
          {
            type: 'quote',
            actions: ['create', 'read']
          }
        ]
      }
    }
  )

  if (!isFinalizedGrant(quoteGrant)) {
    throw new Error('Expected finalized quote grant')
  }

  console.log('\nStep 4: got quote grant on sending wallet address', quoteGrant)

  // Step 5: Create a quote, this gives an indication of how much it will cost to pay into the incoming payment
  const quote = await client.quote.create(
    {
      url: sendingWalletAddress.resourceServer,
      accessToken: quoteGrant.access_token.value
    },
    {
      walletAddress: sendingWalletAddress.id,
      receiver: incomingPayment.id,
      method: 'ilp'
    }
  )

  console.log('\nStep 5: got quote on sending wallet address', quote)

  // Step 7: Start the grant process for the outgoing payments.
  // This is an interactive grant: the user (in this case, you) will need to accept the grant by navigating to the outputted link.
  const outgoingPaymentGrant = await client.grant.request(
    {
      url: sendingWalletAddress.authServer
    },
    {
      access_token: {
        access: [
          {
            type: 'outgoing-payment',
            actions: ['read', 'create'],
            limits: {
              debitAmount: {
                assetCode: quote.debitAmount.assetCode,
                assetScale: quote.debitAmount.assetScale,
                value: quote.debitAmount.value
              }
            },
            identifier: sendingWalletAddress.id
          }
        ]
      },
      interact: {
        start: ['redirect']
        // finish: {
        //   method: "redirect",
        //   // This is where you can (optionally) redirect a user to after going through interaction.
        //   // Keep in mind, you will need to parse the interact_ref in the resulting interaction URL,
        //   // and pass it into the grant continuation request.
        //   uri: "https://example.com",
        //   nonce: crypto.randomUUID(),
        // },
      }
    }
  )

  console.log(
    '\nStep 7: got pending outgoing payment grant',
    outgoingPaymentGrant
  )
  console.log(
    'Please navigate to the following URL, to accept the interaction from the sending wallet:'
  )
  console.log(outgoingPaymentGrant.interact.redirect)

  await readline
    .createInterface({ input: process.stdin, output: process.stdout })
    .question('\nPlease accept grant and press enter...')

  let finalizedOutgoingPaymentGrant

  const grantContinuationErrorMessage =
    '\nThere was an error continuing the grant. You probably have not accepted the grant at the url (or it has already been used up, in which case, rerun the script).'

  try {
    finalizedOutgoingPaymentGrant = await client.grant.continue({
      url: outgoingPaymentGrant.continue.uri,
      accessToken: outgoingPaymentGrant.continue.access_token.value
    })
  } catch (err) {
    if (err instanceof OpenPaymentsClientError) {
      console.log(grantContinuationErrorMessage)
      process.exit()
    }

    throw err
  }

  if (!isFinalizedGrant(finalizedOutgoingPaymentGrant)) {
    console.log(
      'There was an error continuing the grant. You probably have not accepted the grant at the url.'
    )
    process.exit()
  }

  console.log(
    '\nStep 6: got finalized outgoing payment grant',
    finalizedOutgoingPaymentGrant
  )

  // Step 7: Finally, create the outgoing payment on the sending wallet address.
  // This will make a payment from the outgoing payment to the incoming one (over ILP)
  const outgoingPayment = await client.outgoingPayment.create(
    {
      url: sendingWalletAddress.resourceServer,
      accessToken: finalizedOutgoingPaymentGrant.access_token.value
    },
    {
      walletAddress: sendingWalletAddress.id,
      quoteId: quote.id
    }
  )

  console.log(
    '\nStep 7: Created outgoing payment. Funds will now move from the outgoing payment to the incoming payment.',
    outgoingPayment
  )

  process.exit()
})()