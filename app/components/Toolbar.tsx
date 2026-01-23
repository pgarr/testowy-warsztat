"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarIcon, PhoneIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Toolbar() {
	const pathname = usePathname() || "/";
	const [open, setOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
		}
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	const linkClass = (path: string) => `${pathname === path ? "underline decoration-2" : ""}`;

	return (
		<nav className="toolbar flex flex-row items-center justify-between px-3 md:px-5 lg:px-10">
			<div className="toolbar-left flex w-fit flex-1 flex-row gap-4">
				<span className="toolbar-info">
					<CalendarIcon className="toolbar-icon" aria-hidden />
					<span>PN-PT 8-16</span>
				</span>
				<span className="toolbar-info">
					<PhoneIcon className="toolbar-icon" aria-hidden />
					<span>+48 XXX XXX XXX</span>
				</span>
			</div>
			{/* Mobile: menu button + dropdown */}
			<div className="relative md:hidden" ref={menuRef}>
				<button
					type="button"
					onClick={() => setOpen((o) => !o)}
					className="flex items-center gap-2 rounded-md px-3 py-2 text-(--toolbar-text) hover:bg-white/10 focus:ring-2 focus:ring-white/30 focus:outline-none"
					aria-expanded={open}
					aria-haspopup="true"
				>
					<Bars3Icon className="h-6 w-6" aria-hidden />
				</button>
				{open && (
					<div
						className="absolute top-full right-0 z-10 mt-1 min-w-[160px] rounded-md border border-white/20 py-2 text-(--toolbar-text) shadow-lg"
						style={{ backgroundColor: "var(--toolbar-background)" }}
					>
						<Link
							href="/services"
							className={`block cursor-pointer px-4 py-2 transition-colors hover:bg-white/20 ${linkClass("/services")}`}
							onClick={() => setOpen(false)}
						>
							Usługi
						</Link>
						<Link
							href="/about"
							className={`block cursor-pointer px-4 py-2 transition-colors hover:bg-white/20 ${linkClass("/about")}`}
							onClick={() => setOpen(false)}
						>
							O nas
						</Link>
						<Link
							href="/contact"
							className={`block cursor-pointer px-4 py-2 transition-colors hover:bg-white/20 ${linkClass("/contact")}`}
							onClick={() => setOpen(false)}
						>
							Kontakt
						</Link>
					</div>
				)}
			</div>
			{/* Desktop: inline navigation links */}
			<div className="hidden md:flex md:flex-row md:items-center md:gap-15 lg:gap-20">
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
