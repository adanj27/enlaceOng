import Card from '../../components/Card';

export const CardExperience = () => {
  return (
    <Card className="w-72 hover:scale-105 transition-transform flex flex-col rounded-lg">
      <h2 className="text-lg font-bold ">Desarrollador web</h2>
      <span className="text-xs text-gray-500">Freelance | Marzo 2022 - Actualidad</span>
      <span className="text-xs text-gray-500">Ciudad Autónoma de Buenos Aires | Remoto</span>
      <p className="text-sm text-gray-800 my-5">
        Desarrollo de páginas web a comercios de diversos rubros. Atención al público y comunicación
        frecuente.
      </p>
      <span className="text-xs text-gray-500">
        <span className="text-black font-semibold">Aptitudes:</span> Comunicación asertiva, Gestión
        del tiempo, Responsabilidad
      </span>
    </Card>
  );
};
