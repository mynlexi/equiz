import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from "../components/Layout"
import prisma from '../lib/prisma'
import Quiz, { QuizProps } from '../components/Quiz'

// import {PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//     const Quiz = await prisma.post.update({
//       where: { id: 1 },
//       data: { published: true },
//     })
//     console.log(post)
//   }

// main()
//   .catch(e => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.quiz.findMany({
    where: { points: 10 },
    include: {
      User: {
        select: { name: true,
                  email: true },
      },
    },
  })
  return { props: { feed } }
}

type Props ={
  feed: QuizProps[];
}

const Blog: React.FC<Props> = (props) => {
  return(
    <Layout>
      <div className="page">
        <h1>Available Quizzes</h1>
      </div>
      <main>
        {props.feed.map((quiz)=>(
          <div key={quiz.id} className="Quiz">
            <Quiz quiz={quiz}/>
          </div>
        )
        )}
      </main>
    </Layout>
  )
}

export default Blog


