import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ceasar Attar - Portfolio",
  description: "Ceasar Attar's personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header Section */}
        <header className="bg-gray-100 py-4 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">Ceasar Attar</h1>
            <nav className="flex space-x-6">
              <a href="#about" className="text-blue-500 hover:underline">
                About
              </a>
              <a href="#projects" className="text-blue-500 hover:underline">
                Projects
              </a>
              <a href="#contact" className="text-blue-500 hover:underline">
                Contact
              </a>
              <a
                href="/resume.pdf"
                download
                className="text-blue-500 font-semibold hover:underline"
              >
                Download Resume
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>

        {/* Footer Section */}
        <footer className="bg-gray-100 py-4 mt-10">
          <div className="max-w-6xl mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Ceasar Attar. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
