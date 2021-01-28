import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  min-width: 220px;

  background-color: white;
`


export type QuizAnswerTypes = {
  
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


const QuizAnswers: React.FC<QuizAnswerTypes> = (quiz) => {
  
  console.log(quiz)
  const first_answer = quiz.answer_1_1
  console.log(first_answer)
  


  return(
  <Container>
    <p>{quiz.answer_1_c	}</p>
    <p>{quiz.answer_2_c	}</p>
    <p>{quiz.answer_3_c	}</p>
    <p>{quiz.answer_1_1	}</p>
    <p>{quiz.answer_1_2	}</p>
    <p>{quiz.answer_2_1	}</p>
    <p>{quiz.answer_2_2	}</p>
    <p>{quiz.answer_3_1	}</p>
    <p>{quiz.answer_3_2	}</p>
  </Container>
  )
  
}
export default QuizAnswers