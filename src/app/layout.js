"use client"
import "./globals.css";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { ProvidersClient } from "./providers/ProvidersClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ProvidersClient>
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </ProvidersClient>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
