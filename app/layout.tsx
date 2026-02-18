import "./globals.css";
import Header from "@/components/Header";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-(--bg) text-(--fg)">
        <Header />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
