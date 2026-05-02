import Link from "next/link";
import Image from "next/image";
export default function BookCard({ book }) {
  return <div className="card bg-base-100 shadow-xl hover:-translate-y-1 transition border border-base-200 overflow-hidden">
    <figure className="h-56 relative"><Image src={book.image_url} alt={book.title} fill className="object-cover" /></figure>
    <div className="card-body">
      <div className="badge badge-secondary">{book.category}</div>
      <h2 className="card-title">{book.title}</h2>
      <p className="text-sm text-slate-500">by {book.author}</p>
      <div className="card-actions justify-end"><Link href={`/book/${book.id}`} className="btn btn-primary btn-sm">Details</Link></div>
    </div>
  </div>;
}
