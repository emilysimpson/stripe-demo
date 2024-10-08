import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET (req, res) {
  const fileDir = path.join(process.cwd(), 'public/productData.json');
  const fileContents = await fs.readFile(fileDir, 'utf8');
  const data = JSON.parse(fileContents);
  return NextResponse.json(data);
}