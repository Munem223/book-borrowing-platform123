"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function Navbar() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const logout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
    router.push("/login");
    router.refresh();
  };

  const links = <>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/all-books">All Books</Link></li>
    <li><Link href="/my-profile">My Profile</Link></li>
  </>;

  return <div className="navbar bg-base-100/90 backdrop-blur sticky top-0 z-50 shadow-sm px-4 lg:px-10">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">☰</div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">{links}</ul>
      </div>
      <Link href="/" className="text-2xl font-black text-primary">BookNest</Link>
    </div>
    <div className="navbar-center hidden lg:flex"><ul className="menu menu-horizontal px-1 font-semibold">{links}</ul></div>
    <div className="navbar-end gap-2">
      {isPending ? <span className="loading loading-spinner loading-sm" /> : session?.user ? <>
        <span className="hidden md:inline font-semibold">{session.user.name}</span>
        <button onClick={logout} className="btn btn-primary btn-sm">Logout</button>
      </> : <Link href="/login" className="btn btn-primary btn-sm">Login</Link>}
    </div>
  </div>;
}
