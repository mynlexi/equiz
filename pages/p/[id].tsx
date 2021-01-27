import React from "react"
import { GetServerSideProps } from "next"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout"
import { QuizProps } from '../../components/Quiz'
import prisma from '../../lib/prisma'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const quiz = await prisma.quiz.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      User: {
        select: { name: true },
      },
    },
  })
  return {
    props: quiz,
  }
}

const Quiz: React.FC<QuizProps> = (props) => {
  let title = props.title

  return(
    <Layout>
    <div>
      <h2>{title}</h2>
    </div>
    <p>By {props?.User?.name || "Unknown User"} </p>
    <p>{props.question}</p>
    <p>{props.answer_1	}</p>
    <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }
        .actions {
          margin-top: 2rem;
        }
        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }
        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}
export default Quiz