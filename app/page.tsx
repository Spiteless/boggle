'use client'

import Letter from '@/components/Letter'
import { useEffect, useState } from 'react'
import createBoard from '@/lib/createBoard'
import { seededRandom } from '@/lib/random'

export default function Home() {
  const [board, setBoard] = useState([
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
  ])
  const [seed, setSeed] = useState("")

  useEffect(() => {
    // Set initial seed
    const newSeed = new Date().toDateString()
    setSeed(newSeed)
  }, [])

  useEffect(() => {
    const newBoard = createBoard(seed)
    setBoard(newBoard)
  }, [seed])

  const handleChange = (e: any) => {
    setSeed(e.target.value)
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
      <input
        className="bg-gray-50 mb-4 w-full border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-black dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={seed}
        type="text"
        value={seed}
        onChange={handleChange}
      />

        <div>
          {board.map((row, i) => (
            <div key={i} className="flex">
              {row.map((letter, j) => (
                <Letter key={j} letter={letter} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}