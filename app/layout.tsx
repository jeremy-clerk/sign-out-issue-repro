import {
  ClerkProvider
} from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={"h-dvh w-dvw"}>
        <body className={"h-full flex-col flex"}>
          <header className={"flex gap-4 p-6"}>
            <Link href={"/protected"} >Protected</Link>
            <Link href={"/unprotected"}>Unprotected</Link>
          </header>
          <main className={"flex-col flex h-full"}>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
