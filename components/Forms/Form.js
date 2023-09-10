import { useState } from "react"
import SubmitButton from '../Buttons/SubmitButton';

export default function Form({onAddToDo}) {

    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddToDo(name);
        setName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <div className="grid gap-8 items-start justify-center">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative w-full bg-slate-800 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                        <input 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text" className="w-full p-2 px-4 text-slate-200 bg-slate-800 border border-slate-800 rounded-md" placeholder="Type here your task" required/>
                    </div>
                </div>
                </div>
                <div className='mt-5'>
                    <SubmitButton/>
                </div>
            </div>
        </form>
    )
}