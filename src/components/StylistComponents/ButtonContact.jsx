import { Children } from "react"



function ButtonContact(props){

    let Class="bg-[#8B5E3B] text-gray-200 p-3 hover:bg-[#5F7A49] transition-all duration-300 ease-in-out transform hover:scale-105 font-bold shadow-md"

    return(
        <a 
        
        className={`${props.className} ${Class}`}
        >
            {props.children}
        </a>

    )
}

export default ButtonContact