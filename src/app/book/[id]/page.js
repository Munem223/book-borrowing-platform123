import Image from "next/image";
import { books } from "@/data/books";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import BorrowButton from "./BorrowButton";

export default async function BookDetails({ params }) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/login");
  const { id } = await params;
  const book = books.find(b => b.id === id);
  if (!book) notFound();
  return <main className="max-w-6xl mx-auto px-4 py-12">
    <div className="grid md:grid-cols-2 gap-10 items-center bg-base-100 rounded-3xl shadow-xl p-6 md:p-10">
      <div className="relative h-[520px] rounded-2xl overflow-hidden"><Image src={book.image_url} alt={book.title} fill className="object-cover" /></div>
      <div>
        <div className="badge badge-primary mb-4">{book.category}</div>
        <h1 className="text-5xl font-black mb-4">{book.title}</h1>
        <p className="font-semibold text-lg mb-4">Author: {book.author}</p>
        <p className="text-slate-600 mb-6 leading-7">{book.description}</p>
        <p className="text-2xl font-bold mb-8">{book.available_quantity} copies left</p>
        <BorrowButton />
      </div>
    </div>
  </main>;
}
