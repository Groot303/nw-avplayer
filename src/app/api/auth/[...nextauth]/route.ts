import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import clientPromise from "../../../../lib/mongodb/client";

export const authOptions = {
	// adapter: MongoDBAdapter(clientPromise),
	providers: [
		// EmailProvider({
		// 	server: process.env.EMAIL_SERVER,
		// 	from: process.env.EMAIL_FROM,
		// }),
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
	],

	debug: true,
};

export const handler = NextAuth(authOptions);
// export default NextAuth(authOptions);
export { handler as GET, handler as POST };
