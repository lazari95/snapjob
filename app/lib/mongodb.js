import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const options = {};

let client;
let clientPromise;

// Default export for clientPromise to be used directly
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

// Named export for connectToDatabase function
export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db('snapjob'); // Ensure 'snapjob' is the correct database name
  return { db, client };
}
