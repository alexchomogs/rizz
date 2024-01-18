"use client"

import { useState } from 'react'

import Form from '@/components/Form'
import Result from '@/components/Result.jsx'
import { calculate } from '@/utility/helpers'

export default function Home() {

  const [ score, setScore ] = useState(0);

  function calculateScore(name, major) {
    setScore(calculate(name, major));
  }

  return (
    <main style={{
      padding: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }}>
      <img 
        src="/images/teddy.png" 
        alt="Insanely built teddy hauling an inordinately large domino (not the pizza)"
        style={{ width: 100 }} />
      <h1>Rizzulator 👋</h1>

        {score == 0 ?
          <Form handleCalculate={calculateScore} />
          : <Result score={score} />
        }

    </main>
  )
}
