import DoneButton from '../Buttons/DoneButton';
import EditButton from '../Buttons/EditButton';
import SaveButton from '../Buttons/SaveButton';
import DeleteButton from '../Buttons/DeleteButton';
import { useState } from 'react';

export default function ToDoItem({id, name, completed, handleCompleteToDo, onEditToDo, onDeleteToDo}) {

    const [edited, setEdited] = useState(false);
    const [saveVisible, setSaveVisible] = useState(false);
    const [newName, setNewName] = useState('');
    const itemClass = completed ? 'text-slate-300 line-through' : 'text-slate-200';

    const changeSaveVisible = (e) => {
        setNewName(name);
        setSaveVisible(!saveVisible);
    }

    const handleSave = (e) => {
        setSaveVisible(!saveVisible);
    }

    return (
        <div className="mt-3">
            <div className='flex justify-center'>
                <div className='sm:flex items-center w-full sm:w-1/2 bg-slate-700 shadow-md rounded-md'>
                    <div className='p-2 flex w-full'>
                        <div className='p-2'>
                            {saveVisible ? (<input type="text" className='p-2 rounded-md' onChange={e => setNewName(e.target.value)} value={newName}/>) : (<span className={itemClass}>{edited ? newName : name}</span>)}
                        </div>
                    </div>
                    <div className='p-2 flex justify-center border-t border-slate-600 sm:border-none'>
                        <DoneButton 
                            handleCompleteToDo={handleCompleteToDo}
                            id={id}
                            completed={completed}
                        />
                        {!saveVisible ? (<EditButton saveVisible={changeSaveVisible}/>) : (<SaveButton onEditToDo={onEditToDo} handleSave={handleSave} id={id} newName={newName}/>)}
                        <DeleteButton
                            onDeleteToDo={onDeleteToDo}
                            id={id}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}