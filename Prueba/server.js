import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Conexión a MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',       // tu usuario de MySQL
  password: '',   // tu contraseña
  database: 'mi_base'
})

// Ruta para guardar usuarios
app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body

    if (!name || !email) {
      return res.status(400).json({ message: 'Faltan datos' })
    }

    await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email])

    res.json({ message: 'Usuario guardado correctamente ✅' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error en el servidor' })
  }
})

app.listen(3000, () => console.log('Servidor en http://localhost:3000'))
