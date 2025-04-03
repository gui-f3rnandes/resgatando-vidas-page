import { Check } from "lucide-react"

function TypeService(){
    return(
        <section className="flex flex-col justify-center items-center bg-[#D9D9D9] p-20">
            <h1 className="text-3xl self-center font-bold -mb-15 ">Tipos de Serviços</h1>
            <div className="flex flex-row w-[80vw] mt-[15vh] space-x-3">  
                <div className="bg-[#F2F2F2] w-[30vw] rounded-md rounded-t-3xl space-y-3 " >
                    <figure className="bg-[#C0C0C0] h-[40vh] rounded-t-3xl">
                        <img  className="w-full h-full object-cover " src="*/" alt="imagem ilustrativa" />
                    </figure>
                    <div className="px-3 space-y-3">
                        
                        <h2 className="text-xl"><strong>Internação voluntária</strong></h2>
                     
                        <div  className="flex flex-row p-2 space-x-3"> 
                        <Check   className="min-h-5 min-w-5"/>
                            <h3><strong>Consentimento do paciente:</strong> o indivíduo decide se internar, assinando uma declaração no momento da admissão. lore</h3>
                        </div>
                        <div  className="flex flex-row p-2 space-x-3"> 
                        <Check   className="min-h-5 min-w-5"/>
                            <h3><strong>Consentimento do paciente:</strong> o indivíduo decide se internar, assinando uma declaração no momento da admissão. lore</h3>
                        </div>
            
                    </div>
                </div>
                <div className="bg-[#F2F2F2] w-[30vw] rounded-md rounded-t-3xl ">
                    <figure className="bg-[#C0C0C0] h-[30vh] rounded-t-3xl">

                    </figure>
                    <h2>Internação voluntária</h2>
                    <h3>Consentimento do paciente: o indivíduo decide se internar, assinando uma declaração no momento da admissão.</h3>
                </div>
                <div className="bg-[#F2F2F2] w-[30vw] rounded-md rounded-t-3xl ">
                    <figure className="bg-[#C0C0C0] h-[30vh] rounded-t-3xl">

                    </figure>
                    <h2>Internação voluntária</h2>
                    <h3>Consentimento do paciente: o indivíduo decide se internar, assinando uma declaração no momento da admissão.</h3>
                </div>
                
            </div>
        </section>
    )
}

export default TypeService