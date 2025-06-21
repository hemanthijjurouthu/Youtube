import React from 'react'

const ChatMessage = ({name,text}) => {

  return (
    <div className="flex pt-2">
        <img alt="user" src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" className="h-7"/>
        <span className="font-bold px-2">{name}</span>
        <span>{text}</span>
    </div>
  )
}

export default ChatMessage