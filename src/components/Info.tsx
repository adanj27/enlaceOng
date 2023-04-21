import { OngInterface } from '../types/VolunteerPosition';
import VolunteerPositionCard from './VolunteerPositionCard';

export type typeInfo = {
  title: string;
  btn?: JSX.Element;
  btn1?: string;
  db?: OngInterface[];
};

export default function Info({ inf }: { inf: typeInfo[] }) {
  console.log(inf);

  return (
    <div className="w-full h-auto flex flex-col  items-center">
      {inf.map((info: typeInfo, index) => (
        <div
          key={index}
          id={index.toString()}
          className="w-[95%]   flex flex-col items-center border-2 border-[#89D0CA] rounded-3xl mb-4 p-3 md:h-[654px]"
        >
          <div className=" w-full flex flex-col gap-3 justify-between items-center mt-4 md:flex-row ">
            <p className=" flex  items-center h-9 text-xl leading-5 font-medium font-sans ">
              {info.title}
            </p>
            {info.title !== 'Busqueda cerradas' && info.title !== 'Postulaciones guardadas' && (
              <button
                className="flex  justify-center items-center  border border-[#3C3C3C] rounded-full bg-white px-4  gap-2"
                type="button"
              >
                <span className="text-2xl">+</span>
                {info.btn1}
              </button>
            )}
          </div>

          <div className="w-full h-96 flex items-center  overflow-x-scroll  m-4 md:p-4 md:overflow-hidden md:h-full ">
            <div className="flex flex-wrap  items-center justify-center gap-6  w-full h-full overflow-y-scroll  md:justify-start md:items-start md:p-6">
              {info.db?.map((post: OngInterface) => (
                <VolunteerPositionCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
