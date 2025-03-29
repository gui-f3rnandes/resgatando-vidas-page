function BasicInfos({ pequenoTitulo, titulo, paragrafo }) {
  return (
    <>
      <div
        className="flex flex-col gap-2.5 mb-10"
      >
        <h4 className="text-xl font-bold">{pequenoTitulo}</h4>
        <h1 className="text-3xl font-bold">{titulo}</h1>
        <p className="w-2xl">{paragrafo}</p>
        <a
          href="tel:+"
          className="bg-gray-400 text-black p-2 rounded-2xl w-md text-center mt-3"
        >
          Entre em contato
        </a>
      </div>
    </>
  );
}

export default BasicInfos;
