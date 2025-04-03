import { Check } from "lucide-react";

function TPSCards({srcImage,type,itemsIn}){
    return(
         
                <div className="bg-[#F2F2F2] w-[30vw] rounded-md rounded-t-3xl space-y-3 hover:shadow-lg " >
                    <figure className="bg-[#C0C0C0] h-[40vh] rounded-t-3xl">
                        <img  className="w-full h-full object-cover " src={srcImage} alt="imagem ilustrativa" />
                    </figure>
                    <div className="px-3 space-y-3">
                        
                        <h2 className="text-xl"><strong>{type}</strong></h2>
                     
                     {itemsIn.map((item) => (
                         <div  className="flex flex-row p-2 space-x-3"> 
                         <Check   className="min-h-5 min-w-5"/>
                             <h3><strong>{item.title}: </strong>{item.desc}</h3>
                         </div>
                     ))}
                        
    
            
                    </div>
                </div>        
    );
}

export default TPSCards