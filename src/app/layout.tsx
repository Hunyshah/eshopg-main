import HeaderMain from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ContextProvider from "@/app/context";
import { ReactElement } from "react";
import ThemeProvider from "@/app/context";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <ThemeProvider>
            <HeaderMain />
            {children}
          </ThemeProvider>
        </>
      </body>
    </html>
  );
}
