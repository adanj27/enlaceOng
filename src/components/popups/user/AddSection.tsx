import { useState } from 'react';
import { Layout } from '../layout/Layout';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

const AddSection = () => {
  const [essential, setEssential] = useState(false);
  const [recommended, setRecommended] = useState(false);
  const [additional, setAdditional] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <span
          onClick={() => setOpen(!open)}
          className="text-lg font-semibold my-5 border border-1 border-black px-2 rounded-full flex items-center gap-2 cursor-pointer"
        >
          <AddIcon />
          Añadir sección
        </span>
        {open && (
          <Layout title="Añadir sección">
            <div onClick={() => setOpen(!open)} className="w-full relative flex justify-end">
              <CloseIcon className="absolute -top-10 cursor-pointer" />
            </div>
            <div>
              <div
                className={` overflow-hidden mx-10  ease-in-out duration-200 ${
                  essential
                    ? 'h-[139px] rounded-2xl border-2 border-[#89D0CA]'
                    : 'h-11 rounded-lg border-2 border-[#89D0CA]'
                }`}
              >
                <div
                  onClick={() => setEssential(!essential)}
                  className={`flex items-center w-full text-black ease-in-out duration-200 ${
                    essential ? 'rounded-b-none' : 'rounded-lg'
                  }`}
                >
                  <button className="w-full flex p-2 font-bold items-center">Esenciales</button>
                  <span
                    className={`text-orange-500 transition ${
                      essential ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <ExpandMoreIcon className="mx-3 cursor-pointer" />
                  </span>
                </div>
                <div className="flex flex-col">
                  <button className="w-full text-start hover:bg-orange-400 hover:text-white transition-colors pl-3 py-1">
                    Añadir experiencia laboral
                  </button>
                  <button className="w-full text-start hover:bg-orange-400 hover:text-white transition-colors pl-3 py-1">
                    Añadir educación
                  </button>
                  <button className="w-full text-start hover:bg-orange-400 hover:text-white transition-colors pl-3 py-1">
                    Añadir currículum
                  </button>
                </div>
              </div>
            </div>
            <div className="my-5">
              <div
                className={` overflow-hidden mx-10  ease-in-out duration-200 ${
                  recommended
                    ? 'h-[107px] rounded-2xl border-2 border-[#89D0CA]'
                    : 'h-11 rounded-lg border-2 border-[#89D0CA]'
                }`}
              >
                <div
                  onClick={() => setRecommended(!recommended)}
                  className={`flex items-center w-full text-black ease-in-out duration-200 ${
                    recommended ? 'rounded-b-none' : 'rounded-lg'
                  }`}
                >
                  <button className="w-full flex p-2 font-bold items-center">Recomendados</button>
                  <span
                    className={`text-orange-500 transition ${
                      recommended ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <ExpandMoreIcon className="mx-3 cursor-pointer" />
                  </span>
                </div>
                <div className="flex flex-col">
                  <button className="w-full text-start hover:bg-orange-400 hover:text-white transition-colors pl-3 py-1">
                    Añadir Añadir mis mejores proyectos
                  </button>
                  <button className="w-full text-start hover:bg-orange-400 hover:text-white transition-colors pl-3 py-1">
                    Añadir Añadir certificaciones
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={` overflow-hidden mx-10  ease-in-out duration-200 ${
                  additional
                    ? 'h-[131px] rounded-2xl border-2 border-[#89D0CA]'
                    : 'h-11 rounded-lg border-2 border-[#89D0CA]'
                }`}
              >
                <div
                  onClick={() => setAdditional(!additional)}
                  className={`flex items-center w-full text-black ease-in-out duration-200 ${
                    additional ? 'rounded-b-none' : 'rounded-lg'
                  }`}
                >
                  <button className="w-full flex p-2 font-bold items-center">Adicionales</button>
                  <span
                    className={`text-orange-500 transition ${
                      additional ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <ExpandMoreIcon className="mx-3 cursor-pointer" />
                  </span>
                </div>
                <div className="flex flex-col">
                  <button className="w-full text-start hover:bg-orange-400 hover:text-white transition-colors pl-3 py-1">
                    Añadir Mostrar en el perfil los voluntariados de lo que forme parte
                  </button>

                  <button className="w-full text-start hover:bg-orange-400 hover:text-white transition-colors pl-3 py-1">
                    Añadir Mostrar en el perfil las devoluciones recibidas
                  </button>
                </div>
              </div>
            </div>
          </Layout>
        )}
      </div>
    </>
  );
};

export default AddSection;
