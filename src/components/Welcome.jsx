import { useEffect, useState } from "react";
import BasicInfos from "./basicInfos/BasicInfos";

function Welcome() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setOffset(window.scrollY * 0.1); // Diminui o efeito para suavidade
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            className="relative w-full h-[800px] overflow-hidden flex xl:items-center items-end justify-start text-center text-gray-100 px-2 sm:px-16 md:px-32 lg:px-64 xl:px-96"
            id="inicio"
        >
            {/* Imagem de fundo com Parallax Suave */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-200 ease-out"
                style={{
                    backgroundImage: "url('../src/assets/familia.jpg')",
                    transform: `translateY(${offset}px)`,
                }}
            ></div>

            {/* Conteúdo sobreposto */}
            <div className="relative z-10">
                <BasicInfos
                    pequenoTitulo="Seja bem-vindo"
                    titulo="Resgatando Vidas"
                    paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iure alias placeat amet nam totam magnam similique cupiditate maiores, quis repudiandae laborum vitae pariatur minus veniam esse rerum. Accusantium, fuga!"
                />
            </div>
        </section>
    );
}

export default Welcome;
