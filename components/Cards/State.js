export default function State({ message }) {
    return (
        <div className="p-2 flex justify-center">
            <div className="p-2 bg-green-400 border-2 border-green-800 rounded-md">
                <span className="text-green-800 font-semibold">
                    {message}
                </span>
            </div>
        </div>
    )
}