import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Ong } from '../types/OrganizationData';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import CardOng from '../components/CardOng';

function ReviewsCard() {
  return (
    <Card className="border rounded-xl">
      <div className="flex gap-2">
        <img
          src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
          alt="user"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <span className="font-bold text-sm">Santiago Aguírre</span>
          <br />
          <span className="text-xs">Desarrollador Frontend</span>
        </div>
      </div>
      <p className="font-light text-xs mt-2">
        Trabajar con la Unicef me permitió mejorar mis habilidades blandas y conocer nuevas formas
        de trabajo. Pude perfeccionar mis conocimientos y aportar a una causa en la que creo.
        Agradezco la oportunidad y me llevo buenas amistades.{' '}
      </p>
    </Card>
  );
}

export default function OrganizationPage() {
  const { id } = useParams<{ id: string }>();
  const [organization, setOrganization] = useState<Ong>();

  useEffect(() => {
    axios('../src/data/ong.json').then((data) => {
      const ong: Ong = data.data.ong.find((e: Ong) => e.id === id);
      setOrganization(ong);
    });
  }, []);
  return (
    <Layout>
      <div className="md:flex md:justify-between md:px-20">
        <div className="md:flex flex-col items-center mt-20 md:w-1/5">
          <img src={organization?.img} alt={organization?.name} />
          <h1 className="text-3xl font-medium mt-5 w-80">{organization?.name}</h1>
          <p className="font-light w-72">Organización social sin fines de lucro</p>
          <a
            className="border w-full text-[#3C3C3C] p-1 px-5 text-sm rounded-full text-center mt-2"
            href={`mailto:${organization?.email}?subject=Solicitud de información`}
          >
            Enviar un mail
          </a>
          <a
            className="border w-full text-[#3C3C3C] p-1 px-5 text-sm rounded-full text-center mt-2"
            href={organization?.website}
          >
            Link a la página web
          </a>
        </div>
        <main className="md:w-2/3">
          <div className="mt-6 mr-6 flex justify-end">
            <div className="bg-[#9DF3A0] text-[#3C3C3C] p-2 px-5 text-sm rounded-full">
              Búsquedas activas
            </div>
          </div>
          <Card className="border rounded-3xl mt-3">
            <h2 className="text-2xl font-medium mb-2">Sobre la organización</h2>
            <p className="text-[#3C3C3C] text-sm">{organization?.about}</p>
          </Card>
          <Card className="border rounded-3xl mt-5">
            <h2 className="text-2xl font-medium mb-2">Búsquedas activas</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <CardOng />
            </div>
          </Card>
          <Card className="border rounded-3xl mt-5">
            <h2 className="text-2xl font-medium mb-2">Reseñas</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <ReviewsCard />
              <ReviewsCard />
            </div>
          </Card>
        </main>
      </div>
    </Layout>
  );
}
