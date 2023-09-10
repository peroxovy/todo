export default function SubmitButton(){
    return(
        <div className="p-4 flex justify-center">
            <button type="submit" className="py-2 px-6 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md text-slate-200  duration-300 transition-colors hover:from-purple-500 hover:to-pink-500">Add Task</button>
        </div>
    )
}