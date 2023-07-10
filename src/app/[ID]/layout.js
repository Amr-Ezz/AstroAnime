import Footer from "../../components/Footer/footer";

export default function AnimeLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
