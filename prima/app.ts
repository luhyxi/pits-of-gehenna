import express from "express"
import prisma from "./client" // importing the prisma instance we created.

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.post("/users", async (req, res) => { // Post user block
    try {
      const { name, posts } = req.body
  
      const newUser = await prisma.user.create({
        data: {
          name,
          posts: {
            connectOrCreate: posts.map((post: string) => ({
              where: {name: post,},
              create: { name: post,},
            })),
          },
        },
      })
      res.json(newUser)
    } catch (error: any) { // Bloco Catch
      console.log(error.message)
      res.status(500).json({
        message: "Internal Server Error",})}
})


app.get("/users", async (req, res) => { //Get all users
    try {
        const users = await prisma.user.findMany()

        res.json(users)
    } catch (error) { // Bloco catch
        res.status(500).json({
        message: "Something went wrong",})}
})

app.get("/users", async (req, res) => { // Get all posts FROM user
    try {
        const users = await prisma.user.findMany({
        include: { posts: true,},
    })
      res.json(users)
    } catch (error) { // Bloco catch
      res.status(500).json({
        message: "Something went wrong",})}
})

app.put("/users/:id", async (req, res) => { //Bloco put, adiciona posts a um user
  try {
    const { name, posts } = req.body
    const { id } = req.params

    const updatedUser = await prisma.user.update({
      where: {
        id,
      }, data: {
        name,
        posts: {
          connectOrCreate: posts.map((post: string) => ({
            where: { title: post },
            create: { title: post },
          })),
        },
      },
    })
    res.json(updatedUser)
  } catch (error) { // Bloco catch!!!
    res.status(500).json({
      message: "Something went wrong",
    })
  }
})

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params

    const deletedUser = await prisma.user.delete({
      where: {
        id,
      },
    })
    res.json(deletedUser)
  } catch (error) { // Bloco catch
    res.status(500).json({
      message: "Something went wrong",
    })
  }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
