import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/name`);
  console.log(process.env.NEXT_PUBLIC_API_URL);

  // process.env.NEXT_PUBLIC_API_URL/name - http://localhost:3001/name
  const data = await response.data;

  return NextResponse.json({
    name: data,
  });
}
