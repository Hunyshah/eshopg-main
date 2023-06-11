import HeaderMain from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ContextProvider from "@/app/context";
import { ReactElement } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from "@/app/context";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Huny Shah",
  description: "My Own next Now",
};

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <ContextProvider>
            <HeaderMain />
            {children}
            </ContextProvider>
            
            
        </>
      </body>
    </html>
  );
}
