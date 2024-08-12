import { render, screen, cleanup } from '@testing-library/react';
// import Todo from '../todo'
import renderer from 'react-test-renderer'
import TodoItem from '../item'
/*
test('should render todo component', () => {
  // expect(true).toBe(false)
  render(<Todo/>)
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('Hello')
})
*/

afterEach(() => {
  cleanup()
})

test('should render non-completed todo item', () => {
    const todo = { id: 1, title: 'Wash dishes', completed: false }
    render(<TodoItem todo={todo}/>)
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Wash dishes')
    expect(todoElement).not.toContainHTML('strike');
})

test('should render completed todo item', () => {
  const todo = { id: 2, title: 'Wash car', completed: true }
  render(<TodoItem todo={todo}/>)
  const todoElement = screen.getByTestId('todo-2');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('Wash car');
  console.log(todoElement)
  expect(todoElement).toContainHTML('strike');
})

test('match snapshot', () => {
  const todo = { id: 2, title: 'Wash car', completed: true }
  const tree = renderer.create(<TodoItem todo={todo}/>)
  expect(tree).toMatchSnapshot()
})