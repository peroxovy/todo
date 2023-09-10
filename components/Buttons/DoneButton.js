export default function DoneFunction({handleCompleteToDo, id, completed}) {

    const buttonText = completed ? 'Undone' : 'Done';

    return (
        <div className='p-2'>
            <button 
                onClick={ () => {
                    handleCompleteToDo(id);
                    }
                }
                className='py-1 px-4 sm:py-2 sm:px-6 text-green-600 sm:text-sm bg-transparent border border-green-600 hover:bg-green-600 hover:text-slate-200 transition-colors duration-300 rounded-md'>{buttonText}</button>
        </div>
    )
}