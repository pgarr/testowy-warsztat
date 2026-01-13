import Link from "next/link";

export default function Toolbar() {
  return (
    <nav style={{ padding: "12px" }}>
      <Link href="/services">Services</Link>
      {" | "}
      <Link href="/about">About</Link>
      {" | "}
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
