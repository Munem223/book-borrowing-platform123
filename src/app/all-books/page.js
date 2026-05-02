"use client";
import { useMemo, useState } from "react";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";

export default function AllBooks() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) && (category === "All" || book.category === category)
  ), [search, category]);
  return <main className="max-w-7xl mx-auto px-4 py-12">
    <h1 className="text-5xl font-black mb-8">All Books</h1>
    <input value={search} onChange={e => setSearch(e.target.value)} className="input input-bordered input-lg w-full mb-8" placeholder="Search books by title..." />
    <div className="grid lg:grid-cols-5 gap-8">
      <aside className="lg:col-span-1 bg-base-100 p-5 rounded-2xl shadow h-fit">
        <h2 className="font-bold text-xl mb-4">Categories</h2>
        {["All", "Story", "Tech", "Science"].map(c => <button key={c} onClick={() => setCategory(c)} className={`btn w-full mb-3 ${category === c ? "btn-primary" : "btn-outline"}`}>{c}</button>)}
      </aside>
      <section className="lg:col-span-4 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">{filtered.map(book => <BookCard key={book.id} book={book} />)}</section>
    </div>
  </main>;
}
