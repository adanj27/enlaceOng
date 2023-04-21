import Card from '../../components/Card';

export const CardEducation = () => {
  return (
    <Card className="w-72 hover:scale-105 transition-transform rounded-lg">
      <h2 className="text-lg font-bold ">Desarrollo web</h2>
      <div className="flex mt-2">
        <img
          src="https://apprecs.org/gp/images/app-icons/300/c3/com.platzi.platzi.jpg"
          alt="platzi"
          className="w-16"
        />
        <div className="ml-2">
          <span className="text-xs text-gray-500">Platzi</span>
          <br />
          <span className="text-xs text-gray-500">Junio 2022 - Diciembre 2022</span>
        </div>
      </div>
    </Card>
  );
};
