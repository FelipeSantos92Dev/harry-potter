import axios from 'axios'

import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await axios.get('http://localhost:5000/characters')

    return NextResponse.json(response.data.characters)
  } catch (error) {
    console.log('[ORDER_GET]', error)
    return new NextResponse('Erro interno do servidor!', { status: 500 })
  }
}
