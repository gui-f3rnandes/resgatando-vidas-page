//Função padrão para o componente
const navbarComponent = () => {
    return (
        <>
            <header class="relative grid grid-cols-1 gap-4 my-12 md:grid-cols-12">
                <div class="ltr md:col-span-9">
                    <h1 class="ms-23 text-2xl md:text-3xl">Resgatando Vidas</h1>
                </div>
                <div class="2xl:hidden">
                    <button id="menu-button" class="text-gray-600 hover:text-gray-800">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path
                                fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            />
                        </svg>
                    </button>
                </div>
                <nav id="menu" class="hidden 2xl:block md:col-span-3">
                    <ul class="flex flex-col md:flex-row gap-4 md:gap-7">
                        <li><a href="" rel="noopener noreferrer">Início</a></li>
                        <li><a href="" rel="noopener noreferrer">Quem Sou</a></li>
                        <li><a href="" rel="noopener noreferrer">Serviços</a></li>
                        <li><a href="" rel="noopener noreferrer">Clínicas</a></li>
                        <li><a href="" rel="noopener noreferrer">Contatos</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default navbarComponent;