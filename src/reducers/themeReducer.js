export default (state = {}, action) => {
  switch (action.type) {
    case 'LIGHT':
      // console.log(action.payload)
      return {
        lightTheme: action.payload
      }

    case 'DARK':
      // console.log(action.payload)
      return {
        lightTheme: action.payload
      }

    default:
      return state
  }
}