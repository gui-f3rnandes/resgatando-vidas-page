import { Children } from "react"



function ButtonContact(props){

    let Class="bg-[#8B5E3B] text-gray-200 p-3 hover:bg-[#51683f] transition-all duration-300 ease-in-out transform hover:scale-105 font-bold shadow-md"

    return(
        <a 
        href="https://wa.me/5511992774953?text=Ol%C3%A1%2C%20preciso%20ajudar%20uma%20pessoa!%20Pode%20me%20ajudar%3F"
        className={`${props.className} ${Class}`}
        >
            {props.children}
        </a>

    )
}

export default ButtonContact