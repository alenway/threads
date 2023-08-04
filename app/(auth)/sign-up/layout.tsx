import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

export const metadata = {
    title: "Threads",
    description: "A Next.js 13 Meta Threads Application"
}

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({children}: {children: ReactNode}){
    return (<ClerkProvider>
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    </ClerkProvider>
    )
}