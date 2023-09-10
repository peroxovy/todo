export default function DeleteButton({onDeleteToDo, id}) {
    return (
        <div className='p-2'>
            <button 
                onClick={()=>{
                    onDeleteToDo(id);
                }}
                className='py-1 px-4 sm:py-2 sm:px-6 text-red-600 sm:text-sm bg-transparent border border-red-600 hover:bg-red-600 hover:text-slate-200 transition-colors duration-300 rounded-md'>Delete</button>
        </div>
    )
}