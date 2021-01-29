import React from 'react'
import styled from 'styled-components'
import {Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color:${props => 
    props.isDragDisabled
    ? 'lightgrey'
    : props.isDragging ? 'lightgreen' : 'white'};

  // display: flex;
  // width: 40px;
  

  // justify-content: center;
  // align-items: center;
  // height: 40px;
`

export default class Answer extends React.Component {
  render() {
    return(
      <Draggable
        draggableId={this.props.answer.id}
        index={this.props.index}
        >
        {(provided, snapshot) =>( 

          <Container 
          {...provided.draggableProps}
           {...provided.dragHandleProps}// can be applied to child element and drag whole part (i think)
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          >
 
 
 
         {this.props.answer.content}
         </Container>
           )}
      </Draggable>
    )
  }
}