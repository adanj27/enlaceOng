import Card from '../../components/Card';
import Button from '../../components/Button';

export const CardProjects = () => {
  return (
    <div className="flex flex-col hover:scale-105 transition-transform w-72">
      <div className="relative w-full h-1/2 flex items-start justify-end">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src="https://images01.nicepagecdn.com/page/44/59/website-design-4459010.jpg"
          alt="position"
        />
      </div>
      <Card className="rounded-b-lg">
        <div>
          <h2 className="text-sm font-semibold">Página hecha en JavaScript y PHP</h2>
          <p className="text-xs mt-3 text-black font-medium">
            Tecnologías usadas:{' '}
            <span className="text-gray-500">JavaScript, Bootstrap, PHP, HTML, CSS. </span>
          </p>
        </div>
        <div className="w-full flex justify-center mt-10">
          <Button type="button" className="text-sm text-white font-semibold w-full">
            Ir al proyecto
          </Button>
        </div>
      </Card>
    </div>
  );
};
