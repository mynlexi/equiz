import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seed() {

  const deleting = await prisma.easy_Quiz.deleteMany ({})

  const question1 = await prisma.easy_Quiz.create({
    data: { 
      title : 'First Ever',
      question: 'x^2',
      points:    1,
      answer_1 : "x-1-y-2",
      answer_2 : "x-1-y-2",
      answer_3 : "x-1-y-2",
      wrong_1_1: "x-1-y-2",
      wrong_1_2: "x-1-y-2",
      wrong_1_3: "x-1-y-2",
      wrong_2_1: "x-1-y-2",
      wrong_2_2: "x-1-y-2",
      wrong_2_3: "x-1-y-2",
      wrong_3_1: "x-1-y-2",
      wrong_3_2: "x-1-y-2",
      wrong_3_3: "x-1-y-2",

    }
  })
  const question2 = await prisma.easy_Quiz.create({
    data: { 
      title : 'Second Ever',
      question: 'x^2*2',
      points:    5,
      answer_1 : "5%3-2",
      answer_2 : "5%3-2",
      answer_3 : "x-1-y-2",
      wrong_1_1: "x-1-y-2",
      wrong_1_2: "x-1-y-2",
      wrong_1_3: "x-1-y-2",
      wrong_2_1: "x-1-y-2",
      wrong_2_2: "x-1-y-2",
      wrong_2_3: "x-1-y-2",
      wrong_3_1: "x-1-y-2",
      wrong_3_2: "x-1-y-2",
      wrong_3_3: "x-1-y-2",

    }
  })
  console.log({deleting, question1, question2})
}

seed()
  .catch((e)=>{
    console.error(e)
    process.exit(1)
  })
  .finally(async ()=> {
    await prisma.$disconnect()
  })
