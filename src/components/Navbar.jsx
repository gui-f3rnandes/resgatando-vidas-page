//Função padrão para o componente
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="backdrop-blur-sm w-screen fixed top-0 left-0 z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center">
                    {/* Botão do Menu Mobile */}
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>

                            {isMobileMenuOpen ? (
                                // Ícone de "Fechar" quando o menu está aberto
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Ícone de "Hambúrguer" quando o menu está fechado
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Logo + Itens do Menu Desktop */}
                    <div className="flex flex-1 items-center justify-center gap-30 lg:gap-60">
                        <div className="flex shrink-0 items-center">
                            <h1 className="text-2xl font-bold text-gray-800">Resgatando Vidas</h1>
                        </div>
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex space-x-4">
                                <a href="index.html" className="rounded-md px-3 py-2 text-sm font-bold text-gray-800 hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110">Início</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-bold text-gray-800 hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110">Quem sou</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-bold text-gray-800 hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110">Serviços</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-bold text-gray-800 hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110">Contatos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Mobile (Aparece quando isMobileMenuOpen é true) */}
            {isMobileMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
                        <a href="index.html" className="rounded-md px-3 py-2 text-sm font-bold text-gray-800 hover:bg-gray-700 hover:text-white">Início</a>
                        <a href="#" className="rounded-md px-3 py-2 text-sm font-bold text-gray-800 hover:bg-gray-700 hover:text-white">Quem sou</a>
                        <a href="#" className="rounded-md px-3 py-2 text-sm font-bold text-gray-800 hover:bg-gray-700 hover:text-white">Serviços</a>
                        <a href="#" className="rounded-md px-3 py-2 text-sm font-bold text-gray-800 hover:bg-gray-700 hover:text-white">Contatos</a>
                    </div>
                </div>
            )}
        </nav>
    );
}