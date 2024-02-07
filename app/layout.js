import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

// Components
import Navbar from "./Components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
