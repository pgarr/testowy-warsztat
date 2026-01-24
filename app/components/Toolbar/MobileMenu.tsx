"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import type { NavLink } from "../../types";

type MobileMenuProps = {
	links: NavLink[];
	getLinkClassName: (path: string) => string;
};

export default function MobileMenu({ links, getLinkClassName }: MobileMenuProps) {
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

	return (
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
					{links.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className={`block cursor-pointer px-4 py-2 transition-colors hover:bg-white/20 ${getLinkClassName(href)}`}
							onClick={() => setOpen(false)}
						>
							{label}
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
