export const lightTheme = (value) => dispatch => {
  // console.log(value)
  dispatch({
    type: 'LIGHT',
    payload: value
  })
}

export const darkTheme = (value) => dispatch => {
  // console.log(value)
  dispatch({
    type: 'DARK',
    payload: value
  })
}

