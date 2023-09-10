"use client";

import { useState, useEffect } from "react"

import Header from '../components/Cards/Header';
import State from '../components/Cards/State';
import Form from '../components/Forms/Form';
import ToDoList from '../components/Cards/ToDoList';

export default function Home() {

  const [successMessage, setSuccessMessage] = useState('');
  const [id, setId] = useState(0);
  const [toDoList, setToDoList] = useState(() => {
    const storedValue = localStorage.getItem("TODOS");

    if(storedValue == null) return [];

    return JSON.parse(storedValue);
  });

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(toDoList));
  }, [toDoList]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  function addToDo(name) {
    if(name)
    {
      setId(id + 1);
      setToDoList([...toDoList, { id: id, name: name, completed: false }]);
      setSuccessMessage('Created new task!');
    }
  }

  function completeToDo(id) {
    setToDoList(toDoList.map(item => {
      if(item.id === id) {
        setSuccessMessage(!item.completed ? 'Task "' + item.name + '" has been completed!' : 'Task "' + item.name + '" has been marked as undone!');
        return { ...item, completed: !item.completed }
      } else {
        return item;
      }
    }));
  }

  function editToDo(id, name) {
    setToDoList(toDoList.map(item => {
      if(item.id === id) {
        setSuccessMessage('Changed task name!');
        return { ...item, name: name }
      } else {
        return item;
      }
    }))
  }

  function deleteToDo(id) {
    setToDoList(
      toDoList.filter(item => item.id !== id)
    );
    setSuccessMessage('Deleted task!');
  }

  console.log(toDoList);

  return (
    <main className="p-4 sm:flex sm:flex-col">
      <div className="p-2">
        <Header />
      </div>
      <div className="p-2 mt-3">
        <Form onAddToDo={addToDo} />
      </div>
      <div className="p-2 mt-3">
        {successMessage && <State message={successMessage} />}
      </div>
      <div className="p-2 mt-2">
        <ToDoList
          toDoList={toDoList}
          handleCompleteToDo={completeToDo}
          onEditToDo={editToDo}
          onDeleteToDo={deleteToDo}
        />
      </div>
    </main>
  )
}
