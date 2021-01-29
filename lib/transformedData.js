const transformedData = {
  answers: {
    'answer-1': {id: 'answer-1', content: 'answer_1_1'},
    'answer-2': {id: 'answer-2', content: 'answer_1_2'},
    'answer-3': {id: 'answer-3', content: 'answer_1_c'},
    'answer-4': {id: 'answer-4', content: 'answer_2_c'},
    'answer-5': {id: 'answer-5', content: 'answer_2_2'},
    'answer-6': {id: 'answer-6', content: 'answer_2_1'},
    'answer-7': {id: 'answer-7', content: 'answer_3_c'},
    'answer-8': {id: 'answer-8', content: 'answer_3_1'},
    'answer-9': {id: 'answer-9', content: 'answer_3_2'},
  },
  columns: {
    'column-1' : {
        id: 'column-1',
        title: 'Start',
        answerIds: ['answer-1', 'answer-2', 'answer-3']
    },
    'column-2' : {
      id: 'column-2',
      title: 'Middle',
      answerIds: ['answer-4', 'answer-5', 'answer-6']
    },
    'column-3' : {
      id: 'column-3',
      title: 'End',
      answerIds: ['answer-7', 'answer-8', 'answer-9']
    },
    'column-4' : {
      id: 'column-4',
      title: 'Solution',
      answerIds: []
    },
  },
  columnOrder: ['column-4','column-1', 'column-2', 'column-3',]
}

export default transformedData