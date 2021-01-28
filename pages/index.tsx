import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from "../components/Layout"
import prisma from '../lib/prisma'
import Quiz, { QuizProps } from '../components/Quiz'
import { signIn, signOut, useSession } from "next-auth/client";


export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.quiz.findMany({
    where: { },
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
  console.log(props)
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


