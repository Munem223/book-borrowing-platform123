import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function MyProfile() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/login");
  const user = session.user;
  return <main className="max-w-3xl mx-auto px-4 py-12">
    <div className="card bg-base-100 shadow-2xl border"><div className="card-body items-center text-center">
      <div className="avatar"><div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"><img src={user.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"} alt={user.name}/></div></div>
      <h1 className="text-4xl font-black mt-4">My Profile</h1>
      <div className="overflow-x-auto w-full"><table className="table"><tbody>
        <tr><th>Name</th><td>{user.name}</td></tr>
        <tr><th>Email</th><td>{user.email}</td></tr>
        <tr><th>User ID</th><td>{user.id}</td></tr>
        <tr><th>Image</th><td className="break-all">{user.image || "No image"}</td></tr>
      </tbody></table></div>
      <Link href="/update-profile" className="btn btn-primary">Update Information</Link>
    </div></div>
  </main>;
}
