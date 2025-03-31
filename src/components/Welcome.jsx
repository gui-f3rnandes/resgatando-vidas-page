import BasicInfos from "./basicInfos/BasicInfos";

function Welcome(){
    return(
        <section className="p-40 bg-[url()]" id="inicio">
                <BasicInfos
                  pequenoTitulo={"Seja bem-vindo"}
                  titulo={"Resgatando Vidas"}
                  paragrafo={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iure alias placeat amet nam totam magnam similique cupiditate maiores, quis repudiandae laborum vitae pariatur minus veniam esse rerum. Accusantium, fuga!`}
                />
        </section>
    )
}

export default Welcome