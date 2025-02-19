import Link from "next/link";

export default function Navbar() {
  return (
    <> {/* Fragment to wrap both divs */}
      <div className="h-[60px] w-screen bg-yellow-400 max-sm:bg-orange-600 flex justify-center items-center gap-3 text-white">
        <Link href="/profile">Profile</Link> {/* Corrected spelling */}
        <Link href="/contact">Contact</Link>
        <Link href="/side">Projects</Link> {/* Corrected spelling */}
        <Link href="/login">Login</Link>
      </div>

      <div className="h-[40px] w-screen bg-yellow-400 max-sm:bg-orange-600 flex justify-center items-center gap-3 text-white">
      <Link href="/" className="text-xl font-bold">Home</Link>
      <img src="/home.png" width={30} height={30}>
     
      </img>
      </div>
    </>
  );
}