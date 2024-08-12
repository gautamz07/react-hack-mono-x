import React from 'react'

import Item from './item'
const todos = [
  {
    id: 1,
    title: 'Wash dishes',
    completed: false
  },
  {
    id: 2,
    title: 'raise VC funds',
    completed: true
  }
]

function todo() {
  return (<div style={{ textAlign: 'center' }}>{todos.map((todo) => <Item todo={todo} />)}</div>)
}

export default todo