import { useContext, useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import WestIcon from '@mui/icons-material/West';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import axios from 'axios';
import { OngInterface } from '../types/VolunteerPosition';
import { CloseSearch } from './popups/organization/CloseSearch';
import AddIcon from '@mui/icons-material/Add';
import { userContext } from '../Context/UserProvider';

export default function Offert() {
  const { id } = useParams<{ id: string }>();
  const [db, setdb] = useState<OngInterface>();
  useEffect(() => {
    axios('../src/data/post.json').then((data) => {
      const ongarr = data.data.post;
      console.log(ongarr);

      const ong: OngInterface = ongarr.find((e: OngInterface) => e.id === id);
      setdb(ong);
    });
  }, []);

  const history = useNavigate();

  const back = () => {
    history(-1);
  };

  const { user } = useContext(userContext);

  return (
    <Layout>
      <div>
        <section className="max-w-7xl mx-auto mt-6 mb-16 px-4 sm:px-6 lg:px-8">
          <button onClick={back} className="text-gray-400 xl:text-sm md:text-sm text-xs">
            <WestIcon className="mr-2" />
            Volver
          </button>
          <span className="xl:mx-5 md:mx-5 mx-2 text-xs">|</span>
          <span className="xl:text-sm md:text-sm text-xs">{db?.categories}</span>
          <span className="xl:mx-5 md:mx-5 mx-3 text-xs">|</span>
          <span className="xl:text-sm md:text-sm text-xs">{db?.job_position}</span>
          <div className="flex justify-end gap-5">
            <span className="text-lg font-semibold my-5 border border-1 border-black px-2 rounded-full flex items-center gap-2 cursor-pointer">
              <AddIcon />
              Editar sección
            </span>
            <CloseSearch />
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-1 xl:grid-rows-5 gap-6 max-w-6xl mx-auto mt-2">
            <div className="xl:col-span-2 md:col-span-2 xl:row-span-5 md:row-span-5 p-5 rounded-3xl border border-1 border-[#FF983D]">
              <img
                className="w-24 h-24 object-contain float-right mr-5"
                src={db?.img}
                alt="Amnistía Internacional Sección Argentina"
              />
              <h1 className="text-2xl font-semibold pt-4 mb-4">{db?.title}</h1>
              <span className="text-base">{db?.name}</span>
              <p className="text-xs mt-6 w-full flex justify-end items-center pr-5">
                <StarBorderIcon className="mr-3" />
                Añadir a favoritos
              </p>
              <div className="mt-5">
                <h3 className="text-base font-bold">Descripción</h3>
                <p className="text-sm my-4">{db?.description}</p>
                <h3 className="text-base font-bold">Tareas a realizar</h3>
                <ul className="text-sm list-disc ml-4 my-4">
                  <li>{db?.tasks}</li>
                </ul>
                <h3 className="text-base font-bold">Requisitos preferenciales</h3>
                <ul className="text-sm list-disc ml-4 my-4">
                  {db?.requirements.map((require, index) => (
                    <li key={index}>{require}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 flex justify-center">
                {user?.isLoggin && (
                  <Button type="button" className="py-1 px-16 text-white font-semibold">
                    Postular
                  </Button>
                )}
              </div>
            </div>
            <div className="xl:col-span-2 md:col-span-2 xl:row-span-2 md:row-span-2 xl:row-start-1 md:row-start-1 xl:col-start-3 md:col-start-3 p-5 rounded-3xl border border-1 border-[#FF983D]">
              <h3 className="text-base font-bold">Detalles:</h3>
              <div className="flex  mt-3 text-xs">
                <div className="flex flex-col w-36">
                  <span className="mb-1">Publicación:</span>
                  <span className="mb-1">Área:</span>
                  <span className="mb-1">Ubicación:</span>
                  <span className="mb-1">Modalidad:</span>
                  <span className="mb-1">Cant. de hs.:</span>
                  <span className="mb-1">Duración:</span>
                  <span className="mb-1">Certificado:</span>
                  <span>Comentarios adicionales:</span>
                </div>
                <div className="flex flex-col">
                  <span className="mb-1">{db?.published}</span>
                  <span className="mb-1">{db?.area}</span>
                  <span className="mb-1">{db?.location}</span>
                  <span className="mb-1">{db?.modality}</span>
                  <span className="mb-1">{db?.hours}</span>
                  <span className="mb-1">{db?.duration}</span>
                  <span className="mb-1">{db?.certificate}</span>
                  <span>{db?.comment}</span>
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 md:col-span-2 xl:row-span-3 md:row-span-3 xl:row-start-3 md:row-start-3 xl:col-start-3 md:col-start-3 p-5 rounded-3xl border border-1 border-[#FF983D]">
              <h3 className="text-base font-bold">Sobre la organización:</h3>
              <p className="text-sm mt-4 mb-16">{db?.about}</p>
              <div className="w-full flex justify-center">
                <Link to="/#">
                  <Button type="button" className="py-1 px-3 text-white font-semibold">
                    Ir al perfil de la organización
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
