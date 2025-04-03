function CardOfClinics({ clinicName, description, address, imageSrc }) {

    return (
        <div className="bg-[#eeecec] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto text-center w-full">
            
            {/* Imagem do card */}
            <figure className="bg-[#C0C0C0] rounded-t-xl h-[180px] sm:h-[200px] md:h-[220px] w-full">
                <img
                    src={imageSrc}
                    alt={`Foto da clínica ${clinicName}`}
                    className="w-full h-full object-cover"
                />
            </figure>

            {/* Conteúdo do card */}
            <div className="p-4 sm:p-5">
                <h4 className="mb-2 text-xl font-bold text-gray-800 line-clamp-2">
                    {clinicName}
                </h4>

                <p className="text-gray-800 my-3">
                    {description}
                </p>

                <p className="mb-3 text-sm text-gray-600 line-clamp-3">
                    {address}
                </p>

                <address className="not-italic">
                <a
                    href="tel:+"
                    className="bg-[#8B5E3B] text-gray-200 p-3 rounded-lg flex w-full justify-center mt-3 font-bold shadow-md hover:bg-[#5F7A49] transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    Entre em contato
                </a>
                </address>
            </div>
        </div>
    );
}

export default CardOfClinics;