import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const post = await prisma.post.create({
        data: {
            id: 1,
            title: 'Diferença como Identidade e Diferença como Diferença',
            content : null,
            published: false,
        },
    }) 
    console.log(post);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
