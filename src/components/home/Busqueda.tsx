import { useEffect, useState } from 'react';
import axios from 'axios';
import { OngInterface } from '../../types/VolunteerPosition';
import Card from '../Card';
import Button from '../Button';
import calendar from '../../assets/busqueda/calendar.svg';
import cubo from '../../assets/busqueda/cubo.svg';
import modalidad from '../../assets/busqueda/modalidad.svg';
import subtarea from '../../assets/busqueda/subtarea.svg';
import ubicacion from '../../assets/busqueda/ubicacion.svg';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import { getPost } from '../../controllers/controllerspostong';

export default function Busqueda() {
  const [db, setdb] = useState<any[]>([]);
  const { tipo } = useParams<{ tipo: string }>();
  const [stateDate, setstateDate] = useState(false);
  const [stateArea, setstateArea] = useState(false);
  const [stateSub, setstateSub] = useState(false);
  const [stateUbi, setstateUbi] = useState(false);
  const [stateModa, setstateModa] = useState(false);

  useEffect(() => {
    axios('src/data/post.json').then((data) => {
      console.log(data.data.post);
      setdb(data.data.post);
    });

    if (tipo) {
      try {
        fetchData(tipo);
      } catch (error) {
        console.log('error en el componente busqueda');
      }
    }
  }, [tipo]);

  const fetchData = async (tipo: string) => {
    const data = await getPost(tipo);
    setdb(data as any[]);
  };

  const navigate = useNavigate();
  const handleVer = (id: string) => {
    console.log(id);
    navigate(`/offert/${id}`);
  };

  const verOtrasOpciones = () => {
    const dato = 'administracion';
    navigate(`/post/${dato}`);
  };

  return (
    <Layout>
      <div className="flex flex-col  w-full items-center md:items-center mt-12 mb-[42px] lg:flex-row lg:items-start ">
        <div className="w-3/12 h-[100%] flex flex-col items-center">
          <ul className="w-64 flex flex-col gap-1 mb-11 lg:mb-0">
            {/* Fecha */}
            <div
              className={` overflow-hidden  ease-in-out duration-200 ${
                stateDate ? 'h-52 rounded-xl border border-[#FF983D]' : 'h-8 rounded-lg'
              }`}
            >
              <div
                onClick={() => setstateDate(!stateDate)}
                className={`  flex items-center gap-2 w-full h-8  text-white text-xs  bg-[#FF983D] ease-in-out duration-200 ${
                  stateDate ? 'rounded-b-none' : ' rounded-lg'
                }`}
              >
                <img className="mx-2" src={calendar} alt="" />
                <button className="w-full h-full flex items-center">Fecha de publicación</button>
              </div>

              <div className="flex justify-center ">
                <ul className="w-full p-2">
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start" onClick={verOtrasOpciones}>
                      Hoy
                    </button>
                    <span>(1)</span>
                  </li>
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start">Mas de una semana</button>
                    <span>(20)</span>
                  </li>
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start">Mas de un mes</button>
                    <span>(30)</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Area */}
            <div
              className={` overflow-hidden ease-in-out duration-200 ${
                stateArea ? 'h-52 rounded-xl border border-[#FF983D]' : '  h-8 rounded-lg'
              }`}
            >
              <div
                onClick={() => setstateArea(!stateArea)}
                className={`  flex items-center gap-2 w-full h-8  text-white text-xs  bg-[#FF983D] ease-in-out duration-200 ${
                  stateArea ? 'rounded-b-none' : ' rounded-lg'
                }`}
              >
                <img className="mx-2" src={cubo} alt="" />
                <button className="w-full h-full flex items-center">Area</button>
              </div>

              <div className="flex justify-center ">
                <ul className="w-full p-2">
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start">Tecnologia</button>
                    <span>(10)</span>
                  </li>
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start">Marketing</button>
                    <span>(20)</span>
                  </li>
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start">Administracion</button>
                    <span>(76)</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Subtare */}
            <div
              className={` overflow-hidden  ease-in-out duration-200 ${
                stateSub ? 'h-52 rounded-xl border border-[#FF983D]' : 'h-8 rounded-lg'
              }`}
            >
              <div
                onClick={() => setstateSub(!stateSub)}
                className={`  flex items-center gap-2 w-full h-8  text-white text-xs  bg-[#FF983D] ease-in-out duration-200 ${
                  stateSub ? 'rounded-b-none' : ' rounded-lg'
                }`}
              >
                <img className="mx-2" src={subtarea} alt="" />
                <button className="w-full h-full flex items-center">subsarea</button>
              </div>

              <div className="flex justify-center ">
                <ul className="w-full p-2">
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start">Frontend</button>
                    <span>(10)</span>
                  </li>
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start">BackEnd</button>
                    <span>(20)</span>
                  </li>
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start">otros</button>
                    <span>(76)</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Ubicacion */}
            <div
              className={` overflow-hidden  ease-in-out duration-200 ${
                stateUbi ? 'h-52 rounded-xl border border-[#FF983D]' : 'h-8 rounded-lg'
              }`}
            >
              <div
                onClick={() => setstateUbi(!stateUbi)}
                className={`  flex items-center gap-2 w-full h-8  text-white text-xs  bg-[#FF983D] ease-in-out duration-200 ${
                  stateUbi ? 'rounded-b-none' : ' rounded-lg'
                }`}
              >
                <img className="mx-2" src={ubicacion} alt="" />
                <button className="w-full h-full flex items-center">Ubicación</button>
              </div>

              <div className="flex justify-center ">
                <ul className="w-full p-2">
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start">Mendoza</button>
                    <span>(10)</span>
                  </li>
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start">Bs As</button>
                    <span>(20)</span>
                  </li>
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start">Usuahia</button>
                    <span>(76)</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Modalidad */}
            <div
              className={` overflow-hidden  ease-in-out duration-200 ${
                stateModa ? 'h-52 rounded-xl border border-[#FF983D]' : 'h-8 rounded-lg'
              }`}
            >
              <div
                onClick={() => setstateModa(!stateModa)}
                className={`  flex items-center gap-2 w-full h-8  text-white text-xs  bg-[#FF983D] ease-in-out duration-200 ${
                  stateModa ? 'rounded-b-none' : ' rounded-lg'
                }`}
              >
                <img className="mx-2" src={modalidad} alt="" />
                <button className="w-full h-full flex items-center">Modalidad</button>
              </div>

              <div className="flex justify-center ">
                <ul className="w-full p-2">
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start">Presencial</button>
                    <span>(10)</span>
                  </li>
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start">Remoto</button>
                    <span>(20)</span>
                  </li>
                  <li className="flex justify-between m-2">
                    <button className="w-full text-start">Mixto</button>
                    <span>(76)</span>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
        <div className=" w-full flex flex-col items-center lg:w-10/12 h-[100%]">
          <div className="flex flex-col gap-2 md:w-[90%] md:flex-row md:justify-between md:mb-3">
            <div>
              <p className=" text-[#FF983D] text-sm md:text-xl lg:text-sm leading-4">
                {db?.length} resultados
              </p>
            </div>
            <div>
              <p className="text-xs md:text-xl lg:text-sm leading-5">
                Ordenado por:
                <button className=" p-1 mx-2 text-xs text-white     rounded-lg bg-orange-300">
                  más recientes{' '}
                </button>
                <button className="p-1 mx-2 text-[#3C3C3C] rounded-lg">más relevantes </button>
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center flex-wrap gap-4  md:w-[90%] h-auto">
            {db?.map((ong: OngInterface) => (
              <Card key={ong.id} className="w-[303px] h-[264px] relative">
                <>
                  <p className="absolute right-5 top-5 text-xs p-1 px-5 rounded-xl text-white bg-[#FF983D]">
                    {ong.modality}
                  </p>
                  <img className="w-[303px] h-[117px]" src={ong.img} alt={ong.title} />

                  <div className=" p-1 h-[147px]">
                    <div className="w-[275px]  font-medium text-xs leading-4 text-black">
                      {ong.title}
                    </div>

                    <div className="w-full h-11">
                      <p className="h-[13px] py-2 font-light text-xs leading-4">
                        Ubicacion: &nbsp;{ong.location}
                      </p>
                      <p className="h-[13px] py-2 font-light text-xs leading-4">
                        Duracion: &nbsp;{ong.duration}
                      </p>
                    </div>

                    <div className="flex w-full h-[42px] justify-between  items-center">
                      <div className="h-full flex  justify-center items-end">
                        <Button
                          type="button"
                          className="w-40 h-5 text-white flex items-center justify-center text-xs"
                          onClick={() => handleVer(ong.id)}
                        >
                          Ver
                        </Button>
                      </div>
                      <p className="text-xs w-[75px] h-[12px]">publicado: &nbsp; {ong.published}</p>
                    </div>
                  </div>
                </>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
