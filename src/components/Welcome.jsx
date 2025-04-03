import BasicInfos from "./basicInfos/BasicInfos";

function Welcome() {
    return (
        <section
            className="w-full h-[800px] bg-cover bg-center flex xl:items-center items-end justify-start text-center text-gray-100 px-2 sm:px-16 md:px-32 lg:px-64 xl:px-96 bg-[url('../src/assets/familia.jpg')]"
            id="inicio"
        >
            <BasicInfos
                pequenoTitulo="Seja bem-vindo"
                titulo="Resgatando Vidas"
                paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iure alias placeat amet nam totam magnam similique cupiditate maiores, quis repudiandae laborum vitae pariatur minus veniam esse rerum. Accusantium, fuga!"
            />
        </section>
    )
}

export default Welcome