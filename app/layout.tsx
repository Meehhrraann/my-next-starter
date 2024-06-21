import { AuthProvider } from "./Providers";
import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeProvider";

import "./globals.css";
// import "../styles/prism.css";

// fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

// Metadata: FAVICON + DESC
export const metadata: Metadata = {
  title: "Dev Overflow",
  description: "my desc",
  icons: {
    icon: "/assets/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
