import { createAuthenticatedClient } from "@interledger/open-payments";

const client = await createAuthenticatedClient({
  walletAddressUrl: WALLET_ADDRESS,
  privateKey: PRIVATE_KEY_PATH,
  keyId: KEY_ID,
});
