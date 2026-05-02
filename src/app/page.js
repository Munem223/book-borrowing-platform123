import Link from "next/link";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";

export default function Home() {
  return <main>
    <section className="hero min-h-[70vh] bg-gradient-to-br from-indigo-100 via-white to-amber-100 px-4">
      <div className="hero-content text-center">
        <div className="max-w-4xl animate__animated animate__fadeInUp">
          <div className="badge badge-primary mb-5 p-4">Modern Digital Library</div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">Find Your Next Read</h1>
          <p className="py-6 text-lg text-slate-600">Explore Story, Tech, and Science books in a fast, secure, and beautiful borrowing platform.</p>
          <Link href="/all-books" className="btn btn-primary btn-lg">Browse Now</Link>
        </div>
      </div>
    </section>

    <div className="bg-primary text-primary-content py-3 overflow-hidden whitespace-nowrap">
      <marquee>New Arrivals: {books.slice(0,5).map(b => b.title).join(" | ")} | Special Discount on Memberships | Borrow smarter with BookNest</marquee>
    </div>

    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-black mb-8">Featured Books</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{books.slice(0,4).map(book => <BookCard key={book.id} book={book} />)}</div>
    </section>

    <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
      <div className="card bg-indigo-600 text-white shadow-xl"><div className="card-body"><h3 className="card-title text-2xl">Smart Categories</h3><p>Filter books by Story, Tech, or Science instantly.</p></div></div>
      <div className="card bg-amber-500 text-white shadow-xl"><div className="card-body"><h3 className="card-title text-2xl">Secure Borrowing</h3><p>Private details and profile pages are protected by authentication.</p></div></div>
      <div className="card bg-emerald-600 text-white shadow-xl"><div className="card-body"><h3 className="card-title text-2xl">Reader Friendly</h3><p>Responsive layout for mobile, tablet, and desktop screens.</p></div></div>
    </section>

    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="card bg-base-100 shadow-xl border"><div className="card-body md:flex-row items-center justify-between gap-8">
        <div><h2 className="text-4xl font-black">Why students love BookNest?</h2><p className="mt-3 text-slate-600">Quick search, clean book cards, and easy digital borrowing make library work simple.</p></div>
        <Link href="/register" className="btn btn-secondary">Join Free</Link>
      </div></div>
    </section>
  </main>;
}
