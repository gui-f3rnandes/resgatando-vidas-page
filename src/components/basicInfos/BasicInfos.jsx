import ButtonContact from "../StylistComponents/ButtonContact"

function BasicInfos({ pequenoTitulo, titulo, paragrafo }) {
    return (
        <>
            <div
                className="flex flex-col items-center text-center gap-2.5 mb-10 px-4 md:items-start md:text-left"
            >
                <h4 className="text-xl font-bold">{pequenoTitulo}</h4>
                <h1 className="text-3xl font-bold">{titulo}</h1>
                {/**
                 * Mudanças visando mobile para paragrafo:
                 * 
                 * ## `hyphens-auto` `break-words`:
                 * - `hyphens-auto`: Hifenização automática (certifique-se que seu HTML tem lang="pt-BR" declarado)
                 * - `break-words`: Força quebra em palavras longas quando necessário
                 * 
                 * ## `leading-snug` `tracking-tight`:
                 * - `leading-snug`: Reduz ligeiramente o espaçamento entre linhas
                 * - `tracking-tight`: Reduz o espaçamento entre letras para melhor compactação
                */}
                <p className="max-w-2xl w-full text-justify hyphens-auto break-words leading-snug tracking-tight">{paragrafo}</p>
                <ButtonContact href="tel:+" className=" py-2 xl:py-4 rounded-xl lg:w-1/2 text-center mt-3 md:w-auto md:px-10 ">
                    Entre em contato
                    </ButtonContact>
            </div>
        </>
    );
}

export default BasicInfos;
