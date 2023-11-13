import express from "express"
import prisma from "./prisma" // importing the prisma instance we created.

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
