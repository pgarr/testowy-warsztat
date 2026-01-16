"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Toolbar() {
	const pathname = usePathname() || "/";

	const linkClass = (path: string) => `${pathname === path ? "underline decoration-2" : ""}`;

	return (
		<nav className="toolbar">
			<div className="toolbar-left">
				<span className="toolbar-info">
					<CalendarIcon className="toolbar-icon" aria-hidden />
					<span>PN-PT 8-16</span>
				</span>
				<span className="toolbar-info">
					<PhoneIcon className="toolbar-icon" aria-hidden />
					<span>+48 XXX XXX XXX</span>
				</span>
			</div>
			<div className="toolbar-links">
				<Link href="/services" className={linkClass("/services")}>
					Zakres usług
				</Link>
				<Link href="/about" className={linkClass("/about")}>
					O nas
				</Link>
				<Link href="/contact" className={linkClass("/contact")}>
					Kontakt
				</Link>
			</div>
		</nav>
	);
}
