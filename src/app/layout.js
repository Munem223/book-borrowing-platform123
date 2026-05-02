import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = { title: "BookNest | Online Book Borrowing Platform", description: "Borrow books digitally" };

export default function RootLayout({ children }) {
  return <html lang="en" data-theme="light"><body><Navbar />{children}<Footer /><Toaster position="top-center" /></body></html>;
}
