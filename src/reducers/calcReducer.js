export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD':
      console.log(action.payload[0] + action.payload[1])
      return {
        result: action.payload[0] + action.payload[1]
      }

    case 'SUBTRACT':
      console.log(action.payload[0] - action.payload[1])
      return {
        result: action.payload[0] - action.payload[1]
      }

    case 'MULTIPLY':
      console.log(action.payload[0] * action.payload[1])
      return {
        result: action.payload[0] * action.payload[1]
      }

    case 'DIVIDE':
      console.log(action.payload[0] / action.payload[1])
    	return {
      	result: action.payload[0] / action.payload[1]
      }

    default:
      return state
  }
}