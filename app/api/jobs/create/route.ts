import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb'; // Adjust the path as needed

export async function POST(request: NextRequest) {
    try {
        // Connect to the database
        const client = await clientPromise;
        const db = client.db('snapjob'); // Specify your database name
        const collection = db.collection('jobs'); // Adjust collection name as needed

        // Parse the request body as JSON
        const body = await request.json();

        // Validate the input
        const { title, description, location, company, salary } = body;
        if (!title || !description || !location || !company || !salary) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // Create a new job object
        const newJob = {
            title,
            description,
            location,
            company,
            salary,
            createdAt: new Date(), // Optional: Add a timestamp for when the job was created
        };

        // Insert the new job into the database
        const result = await collection.insertOne(newJob);

        // Check if the insertion was successful
        if (result.insertedId) {
            return NextResponse.json({ message: 'Job created successfully', jobId: result.insertedId.toString() }, { status: 201 });
        } else {
            return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
        }
    } catch (error) {
        console.error('Error creating job:', error);
        return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
    }
}
