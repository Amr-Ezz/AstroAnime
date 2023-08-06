"use client";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { ProvidersClient } from "../providers/ProvidersClient";

export default function AnimeLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <ProvidersClient>{children}</ProvidersClient>
        <Footer />
      </body>
    </html>
  );
}
