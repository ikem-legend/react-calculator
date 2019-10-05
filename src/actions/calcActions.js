export const addOp = (val1, val2) => dispatch => {
  dispatch({
    type: 'ADD',
    payload: [val1, val2]
  })
}

export const subtractOp = (val1, val2) => dispatch => {
  dispatch({
    type: 'SUBTRACT',
    payload: [val1, val2]
  })
}

export const multiplyOp = (val1, val2) => dispatch => {
  dispatch({
    type: 'MULTIPLY',
    payload: [val1, val2]
  })
}

export const divideOp = (val1, val2) => dispatch => {
  dispatch({
    type: 'DIVIDE',
    payload: [val1, val2]
  })
}