import type {Metadata} from "next";
import {IBM_Plex_Sans} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import {ClerkProvider} from "@clerk/nextjs";

//Font configuration
const IBMPlex = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-ibm-plex", // Custom property name
});

export const metadata: Metadata = {
	title: "PiXcellence",
	description: "AI powered image generator",
};

export default function RootLayout({
	//RootLayout is a wrapper for all pages
	children, //children is the content of the page
}: Readonly<{
	//Readonly is a utility type that makes all properties of an object readonly
	children: React.ReactNode; //React.ReactNode is a type that represents any node that can be rendered in React
}>) {
	return (
		<ClerkProvider appearance={{variables: {colorPrimary: "#624cf5"}}}>
			<html lang="en">
				<body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
