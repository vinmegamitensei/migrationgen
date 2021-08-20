import React, { createContext, useContext, useState } from 'react'

const MessageContext = createContext({
  handleAddMessage: () => {},
  handleRemoveMessage: () => {},
  handleEditMessage: () => {},
  messages: [],
  messageToEdit: null
})

const useMessageContext = () => useContext(MessageContext);

function MessageProvider({children}) {
  const [messages, setMessages] = useState([]);
  const [messageToEdit, setMessageToEdit] = useState(null);

  const handleAddMessage = (msg) => {
    const indexToEdit = messages.findIndex((m) => m.code === msg.code)
    setMessageToEdit(null)
    if(indexToEdit !== -1) {
      return setMessages(prevMessages => [
        ...prevMessages.slice(0, indexToEdit), 
        msg, 
        ...prevMessages.slice(indexToEdit+1)
      ])
      
    } 
    setMessages(m => m.concat(msg));
    
  }

  const handleRemoveMessage = (codeInput) => {
    setMessages(m => m.filter(({code}) => codeInput !== code))
  }

  const handleEditMessage = (codeInput) => {
    const messageToEdit = messages.find(({code}) => codeInput === code)
    setMessageToEdit({
        code: messageToEdit.code,
        pt: messageToEdit.content[1].text,
        en: messageToEdit.content[0].text
    })
  }

  return (
    <MessageContext.Provider value={{
      handleAddMessage,
      handleRemoveMessage,
      handleEditMessage,
      messages,
      messageToEdit
    }}>
      {children}
    </MessageContext.Provider>
  )
}

const withMessageProvider = (WrappedComponent) => props => {
  return (
    <MessageProvider>
      <WrappedComponent {...props} />
    </MessageProvider>
  )
}

export default MessageProvider
export { useMessageContext, withMessageProvider }