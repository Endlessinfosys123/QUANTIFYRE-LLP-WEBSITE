import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://placeholder:27017';
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
};

const isPlaceholder = !process.env.MONGODB_URI || 
    process.env.MONGODB_URI.includes('username:password') || 
    process.env.MONGODB_URI.includes('placeholder');

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient | null>;

if (isPlaceholder) {
    clientPromise = Promise.resolve(null);
} else if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient | null>;
    };

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
