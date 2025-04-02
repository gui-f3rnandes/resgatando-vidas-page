import BasicInfos from "./basicInfos/BasicInfos";
import CardOfClinics from "./cardOfClinics/CardOfClinics";

function Location() {
  return (
    <section id="locations" className="w-full overflow-hidden">
      {/* Seção CTA com imagem */}
      <div
        id="locationsCta"
        className="flex flex-col lg:flex-row justify-center items-center gap-8 p-5 md:p-8 max-w-7xl mx-auto"
      >
        <BasicInfos
          titulo="Onde Buscamos"
          pequenoTitulo=" "
          paragrafo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, inventore beatae tempora aut odio quibusdam vel suscipit veniam ab ex sit autem mollitia quasi natus, facilis impedit accusantium amet distinctio. Cum voluptatibus nam numquam voluptatum qui quisquam impedit est vel odio iste alias accusamus, corrupti itaque error ab. Dicta rem aspernatur dolor magni deleniti eveniet ab et iste aperiam, consectetur fuga dolores blanditiis ut molestias nulla. Possimus ex provident ab voluptas consequatur dolorum, quisquam, molestias, obcaecati soluta corporis laborum dolores?"
          className="w-full lg:w-1/2"
        />
        
        <figure className="w-full lg:w-1/2 max-w-lg mt-6 lg:mt-0">
          <img 
            src="./Brazil.svg" 
            alt="Mapa do Brasil" 
            className="w-full h-auto object-contain"
          />
        </figure>
      </div>

      {/* Grid de Cards responsivo */}
      <div 
        id="locationsCards" 
        className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-10 md:pb-12 lg:pb-16 w-full max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[...Array(6)].map((_, index) => (
            <CardOfClinics
              key={index}
              clinicName="Nome da clínica"
              address="Av. Nome da Avenida, 1234 - Nome do Bairro, Cidade - UR"
              phone="19999999999"
              className="w-full h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Location;