import React, { createContext, useState, useContext } from 'react'

const ChatsContext = createContext()

export const ChatsProvider = ({children}) => {
    const [chatsData, setChatsData] = useState([])
    return (
        <ChatsContext.Provider value={{ chatsData, setChatsData }}>
            {children}
        </ChatsContext.Provider>
    )
}

export const useChats = () => useContext(ChatsContext)