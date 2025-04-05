import { Check } from "lucide-react";
import ButtonContact from "../StylistComponents/ButtonContact";

function TPSCards({ srcImage, type, itemsIn }) {
    return (
        <div className="border-1 border-orange-300/50 bg-[#e9c78c] w-[80vw] md:w-[50vw] rounded-xl rounded-t-xl space-y-3 hover:shadow-lg pb-4 transition-all duration-300 ease-in-out transform hover:scale-102 flex flex-col min-h-[400px]">
            <figure className="h-[25vh]">
                <img className="w-full h-full object-cover rounded-t-xl" src={srcImage} alt="imagem ilustrativa" />
            </figure>
            
            <div className="px-6 space-y-1 flex-grow">
                <h4 className="text-2xl text-gray-800 text-center pt-3"><strong>{type}</strong></h4>
                {itemsIn.map((item, index) => (
                    <div key={index} className="flex flex-row p-2 space-x-1.5 text-gray-700 text-sm">
                        <Check className="min-h-5 min-w-5" />
                        <p><strong>{item.title}: </strong>{item.desc}</p>
                    </div>
                ))}
            </div>
            {/* O botão será empurrado para o final do card */}
            <div className="m-auto py-4 flex justify-center w-[90%]">
                <ButtonContact href="tel:+" className="w-[80%] block mx-auto rounded-xl text-center">
                    Entre em contato
                </ButtonContact>
            </div>
        </div>
    );
}



export default TPSCards