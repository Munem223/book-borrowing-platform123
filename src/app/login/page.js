"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const login = async (e) => {
    e.preventDefault(); setLoading(true);
    const res = await authClient.signIn.email({ email: form.email, password: form.password });
    setLoading(false);
    if (res?.error) return toast.error(res.error.message || "Login failed");
    toast.success("Login successful"); router.push("/"); router.refresh();
  };
  const google = async () => authClient.signIn.social({ provider: "google", callbackURL: "/" });

  return <main className="min-h-[70vh] flex items-center justify-center px-4 py-12">
    <form onSubmit={login} className="card bg-base-100 shadow-2xl w-full max-w-md border"><div className="card-body">
      <h1 className="text-4xl font-black text-center mb-4">Login</h1>
      <input required type="email" placeholder="Email" className="input input-bordered w-full" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
      <input required type="password" placeholder="Password" className="input input-bordered w-full" value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/>
      <button disabled={loading} className="btn btn-primary w-full">{loading ? "Logging in..." : "Login"}</button>
      <button type="button" onClick={google} className="btn btn-outline w-full">Continue with Google</button>
      <p className="text-center">New here? <Link className="link link-primary" href="/register">Register</Link></p>
    </div></form>
  </main>;
}
