import React from 'react'

function Item({ todo }) {
  debugger
  const { id, title, completed } = todo
  const h1 = <h1>{title}</h1>
  const text = completed ? <strike>{h1}</strike> : h1; 

  return (
    <div data-testid={`todo-${id}`} key={todo.id}>{text}</div>
  )
}

export default Item;