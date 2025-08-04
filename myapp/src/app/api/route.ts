
import { NextResponse } from "next/server";
import axios from "axios"
export const GET = async () => {
  const serverURL = process.env.NEXT_PUBLIC_BACKEND_URL!

  try {
    const response = await axios.get(serverURL);
    return NextResponse.json(response.data);
  }
  catch (error) {
    return NextResponse.error();
  }
};

