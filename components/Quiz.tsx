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
  answer_1: string;
};

const Quiz: React.FC<{ Quiz: QuizProps }> = ({ quiz }) => {
  const userName = quiz.User ? quiz.User.name : "Unknown user";
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${quiz.id}`)}>
      <h2>{quiz.title}</h2>
      <small>By {userName}</small>
      <p>{quiz.question}</p>
      <p>{quiz.answer_1	}</p>
      
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