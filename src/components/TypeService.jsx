import { Check } from "lucide-react"
import TPSCards from "./TypeServiceComponents/TPSCards"

function TypeService() {
    return (
        <section className="bg-[#C9A871] flex flex-col justify-center items-center p-20 gap-10">
            <h4 className="text-4xl text-center font-bold text-gray-800">Tipos de Serviços</h4>
            <div className="flex flex-col xl:flex-row xl:w-[70vw] gap-y-10 md:space-x-5">
                <TPSCards srcImage={"../src/assets/voluntaria.jpeg"} type={'Internação voluntária'}
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
                            title: "Busca por ajuda",
                            desc: "o indivíduo procura auxílio médico e psicológico para lidar com seus problemas.",
                        },
                        {
                            title: "Tratamento individualizado",
                            desc: "o plano de tratamento é elaborado de acordo com as necessidades específicas do paciente.",
                        },
                        {
                            title: "Acompanhamento médico e psicológico",
                            desc: "o paciente recebe acompanhamento profissional durante todo o período de internação.",
                        },
                        {
                            title: "Ambiente terapêutico",
                            desc: "a instituição oferece um ambiente seguro e acolhedor para o tratamento.",
                        },
                        {
                            title: "Respeito à autonomia",
                            desc: "a decisão do paciente é respeitada, garantindo sua participação ativa no tratamento.",
                        },
                        {
                            title: "Comunicação aberta",
                            desc: "o paciente tem liberdade para expressar suas necessidades e preocupações.",
                        },
                        {
                            title: "Foco na recuperação",
                            desc: "o objetivo principal é promover a recuperação e o bem-estar do paciente.",
                        }
                    ]}

                />

                <TPSCards srcImage={"../src/assets/involuntaria.jpg"} type={'Internação involuntária'}
                    itemsIn={[
                        {
                            title: "Ausência de consentimento",
                            desc: "o paciente não concorda com a internação",
                        },
                        {
                            title: "Risco para o paciente ou para terceiros",
                            desc: "a internação é justificada pela necessidade de proteger o paciente ou outras pessoas de danos.",
                        },
                        {
                            title: "Pedido de familiar ou responsável legal",
                            desc: "a internação é solicitada por um familiar ou responsável legal do paciente.",
                        },
                        {
                            title: "Avaliação médica",
                            desc: "um médico psiquiatra avalia o paciente e determina a necessidade da internação",
                        },
                        {
                            title: "Comunicação ao Ministério Público",
                            desc: "a internação é comunicada ao Ministério Público em até 72 horas.",
                        },
                        {
                            title: "Reavaliação periódica",
                            desc: "a necessidade de internação é reavaliada periodicamente por um médico.",
                        },
                        {
                            title: "Direito à defesa",
                            desc: "O paciente tem o direito de contestar a internação e buscar ajuda jurídica.",
                        },
                        {
                            title: "Tratamento indiviualizado",
                            desc: "o plano de tratamento é elaborado de acordo com as necessidades específicas do paciente.",
                        },
                        {
                            title: "Acompanhamento médico e psicológico",
                            desc: "o paciente recebe acompanhamento médico e psicológico durante o período de internação.",
                        },
                        {
                            title: "Foco na segurança e recuperação",
                            desc: "o objetivo principal é garantir a segurança do paciente e promover sua recuperação."
                        }
                    ]}

                />

                <TPSCards srcImage={"../src/assets/psiquiatrica.jpg"} type={'Internação psiquiátrica'}
                    itemsIn={[
                        {
                            title: "Internação voluntária",
                            desc: "ocorre quando o paciente decide se internar, assinando um termo de consentimento.",
                        },
                        {
                            title: "Internação involuntária",
                            desc: "ocorre quando o paciente não concorda com a internação, mas ela é necessária para proteger sua segurança ou a de terceiros.",
                        },
                        {
                            title: "Internação compulsória",
                            desc: "ocorre por determinação judicial, em casos de risco para a sociedade ou para o próprio paciente.",
                        },
                        {
                            title: "Objetivo",
                            desc: "oferecer tratamento intensivo para pessoas com transtornos mentais que necessitam de cuidados especializados.",
                        },
                        {
                            title: "Equipe multidisciplinar",
                            desc: "o tratamento é realizado por uma equipe composta por médicos psiquiatras, psicólogos, enfermeiros, terapeutas ocupacionais e outros profissionais de saúde mental.",
                        },
                        {
                            title: "Tratamento individualizado",
                            desc: "o plano de tratamento é elaborado de acordo com as necessidades específicas de cada paciente.",
                        },
                        {
                            title: "Acompanhamento médico e psicológico",
                            desc: "o paciente recebe acompanhamento profissional durante todo o período de internação.",
                        },
                        {
                            title: "Ambiente terapêutico:",
                            desc: "a instituição oferece um ambiente seguro e acolhedor para o tratamento.",
                        },
                        {
                            title: "Foco na recuperação",
                            desc: "o objetivo principal é promover a recuperação e o bem-estar do paciente.",
                        }
                    ]}

                />

            </div>
        </section>
    )
}

export default TypeService