import { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../molecules/BurgerMenu";
import { navLinks } from "../../../data";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center px-5 py-2">
                <div>
                    <Link to="/" className="font-mono font-bold text-2xl md:text-3xl">
                        BITRI9S_HUB
                    </Link>
                </div>

                {/* Desktop nav links — hidden on mobile, visible on md+ */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks?.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-mono font-bold text-sm hover:border-b-2 hover:border-black transition-all duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Burger button — visible on mobile, hidden on md+ */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden border-3 p-2 font-bold z-51 cursor-pointer"
                >
                    <BurgerMenu isOpen={isOpen} />
                </button>
            </div>

            {/* Mobile overlay menu */}
            {isOpen && (
                <nav className="fixed top-0 left-0 w-full h-screen bg-white z-50 md:hidden">
                    <div className="px-10 sm:px-20">
                        <ul className="w-full h-screen flex flex-col justify-center items-start text-3xl sm:text-4xl font-mono gap-7">
                            {navLinks?.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="border-b-2"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )}
        </>
    );
}

export default Navbar;