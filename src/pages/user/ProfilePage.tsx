import Layout from '../../components/layout/Layout';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MonitorIcon from '@mui/icons-material/Monitor';
import Button from '../../components/Button';
import AddIcon from '@mui/icons-material/Add';
import Card from '../../components/Card';
import PushPinIcon from '@mui/icons-material/PushPin';
import { CardProjects } from './CardProjects';
import { CardVolunteer } from './CardVolunteer';
import { CardExperience } from './CardExperience';
import { CardEducation } from './CardEducation';
import { CardReturns } from './CardReturns';
import AddSection from '../../components/popups/user/AddSection';
import { useContext } from 'react';
import { userContext } from '../../Context/UserProvider';

export const ProfilePage = () => {
  const { user } = useContext(userContext);

  return (
    <Layout>
      <div className="flex flex-col items-center  w-full mx-auto my-12  gap-5 lg:flex-row lg:items-start">
        <div className="w-full lg:w-60 ">
          <div className="flex text-center mx-6 gap-3 flex-col mt-12 mb-10">
            <img
              src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
              alt="profile"
              className="rounded-full mx-auto w-24 h-24 object-cover"
            />
            <span className="flex justify-end px-10 w-full">
              <EditOutlinedIcon />
            </span>
            <span className="font-bold">
              {user?.name} {user?.lastName}
            </span>
            <span className="text-sm">{user?.areas}</span>
            <span className="text-sm text-gray-600">{user?.habilidades}</span>
            <span className="text-sm flex justify-center gap-1">
              <LocationOnIcon />
              {user?.city}
            </span>
            <span className="text-sm flex justify-center gap-1">
              <MonitorIcon />
              {user?.workmodality}
            </span>
            <span className="text-sm border border-1 border-[#89D0CA] rounded-xl py-1">
              Contactar
            </span>
            <span className="text-sm border border-1 border-[#89D0CA] rounded-xl py-1">
              Linkedin
            </span>
            <span className="text-sm border border-1 border-[#89D0CA] rounded-xl py-1">
              Behance
            </span>
            <span className="text-sm border border-1 border-[#89D0CA] rounded-xl py-1">
              Guithub
            </span>
          </div>
          <div className="w-full md:flex lg:flex-col">
            <div className=" hidden md:block border border-1 border-[#89D0CA] mx-6 p-5 rounded-2xl mb-10">
              <div className="w-full flex justify-between mb-5">
                <span className="text-lg font-bold">Currículo</span>
                <span>
                  <EditOutlinedIcon />
                </span>
              </div>
              <div className="mx-3 flex flex-col gap-5">
                <img
                  src="https://marketplace.canva.com/EAFKHSQ7beo/1/0/1236w/canva-curr%C3%ADculum-profesional-monocrom%C3%A1tico-verde-i2x8e2J_qwk.jpg"
                  alt="curriculo"
                />
                <Button type="button" className="text-white font-semibold ">
                  Descargar
                </Button>
              </div>
            </div>
            <div className=" hidden md:block border border-1 border-[#89D0CA] mx-6 p-5 rounded-2xl">
              <div className="w-full flex justify-between mb-3">
                <span className="text-lg font-bold">Certificado</span>
                <span>
                  <AddIcon className="mr-3" />
                  <EditOutlinedIcon />
                </span>
              </div>
              <Card className=" flex flex-col gap-1">
                <span className="font-bold">Programación web</span>
                <span className="text-xs">Platzi 10/02/2021 - 02/10/2021</span>
                <img
                  src="https://gabrielchavez.me/storage/2017/08/desarrollo-web.png"
                  alt="curriculo"
                />
              </Card>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-center lg:justify-end">
            <p className="bg-[#9DF3A0] flex items-center px-16 md:px-20 md:h-8  rounded-full mb-5">
              Activo
            </p>
          </div>
          <div className="border-border-1 border-[#89D0CA] rounded-3xl p-5 shadow-md shadow-[#89D0CA]">
            <div className="flex justify-between">
              <span className="font-bold text-lg mb-5">Sobre mí</span>
              <EditOutlinedIcon />
            </div>
            <p className="text-sm h-16">{user?.aboutme}</p>
          </div>
          <div className="flex justify-center md:justify-center lg:justify-end">
            <AddSection />
          </div>
          <div className="border-border-1 border-[#89D0CA] rounded-3xl p-5 shadow-sm shadow-[#89D0CA]">
            <div className="flex flex-wrap justify-center  md:justify-between lg:justify-between">
              <span className="font-semibold text-lg mb-5">
                <PushPinIcon className="mr-2" />
                Mis mejores proyectos
              </span>
              <span className="flex gap-2">
                <AddSection />
              </span>
            </div>
            <div className="flex flex-col gap-3 items-center md:flex-row ">
              {user?.aboutme && (
                <>
                  <CardProjects />
                  <CardProjects />
                  <CardProjects />
                </>
              )}
            </div>
          </div>
          <div className="border-border-1 border-[#89D0CA] rounded-3xl p-5 shadow-sm shadow-[#89D0CA] my-5 ">
            <div className="flex justify-between">
              <span className="font-semibold text-lg mb-5">Mis voluntariados</span>
              <span className="flex gap-2">
                <AddIcon />
                <EditOutlinedIcon />
              </span>
            </div>
            <div className=" flex flex-col items-center md:flex-row md:justify-between">
              {user?.aboutme && <CardVolunteer />}
            </div>
          </div>
          <div className="border-border-1 border-[#89D0CA] rounded-3xl p-5 shadow-sm shadow-[#89D0CA]">
            <div className="flex justify-between">
              <span className="font-semibold text-lg mb-5">Mis devoluciones</span>
              <EditOutlinedIcon />
            </div>
            <div className=" flex flex-col items-center md:flex-row md:justify-between">
              {user?.aboutme && (
                <>
                  <CardReturns />
                  <CardReturns />
                  <CardReturns />
                </>
              )}
            </div>
          </div>
          <div className="border-border-1 border-[#89D0CA] rounded-3xl p-5 shadow-sm shadow-[#89D0CA] my-5">
            <div className="flex justify-between">
              <span className="font-semibold text-lg mb-5">Mi experiencia</span>
              <EditOutlinedIcon />
            </div>

            <div className="flex flex-col items-center md:flex-row ">
              {user?.aboutme && <CardExperience />}
            </div>
          </div>
          <div className="border-border-1 border-[#89D0CA] rounded-3xl p-5 shadow-sm shadow-[#89D0CA] ">
            <div className="flex justify-between">
              <span className="font-semibold text-lg mb-5">Mi educación</span>
              <EditOutlinedIcon />
            </div>
            <div className="flex flex-col items-center md:flex-row gap-5">
              <CardEducation />
              <CardEducation />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
