"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Toolbar() {
	const pathname = usePathname() || "/";

	const linkClass = (path: string) => `${pathname === path ? "underline decoration-2" : ""}`;

	return (
		<nav className="toolbar flex flex-col items-center px-3 md:flex-row md:justify-between md:px-5 lg:px-10">
			<div className="toolbar-left flex w-full flex-1 flex-row gap-4">
				<span className="toolbar-info">
					<CalendarIcon className="toolbar-icon" aria-hidden />
					<span>PN-PT 8-16</span>
				</span>
				<span className="toolbar-info">
					<PhoneIcon className="toolbar-icon" aria-hidden />
					<span>+48 XXX XXX XXX</span>
				</span>
			</div>
			<div className="flex w-full flex-1 flex-row items-center justify-end gap-10 md:justify-center md:gap-15 lg:gap-20">
				<Link href="/services" className={linkClass("/services")}>
					Usługi
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
