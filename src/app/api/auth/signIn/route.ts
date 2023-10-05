import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    id: 1,
  })
}
