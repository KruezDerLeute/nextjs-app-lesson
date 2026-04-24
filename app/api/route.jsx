import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "hello, this is the API route! bruh",
    status: "success",
  });
}
