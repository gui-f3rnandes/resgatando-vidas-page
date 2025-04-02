function CardOfClinics({ clinicName, address, phone, imageSrc }) {
  return (
    <>
      <div className="bg-[#eeecec] card-clinic w-[16vw] rounded-md rounded-b-2xl mx-5 mb-3.5">
        <figure className="bg-[#C0C0C0] h-[15vh] rounded-t-2xl text-center">
          <img src={imageSrc} alt={`Foto da clínica ${clinicName}`} srcSet="" />
        </figure>

        <div className="info p-4">
          <h4 className="mb-1.5 text-xl font-bold">{clinicName}</h4>
          <p className="mb-2">{address}</p>
          <address className=" bg-gray-400 text-black p-2 rounded-2xl w-[10vw] text-center">
            <a href={`tel:${phone}`} className="not-italic">Entre em Contato</a>
          </address>
        </div>
      </div>
    </>
  );
}

export default CardOfClinics;
