

export default function Letter({ letter }: { letter: string } ) {
    return (
        <div className="flex text-4xl items-center justify-center h-16 w-16 border border-2 border-solid border-white p-4 m-1 font-extrabold">
            { letter }
        </div>
    )
}