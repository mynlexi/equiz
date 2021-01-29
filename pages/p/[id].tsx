import React from "react"
import ReactDOM from 'react-dom';
import { GetServerSideProps } from "next"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout"
import { QuizProps } from '../../components/Quiz'
import prisma from '../../lib/prisma'
import Answer from "../../components/quizDnD"
import {DragDropContext } from 'react-beautiful-dnd'
import transformedData from '../../lib/transformedData'
import styled from 'styled-components'
import Column from '../../lib/Column'


const Container = styled.div`
  display: flex
`

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

// transform the props so they show up a certain way -> just give them to other component?

export class Quiz extends React.Component {
  state = transformedData


  onDragEnd = result => {

    const {destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }


    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId]

    if (start === finish) { //same column, different order
      
        const newAnswerIds = Array.from(start.answerIds);

        newAnswerIds.splice(source.index, 1);
        newAnswerIds.splice(destination.index, 0, draggableId)

        const newColumn = {
          ...start,
          answerIds: newAnswerIds
        };

        const newState = {
          ...this.state,
          columns: {
            ...this.state.columns,
            [newColumn.id]: newColumn
          }
        }

        this.setState(newState);
        return;
        }
      // else, moved answer between columns
    

  }

  render() {

  

  return(
    <Layout>
      <div>
        <h2>
          {this.props.title}
        </h2>
        <p>Solve this {this.props.question} by dragging each step of the solution in the solution container</p>
      </div>
      <DragDropContext>
        <Container     
        >
          {this.state.columnOrder.map((columnId, index) =>{
            const column = this.state.columns[columnId];
            const answers = column.answerIds.map(answerId => this.state.answers[answerId])


            return  <Column
                      key={column.id}
                      column={column}
                      answers={answers}
                      index={index}
                      />
          })}

        </Container>



      </DragDropContext>
    </Layout>
  )
}}
export default Quiz