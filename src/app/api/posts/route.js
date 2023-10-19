import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
export async function GET() {
    console.log(process.cwd())
    const post = fs.readFileSync(process.cwd() + `/src/posts/centrar-elementos-css.md`, 'utf-8')
    return NextResponse.json({ post })
}
