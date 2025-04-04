import BasicInfos from "./basicInfos/BasicInfos";
import CardOfClinics from "./cardOfClinics/CardOfClinics";

function Location() {
    return (
        <section id="locations" className="w-full overflow-hidden">
            {/* Seção CTA com imagem */}
            <div
                id="locationsCta"
                className="flex flex-col xl:flex-row justify-center items-center gap-8 p-5 my-16 md:p-8 max-w-5xl mx-auto"
            >
                <BasicInfos
                    titulo="Onde buscamos"
                    pequenoTitulo=" "
                    paragrafo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, inventore beatae tempora aut odio quibusdam vel suscipit veniam ab ex sit autem mollitia quasi natus, facilis impedit accusantium amet distinctio. Cum voluptatibus nam numquam voluptatum qui quisquam impedit est vel odio iste alias accusamus, corrupti itaque error ab."
                    className="w-full lg:w-1/2"
                />

                <figure className="lg:w-[25vw] max-w-xl mt-6 lg:mt-0">
                    <img
                        src="./src/assets/Brazil.png"
                        alt="Mapa do Brasil"
                        className="w-full h-auto object-contain"
                    />
                </figure>
            </div>

            {/* Grid de Cards responsivo */}
            <div id="locationsCards" className="flex flex-col justify-center items-center px-4 w-[55vw] md:w-[60vw] max-sm:w-[90vw] mx-auto my-16 pb-16">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-10 w-full">
                        
                        <CardOfClinics
                            clinicName="Unidade AP"
                            description={"Atendimento completo com enfermeiras, cuidadores, psiquiatras, assistentes sociais etc."}
                            address="Itaperica da Serra - SP"
                            className="w-full h-full"
                        />
                        <CardOfClinics
                            clinicName="Almeida Barros"
                            description={"Unidade masculina de alto padrão com equipe técnica, barbearia, nutricionista e cozinheiros."}
                            address="Pouso Alegre - SP"
                            className="w-full h-full"
                        />
                        <CardOfClinics
                            clinicName="Anjos de Deus"
                            description={"Unidade masculina de alto padrão com equipe técnica, métodos especializados e estutura de ponta."}
                            address="Itú - SP"
                            className="w-full h-full"
                        />
                        <CardOfClinics
                            clinicName="Valent's"
                            description={"Unidade feminina com segurança absoluta, boas acomodações e plano terapêutico completo."}
                            address="Ferraz de Vasconcelos - SP"
                            className="w-full h-full"
                        />
                </div>
            </div>
        </section>
    );
}

export default Location;