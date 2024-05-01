import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fallout Vault Map",
  description: "Map of known and speculated vaults",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " root " + "h-screen border border-orange-600"
        }
      >
        {children}
      </body>
    </html>
  );
}
