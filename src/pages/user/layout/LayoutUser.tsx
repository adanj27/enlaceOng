import { ReactNode, useState } from 'react';
import { AddCertificacion } from '../../../components/popups/user/AddCertificacion';
import { AddExperiencia } from '../../../components/popups/user/AddExperiencia';
import { AddEducacion } from '../../../components/popups/user/AddEducacion';
import { AddProyectos } from '../../../components/popups/user/AddProyectos';

interface LayoutProps {
  children: ReactNode;
  title: string;
  btn: string;
  index: number;
}

interface PopupsState {
  certificaciones: boolean;
  experiencia: boolean;
  estudios: boolean;
  proyectos: boolean;
}

export default function LayoutUser({ children, title, btn, index }: LayoutProps) {
  const [popups, setPopups] = useState<PopupsState>({
    certificaciones: false,
    experiencia: false,
    estudios: false,
    proyectos: false,
  });

  const handlePopUp = () => {
    console.log(title);

    setPopups({
      ...popups,
      [title.toLowerCase()]: true,
    });
  };

  return (
    <>
      {popups.certificaciones && <AddCertificacion />}
      {popups.experiencia && <AddExperiencia />}
      {popups.estudios && <AddEducacion />}
      {popups.proyectos && <AddProyectos />}
      <div
        id={index.toString()}
        className={`w-[95%]  flex flex-col items-center border-2 border-[#89D0CA] rounded-3xl mb-4 p-3 md:pb-11 md:px-7 md:items-start ${
          title === 'Proyectos' ? 'bg-[#3C3C3C]' : 'bg-white'
        }`}
      >
        <div className=" w-full flex flex-col gap-3 justify-between items-center mt-4 md:flex-row ">
          <p
            className={` flex  items-center h-9 text-xl leading-5 font-medium font-sans ${
              title === 'Proyectos' ? 'text-white' : 'text-[#3C3C3C]'
            } `}
          >
            {title}
          </p>
          <button
            className={`flex  justify-center items-center  border rounded-full bg-white px-4 text-[#3C3C3C]  gap-2 ${
              title === 'Proyectos' ? 'border-white' : ' border-[#3C3C3C]'
            }`}
            type="button"
            onClick={handlePopUp}
          >
            <span className="text-2xl">+</span>
            {btn}
          </button>
        </div>
        {children}
      </div>
    </>
  );
}
