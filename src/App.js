import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo'
function App() {

  const [todoData, setTodoData] = useState([])
  const [newTodo, setNewTodo] = useState()

  useEffect(()=>{
    setTodoData(['firstItem', 'secondItem'])
  }, [])

  const handleClick = () =>{
      let newList = [...todoData, newTodo]
      // console.log('newList', newList)
      // console.log('todoData', todoData)
      // console.log('newTodo',newTodo)
       console.log(newList)
      setTodoData(newList)
  }
  const handleChange = (event) =>{
      const newTodo = event.target.value
      setNewTodo(newTodo)
  }
  const handleDelete = (title) =>{
    let newList = todoData
      setTodoData(
        newList.filter(item =>{
          return item !== title
        })
      )
  }

  const handleEdit = (title, newValue) =>{
    const newList = todoData.map(item =>{
       if(item === title){
         return newValue
       }else{
          return item
       }
     })
     setTodoData(newList)
  }

  const todoList = todoData.map((item,index) =>{
    return <Todo key={index} title={item} delete={handleDelete} edit={handleEdit}/>
  })
  return (
    <div className="App">

      {todoList}
      <input type='text' onChange={handleChange}></input>
      <button onClick={handleClick}> Add </button>
    </div>
  );
}

export default App;
