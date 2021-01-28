import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type QuizProps = {
  id: number;
  title: string;
  User: {
    name: string;
    email: string;
  } ;
  question: string;
  answer_1_c: string;
  answer_2_c: string;
  answer_3_c: string;
  answer_1_1: string;
  answer_1_2: string;
  answer_2_1: string;
  answer_2_2: string;
  answer_3_1: string;
  answer_3_2: string;
};

const Quiz: React.FC<{ Quiz: QuizProps }> = ({ quiz }) => {
  const userName = quiz.User ? quiz.User.name : "Unknown user";
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${quiz.id}`)}>
      <h2>{quiz.title}</h2>
      <small>By {userName}</small>
      <p>{quiz.question}</p>
     
      
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Quiz;