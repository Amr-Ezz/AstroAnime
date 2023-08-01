"use client";
import "./globals.css";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { ProvidersClient } from "./providers/ProvidersClient";
import { FavouriteProvider } from "../app/providers/favProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <FavouriteProvider>
          <ProvidersClient>
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </ProvidersClient>
        </FavouriteProvider>
        <Footer />
      </body>
    </html>
  );
}
