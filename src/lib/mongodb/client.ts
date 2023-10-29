// import { MongoClient } from "mongodb";

// const url = process.env.MONGODB_URL as string;
// const options = {
// 	useUnifiedTopology: true,
// 	useNewUrlParser: true,
// };

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URL) {
// 	throw new Error("Please add your Mongo URI to .env.local");
// }

// if (process.env.NODE_ENV === "development") {
// 	if (!global._mongoClientPromise) {
// 		client = new MongoClient(url, options);
// 		global._mongoClientPromise = client.connect();
// 	}
// 	clientPromise = global._mongoClientPromise;
// } else {
// 	client = new MongoClient(url, options);
// 	clientPromise = client.connect();
// }

// export default clientPromise;
