'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'

function Page(): JSX.Element {
  const [apiData, setApiData] = useState<any[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/characters')
        console.log('[API Response]', response.data) 
        setApiData(response.data.characters)
      } catch (error) {
        console.error('[ORDER_GET]', error)
        alert('Erro ao carregar dados da API')
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div>
        <h1>Page</h1>
        {apiData ? (
          <ul>
            <div>
              {apiData.map((character: any) => (
                <div key={character.id}>
                  <h1>{character.name}</h1>
                  <Image src={character.image} alt={character.name} width={200} height={200} />
                </div>
              ))}
            </div>
          </ul>
        ) : (
          <p>Carregando dados da API...</p>
        )}
      </div>
    </>
  )
}

export default Page
