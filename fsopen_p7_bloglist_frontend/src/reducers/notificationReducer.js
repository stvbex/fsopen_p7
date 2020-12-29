const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      // Cancel previous reset timeout
      if (state !== null) {
        clearTimeout(state.resetId)
      }

      return action.data

    case 'RESET_NOTIFICATION':
      return null
      
    default:
      return state
  }
}

export const setNotification = (message, variant, seconds) => {
  return async dispatch => {
    const resetId = setTimeout(() => dispatch(resetNotification()), seconds * 1000)

    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        message,
        variant,
        resetId
      }
    })
  }
}

export const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION'
  }
}

export default notificationReducer