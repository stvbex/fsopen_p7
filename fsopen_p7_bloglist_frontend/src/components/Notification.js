import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  if (notification === null) {
    return null
  }

  const divStyle = {
    color: notification.color
  }

  return (
    <div className='notification' style={divStyle} >
      {notification.message}
    </div>
  )
}

export default Notification