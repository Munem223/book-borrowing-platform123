"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", image: "", password: "" });
  const register = async (e) => {
    e.preventDefault(); setLoading(true);
    const res = await authClient.signUp.email({ name: form.name, email: form.email, password: form.password, image: form.image });
    setLoading(false);
    if (res?.error) return toast.error(res.error.message || "Registration failed");
    toast.success("Registration successful. Please login."); router.push("/login");
  };
  const google = async () => authClient.signIn.social({ provider: "google", callbackURL: "/" });
  return <main className="min-h-[70vh] flex items-center justify-center px-4 py-12">
    <form onSubmit={register} className="card bg-base-100 shadow-2xl w-full max-w-md border"><div className="card-body">
      <h1 className="text-4xl font-black text-center mb-4">Registration</h1>
      <input required placeholder="Name" className="input input-bordered w-full" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
      <input required type="email" placeholder="Email" className="input input-bordered w-full" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Photo URL" className="input input-bordered w-full" value={form.image} onChange={e=>setForm({...form,image:e.target.value})}/>
      <input required minLength={6} type="password" placeholder="Password" className="input input-bordered w-full" value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/>
      <button disabled={loading} className="btn btn-primary w-full">{loading ? "Registering..." : "Register"}</button>
      <button type="button" onClick={google} className="btn btn-outline w-full">Continue with Google</button>
      <p className="text-center">Already have account? <Link className="link link-primary" href="/login">Login</Link></p>
    </div></form>
  </main>;
}
