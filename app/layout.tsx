import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
});
export const metadata: Metadata = {
  title: "O'zbegram",
  description: "O'zbegram web application created by Jony",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
