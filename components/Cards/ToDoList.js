import { useState } from 'react';

import ToDoItem from '../Cards/ToDoItem';

export default function ToDoList({toDoList, handleCompleteToDo, onEditToDo, onDeleteToDo}){
    return (
        <div className="p-2">
            {toDoList.map((item) => (
                <ToDoItem 
                    key={item.id} 
                    id={item.id} 
                    name={item.name} 
                    completed={item.completed} 
                    handleCompleteToDo={handleCompleteToDo}
                    onEditToDo={onEditToDo}
                    onDeleteToDo={onDeleteToDo}
                />
            ))}
        </div>
    )
}