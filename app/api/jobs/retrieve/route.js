import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
    try {
        // Connect to the database
        const client = await clientPromise;
        const db = client.db('snapjob'); // Specify your database name

        // Check if the database connection is established
        if (!db) {
            console.error('Database connection not established');
            return NextResponse.json({ error: 'Database connection error' }, { status: 500 });
        }

        // Fetch all jobs from the collection
        const jobs = await db.collection('snapjob')
        .find({})
        .toArray();

        // Check if jobs are retrieved
        if (!jobs) {
            console.error('No jobs found');
            return NextResponse.json({ error: 'No jobs found' }, { status: 404 });
        }

        return NextResponse.json(jobs);
    } catch (error) {
        // Log the full error details
        console.error('Error fetching jobs:', error);
        return NextResponse.json({ error: 'Failed to load jobs' }, { status: 500 });
    }
}
