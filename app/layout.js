import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
