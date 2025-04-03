import { Check } from "lucide-react"
import TPSCards from "./TypeServiceComponents/TPSCards"

function TypeService(){
    return(
        <section className="flex flex-col justify-center items-center bg-[#D9D9D9] p-20">
            <h1 className="text-3xl self-center font-bold -mb-15 ">Tipos de Serviços</h1>
            <div className="flex flex-row w-[80vw] mt-[15vh] space-x-3"> 
           <TPSCards 
           
           srcImage={"*/"}
           type={'Internação voluntária'}
           itemsIn={[
            {
                title: "Consentimento do paciente",
                desc: "o indivíduo decide se internar, assinando uma declaração no momento da admissão.",
            },
            {
                title: "Direito à alta",
                desc: "o paciente pode solicitar a interrupção do tratamento a qualquer momento.",
            },
            {
                title: "Reconhecimento da necessidade de tratamento",
                desc: "o paciente identifica a necessidade de cuidados especializados para sua saúde mental.",
            },
            {
                title: "Reconhecimento da necessidade de tratamento",
                desc: "o paciente identifica a necessidade de cuidados especializados para sua saúde mental.",
            },
            {
                title: "Reconhecimento da necessidade de tratamento",
                desc: "o paciente identifica a necessidade de cuidados especializados para sua saúde mental.",
            }
           ]}
           
           />

<TPSCards 
           
           srcImage={"*/"}
           type={'Internação voluntária'}
           itemsIn={[
            {
                title: "Consentimento do paciente",
                desc: "o indivíduo decide se internar, assinando uma declaração no momento da admissão.",
            },
            {
                title: "",
                desc: "",
            },
            {
                title: "",
                desc: "",
            }
           ]}
           
           />

<TPSCards 
           
           srcImage={"*/"}
           type={'Internação voluntária'}
           itemsIn={[
            {
                title: "Consentimento do paciente",
                desc: "o indivíduo decide se internar, assinando uma declaração no momento da admissão.",
            },
            {
                title: "",
                desc: "",
            },
            {
                title: "",
                desc: "",
            }
           ]}
           
           />

        </div>
        </section>
    )
}

export default TypeService