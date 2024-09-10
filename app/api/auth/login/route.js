// app/api/auth/login/route.js
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb'; // Adjust the import path if needed

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    const collection = db.collection('users');

    // Check if the user exists
    const user = await collection.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
    }

    // Check if the password matches (assuming you are skipping password verification)
    // If you want to verify passwords in the future, you'll need to install and use bcrypt.

    // Respond with a success message
    return NextResponse.json({ message: 'Logged in successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error in login API route:', error); // Log the error for debugging
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
