// app/api/auth/signup/route.js
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb'; // Adjust the import path if needed

export async function POST(request) {
  try {
    const { firstName, lastName, email, password } = await request.json();
    
    // Debugging: Log incoming data
    console.log('Received data:', { firstName, lastName, email, password });

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    const collection = db.collection('users');

    // Check if the user already exists
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Insert the new user
    await collection.insertOne({ firstName, lastName, email, password }); // Note: Password should be hashed in production

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error in signup API route:', error); // Log the error for debugging
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
