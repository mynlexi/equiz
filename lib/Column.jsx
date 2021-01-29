import React from 'react'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Answer from './Answer'



const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
min-width: 220px;

background-color: white;

display: flex;
flex-direction: column;
`

const Title = styled.h3`
padding: 8px;
`

const Answerlist = styled.div`
padding: 8px;
background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};

// display: flex
`

export default class Column extends React.Component {
  render() {
    return(
     <Container>
       <Title>
        {this.props.column.title}         
       </Title>
       <Droppable
        droppableId={this.props.column.id}
        type="answer"
        isDropDisabled={this.props.isDropDisabled}   
        >

        {(provided, snapshot) => (
          <Answerlist
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          {...provided.droppableProps}
          >
            {this.props.answers.map((answer, index) =>
            <Answer key={answer.id} answer={answer} index={index} />
            ) }
            {provided.placeholder}
          </Answerlist>
        )}

       </Droppable>

     </Container>
    )
  }
}