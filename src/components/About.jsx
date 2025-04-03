import BasicInfos from "./basicInfos/BasicInfos"
function About() {

    return (
        <section className="px-10 md:px-20 xl:px-40 py-40 flex flex-col gap-10 items-center justify-center lg:flex-row lg:gap-10 bg-gray-100" id="quemSou">
            <figure className="p-5 max-w-82 max-h-82 min-w-40 min-h-40 rounded-full flex items-center justify-center relative sm:mb-2.5 md:ml-15">
                <img
                    src=".\src\assets\perfil.png"
                    alt="Foto do Giovane Goularte"
                    className="w-full h-full rounded-full object-cover"
                />
            </figure>
            <BasicInfos
                pequenoTitulo={"Quem sou"}
                titulo={"Giovane Goularte"}
                paragrafo={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima quis quia, ullam dolorum eius aperiam quaerat laudantium aliquid ratione saepe, facere tempora dolores ea non maxime autem debitis officiis. Delectus, sapiente quibusdam! Aliquid, voluptate tempore! Accusamus dolorem porro facere impedit quia enim at ullam alias qui magni suscipit, dicta, minus, voluptatem in temporibus eaque placeat corporis aperiam. Commodi, rem.`}
            />
        </section>)

}

export default About