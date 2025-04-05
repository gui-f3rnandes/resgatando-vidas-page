import ButtonContact from "./StylistComponents/ButtonContact"

function Contact() {
    return (
        <section className="px-10 md:px-20 xl:px-40 py-40 flex flex-col gap-10 items-center justify-center text-center md:text-start lg:flex-row lg:gap-10 bg-[#5F7A49] text-gray-200" id="contatos">
            <h4 className="flex flex-col md:w-[50%] lg:w-[22vw] text-2xl lg:text-3xl xl:text-5xl/14 font-bold">
                Entre em contato agora mesmo e ajude uma pessoa!
            </h4>
            
            <div className="lg:h-38 xl:h-55 lg:grid content-between md:w-[50%] lg:w-[40vw]">
                <p className="text-md xl:text-2xl pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nunc eu neque auctor gravida vel a turpis. Fusce luctus luctus ullamcorper.</p>
                
                <div className="flex flex-col lg:flex-row gap-5 lg:justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-xl xl:text-3xl font-bold">Giovane Goularte</h1>
                        <p className="text-md xl:text-2xl font-bold">(11) 99277-4953</p>
                    </div>
                    
                    <ButtonContact href="tel:+" className=" py-2 xl:py-4 rounded-xl lg:w-1/2 text-center mt-3 md:w-auto md:px-10 ">
                    Entre em contato
                    </ButtonContact>
                </div>
            </div>
        </section>
    )
}

export default Contact