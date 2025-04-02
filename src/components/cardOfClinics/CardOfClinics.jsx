function CardOfClinics({ clinicName, address, phone, imageSrc }) {
    return (
      <div className="bg-[#eeecec] rounded-md rounded-b-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-[400px] mx-auto sm:mx-4 mb-6">
        {/* Imagem do card */}
        <figure className="bg-[#C0C0C0] h-[180px] sm:h-[200px] md:h-[220px] w-full">
          <img 
            src={imageSrc} 
            alt={`Foto da clínica ${clinicName}`} 
            className="w-full h-full object-cover"
          />
        </figure>
  
        {/* Conteúdo do card */}
        <div className="p-4 sm:p-5">
          <h4 className="mb-2 text-lg sm:text-xl font-bold text-gray-800 line-clamp-2">
            {clinicName}
          </h4>
          
          <p className="mb-3 text-sm sm:text-base text-gray-600 line-clamp-3">
            {address}
          </p>
          
          <address className="not-italic">
            <a 
              href={`tel:${phone}`} 
              className="inline-block bg-gray-400 hover:bg-gray-500 text-black font-medium py-2 px-4 sm:px-6 rounded-2xl text-sm sm:text-base transition-colors duration-200 w-full text-center"
            >
              Entre em Contato
            </a>
          </address>
        </div>
      </div>
    );
  }
  
  export default CardOfClinics;