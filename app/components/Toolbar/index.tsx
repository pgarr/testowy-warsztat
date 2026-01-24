"use client";

import { usePathname } from "next/navigation";
import { CalendarIcon, PhoneIcon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";
import type { NavLink } from "../../types";

const NAV_LINKS: NavLink[] = [
	{ href: "/services", label: "Usługi" },
	{ href: "/about", label: "O nas" },
	{ href: "/contact", label: "Kontakt" },
];

export default function Toolbar() {
	const pathname = usePathname() || "/";
	const getLinkClassName = (path: string) => (pathname === path ? "underline decoration-2" : "");

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
			<MobileMenu links={NAV_LINKS} getLinkClassName={getLinkClassName} />
			<DesktopNav links={NAV_LINKS} getLinkClassName={getLinkClassName} />
		</nav>
	);
}
