import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({ message: 'Ok', songs });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error });
  }
}

export async function POST() {
  try {
    return NextResponse.json({ message: 'Ok', songs });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error });
  }
}