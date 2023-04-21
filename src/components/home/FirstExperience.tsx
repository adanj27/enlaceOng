import Button from '../Button';
import Card from '../Card';

type infoType = {
  title: string;
  busqueda: string;
};

const info: infoType[] = [
  {
    title: 'Administracion',
    busqueda: '10 busquedas activas',
  },
  {
    title: 'Comunicacion',
    busqueda: '10 busquedas activas',
  },
  {
    title: 'Diseno',
    busqueda: '10 busquedas activas',
  },
  {
    title: 'Educacion',
    busqueda: '10 busquedas activas',
  },
  {
    title: 'Marketing',
    busqueda: '10 busquedas activas',
  },
  {
    title: 'Produccion',
    busqueda: '10 busquedas activas',
  },
  {
    title: 'Tecnologia',
    busqueda: '10 busquedas activas',
  },
];

export const FirstExperience = () => {
  return (
    <div className=" bg-gradient-to-b from-[#FFDC72] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h6 className="text-[#434343] w-4/5 h-28 font-sans xl:text-5xl text-3xl text-center font-normal not-italic tracking-wide mt-16">
            Encontra tu primera experiencia laboral,
            <br />
            <span className="text-[#FF983D]">aporta un granito de arena</span>
          </h6>
          <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-2 xl:gap-6 md:gap-5 gap-3 xl:mt-24 mt-16 mx-3">
            {info.map((experiencias) => (
              <Card
                key={experiencias.title}
                className="flex justify-center bg-white rounded-2xl items-center gap-6 xl:w-80 xl:h-24 xl:p-6 p-3 shadow-blue-100"
              >
                <img
                  className="xl:w-9 md:w-9 w-9 xl:h-7 md:h-7 h-7"
                  src={`../../../src/assets/experiences/${experiencias.title}.png`}
                  alt={experiencias.title}
                />
                <div className="w-56 flex flex-col justify-center">
                  <h1 className="xl:text-2xl font-medium text-[#434343] tracking-wide">
                    {experiencias.title}
                  </h1>
                  <p className="xl:text-base text-xs text-[#434343] tracking-wide">
                    {experiencias.busqueda}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className=" w-full flex justify-center items-center xl:my-32 md:my-24 my-20">
          <div className=" w-1/3">
            <img src="../../../src/assets/experiences/hombresentado.png" alt="" />
          </div>

          <div className="flex flex-col justify-center items-center relative  w-3/5">
            <p className="xl:w-3/5 md:w-3/5 h-44 font-medium xl:text-4xl md:text-2xl text-xl leading-10 text-center flex items-center">
              ¿Te gustaría ganar experiencia brindado ayuda a una organización sin fines de lucro?
            </p>
            <img
              src="../../../src/assets/experiences/Enlace.png"
              alt=""
              className="absolute xl:w-96 md:w-64 w-32 top-1"
            />
            <Button
              type="button"
              className="bg-[#FF983D] xl:w-60 md:w-60 w-32 p-3.5 xl:text-2xl md:text-xl text-lg rounded-md text-[#434343]"
            >
              ¡Sumate!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
