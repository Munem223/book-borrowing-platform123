"use client";
import toast from "react-hot-toast";
export default function BorrowButton() {
  return <button onClick={() => toast.success("Borrow request confirmed!")} className="btn btn-primary btn-lg">Borrow This Book</button>;
}
