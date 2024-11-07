import { NextResponse } from 'next/server';
import {getAllSongsDB} from '@/app/actions';

export async function GET() {
  try {
    const {songs} = await getAllSongsDB();
    return NextResponse.json({ message: 'Ok', songs });
  } catch (error) {
    return NextResponse.json({ message: 'Error al obtener las songs', error });
  }
}