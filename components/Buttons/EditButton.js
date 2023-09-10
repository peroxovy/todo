export default function EditButton({saveVisible}){
    return (
        <div className='p-2'>
            <button
                onClick={saveVisible}
                className='py-1 px-4 sm:py-2 sm:px-6 text-sky-600 sm:text-sm bg-transparent border border-sky-600 hover:bg-sky-600 hover:text-slate-200 transition-colors duration-300 rounded-md'>Edit</button>
        </div>
    )
}