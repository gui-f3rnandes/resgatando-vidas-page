import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [textColor, setTextColor] = useState("text-white");
    const menuItems = [
        { label: "Início", href: "#inicio" },
        { label: "Quem Sou", href: "#quemSou" },
        { label: "Serviços", href: "#servicos" },
        { label: "Contatos", href: "#contatos" }
    ]

    useEffect(() => {
        const updateTextColor = () => {
            setTextColor(window.scrollY > 750 ? "text-black" : "text-white");
        };

        window.addEventListener("scroll", updateTextColor);
        updateTextColor();

        return () => {
            window.removeEventListener("scroll", updateTextColor);
        };
    }, []);

    return (
        <nav className={`backdrop-blur-sm w-screen fixed top-0 left-0 z-50 transition-colors duration-500 ${textColor}`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-200/50 transition-colors duration-300 ease-in-out focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className={`size-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18 18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center gap-30 lg:gap-60">
                        <div className="flex shrink-0 items-center">
                            <h1 className={`text-2xl font-bold ${textColor}`}>Resgatando Vidas</h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex space-x-4">
                                {menuItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className={`rounded-md px-3 py-2 text-sm font-bold ${textColor} transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-300/50`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden backdrop-blur-sm bg-white/30 absolute top-16 left-0 w-full z-40 overflow-hidden transition-all duration-500 ease-in-out opacity-100 translate-y-0 max-h-[500px]">
                    <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="rounded-md px-3 py-2 text-sm font-bold ${textColor} transition-all duration-300 ease-in-out transform hover:scale-102 hover:bg-gray-200/50"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
