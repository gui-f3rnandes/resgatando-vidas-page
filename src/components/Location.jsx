import BasicInfos from "./basicInfos/BasicInfos";
import CardOfClinics from "./cardOfClinics/CardOfClinics";

function Location() {
  return (
    <section id="locations">
      <div
        id="locationsCta"
        className="flex flex-row justify-center content-center gap-35 p-5"
      >
        <BasicInfos
          titulo="Onde Buscamos"
          pequenoTitulo=" "
          paragrafo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, inventore beatae tempora aut odio quibusdam vel suscipit veniam ab ex sit autem mollitia quasi natus, facilis impedit accusantium amet distinctio. Cum voluptatibus nam numquam voluptatum qui quisquam impedit est vel odio iste alias accusamus, corrupti itaque error ab. Dicta rem aspernatur dolor magni deleniti eveniet ab et iste aperiam, consectetur fuga dolores blanditiis ut molestias nulla. Possimus ex provident ab voluptas consequatur dolorum, quisquam, molestias, obcaecati soluta corporis laborum dolores?"
        />
        <figure className="mb-4 mr-6 ml-3.5">
          <img src="./Brazil.svg" alt="Mapa do Brasil" srcset="" />
        </figure>
      </div>
      
      <div id="locationsCards">
        <CardOfClinics
          clinicName="Nome da clínica"
          address="Av. Nome da Avenida, 1234  - Nome do Bairro, Cidade - UR"
        />
      </div>
    </section>
  );
}

export default Location;
