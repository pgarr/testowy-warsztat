"use client";

import Link from "next/link";
import type { NavLink } from "../../types";

type DesktopNavProps = {
	links: NavLink[];
	getLinkClassName: (path: string) => string;
};

export default function DesktopNav({ links, getLinkClassName }: DesktopNavProps) {
	return (
		<div className="hidden md:flex md:flex-row md:items-center md:gap-15 lg:gap-20">
			{links.map(({ href, label }) => (
				<Link key={href} href={href} className={getLinkClassName(href)}>
					{label}
				</Link>
			))}
		</div>
	);
}
