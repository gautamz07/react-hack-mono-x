import React, { useEffect, useState } from 'react'
import FormAddItem from './AddItem'
import UserList from './ListItems'
import NewsComponent from './suplimentalComponents/news' 
import './styles/app.css'
import { Container, Snackbar } from '@mui/material'

const AppToDoList = () => {

  const [ todoItemList, setTodoItemList ] = useState([])
  const [ currentInput, setCurrentInput ] = useState('')
  const [ showNotification, setShowNotification ] = useState({ show: false, text: '' })

  useEffect(() => {
    // if(currentInput) { setCurrentInput('') }
  }, [currentInput])

  const createNewTodo = () => {
    setTodoItemList([...todoItemList, { text: currentInput, done: false }])
  }

  const markDone = (itemIdx) => {
    const copyOfToDoItems = [...todoItemList]
    const todoItem = todoItemList[itemIdx]
    const checkedDecider = !todoItem.done
    copyOfToDoItems.splice(itemIdx, 1, { ...todoItem, done: checkedDecider})
    setTodoItemList(copyOfToDoItems)
  }

  const deleteTask = (itemIdx) => {
    const copyOfToDoItems = [...todoItemList]
    copyOfToDoItems.splice(itemIdx, 1)
    setTodoItemList(copyOfToDoItems)
  }

  const handleNotification = ({ show = true, text = '' }) => {
    setShowNotification({ show, text })
  }

  return (<>
    <div 
      style={{
        maxWidth:'50vw',
        margin: '0 auto'
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <FormAddItem
        createNewItem={createNewTodo}
        userInput={currentInput}
        updateUserInput={setCurrentInput}
      />
      <UserList
        userList={todoItemList}
        done={markDone}
        deleteItem={deleteTask}
        handleNotif={handleNotification}
      />
      <Snackbar
        open={showNotification.show}
        autoHideDuration={2500}
        onClose={() => handleNotification({ show: false })}
        message={showNotification.text}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
      <NewsComponent />
    </div>
  </>)
}

export default AppToDoList