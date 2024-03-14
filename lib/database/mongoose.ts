import mongoose, {Mongoose} from "mongoose"; // Importing mongoose and Mongoose types from the mongoose module
//  mongoose is the default export of the Mongoose library, representing the library itself, while Mongoose might refer to the type or class exported by the library, especially in TypeScript contexts. Despite the capitalization difference, they essentially represent the same MongoDB ODM library for Node.js.


const MONGODB_URL = process.env.MONGODB_URL; // Retrieving MongoDB connection URL from environment variables

// Defining an interface for the mongoose connection
interface MongooseConnection {
	conn: Mongoose | null; // Mongoose connection object or null
	promise: Promise<Mongoose> | null; // Promise for mongoose connection or null
}

// Checking if there's a cached mongoose connection in the global scope
let cached: MongooseConnection = (global as any).mongoose;

// If no cached connection exists, initialize it
if (!cached) {
	cached = (global as any).mongoose = {
		conn: null, // Initialize mongoose connection object as null
		promise: null, // Initialize promise as null
	};
}

// Exporting a function to connect to the MongoDB database
export const connectToDatabase = async () => {
	// If there's a cached connection, return it
	if (cached.conn) return cached.conn;

	// If MongoDB URL is not provided, throw an error
	if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

	// If there's no cached promise, create one and connect to the database
	cached.promise =
		cached.promise ||
		mongoose.connect(MONGODB_URL, {
			// Connecting to MongoDB using mongoose.connect method
			dbName: "Pixcellence", // Specify the name of the database
			bufferCommands: false, // Disable buffering of commands
		});

	// Await the connection promise to resolve and store the connection in the cache
	cached.conn = await cached.promise;

	// Return the mongoose connection
	return cached.conn;
};
