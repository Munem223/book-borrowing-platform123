"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfile() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  if (isPending) return <main className="min-h-[60vh] flex justify-center items-center"><span className="loading loading-spinner loading-lg" /></main>;
  if (!session?.user) { router.push("/login"); return null; }
  const update = async (e) => {
    e.preventDefault();
    const res = await authClient.updateUser({ name: name || session.user.name, image: image || session.user.image });
    if (res?.error) return toast.error(res.error.message || "Update failed");
    toast.success("Profile updated"); router.push("/my-profile"); router.refresh();
  };
  return <main className="min-h-[70vh] flex items-center justify-center px-4 py-12">
    <form onSubmit={update} className="card bg-base-100 shadow-2xl w-full max-w-md border"><div className="card-body">
      <h1 className="text-4xl font-black text-center mb-4">Update Information</h1>
      <input placeholder={session.user.name || "New name"} className="input input-bordered w-full" value={name} onChange={e=>setName(e.target.value)}/>
      <input placeholder="New image URL" className="input input-bordered w-full" value={image} onChange={e=>setImage(e.target.value)}/>
      <button className="btn btn-primary w-full">Update Information</button>
    </div></form>
  </main>;
}
