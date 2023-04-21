import Card from '../../components/Card';

export const CardReturns = () => {
  return (
    <Card className="w-72 hover:scale-105 transition-transform flex flex-col rounded-lg">
      <div className="flex gap-2 items-center">
        <img
          src="https://mepyd.gob.do/wp-content/uploads/2021/10/unicef.png"
          alt="ong"
          className="w-16 h-16"
        />
        <h2 className="text-sm font-bold ">Fondo de las Naciones Unidas para la Infancia</h2>
      </div>
      <span className="text-sm text-gray-500 mb-2">Desarrollador frontend React</span>
      <span className="text-xs text-gray-500">Período: Enero 2023 - Marzo 2023</span>
      <p className="text-sm text-gray-800 my-5">
        Santiago en un profesional con un talento increíble. Supo integrarse al equipo sin
        inconvenientes y los vamos a extrañar.
      </p>
      <span className="text-xs text-gray-500">
        -- Jimena Sánchez, Coordinadora del área de desarrollo.
      </span>
    </Card>
  );
};
