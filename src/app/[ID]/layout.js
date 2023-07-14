import Navbar from "@/components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

export default function AnimeLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
