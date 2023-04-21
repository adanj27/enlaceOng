import Card from '../../components/Card';
import Button from '../../components/Button';

export const CardVolunteer = () => {
  return (
    <div className="flex flex-col w-72 hover:scale-105 transition-transform">
      <div className=" relative w-full h-[40%] flex items-start justify-end">
        <span className="absolute bg-orange-500 px-4 py-[2px] rounded-full text-xs font-semibold  text-white mr-4 mt-2">
          Remoto
        </span>
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src="https://www.amnesty.org/es/wp-content/uploads/sites/4/2021/04/amnestyp.png"
          alt="position"
        />
      </div>
      <Card className="rounded-b-lg">
        <div>
          <h2 className="text-xs font-semibold ">
            Desarrollador web para ayudar con la composición de una nueva sección en la página de
            Argentina
          </h2>
          <p className="text-xs mt-3 text-gray-500">
            Ubicación: <span className="text-black font-medium">Argentina</span>
          </p>
          <p className="text-xs text-gray-500">
            Duración: <span className="text-black font-medium">3 meses</span>
          </p>
        </div>
        <div className="w-full flex gap-3 justify-between items-center mt-10">
          <Button type="button" className="px-11 font-semibold text-white text-sm">
            Ver
          </Button>
          <span className="text-xs text-gray-500">Publicado ayer</span>
        </div>
      </Card>
    </div>
  );
};
