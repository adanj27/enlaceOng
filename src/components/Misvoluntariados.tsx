import { useEffect, useState } from 'react';
import axios from 'axios';

import Info from './Info';
import Nav from './Nav';
import Layout from './layout/Layout';
import activas from '../assets/postOng/maleta.png';
import cerrada from '../assets/postOng/busqueda_cerrada.png';
import devoluciones from '../assets/postOng/devoluciones.png';
import { OngInterface } from '../types/VolunteerPosition';

const navBar = [
  ['Solicitudes', activas, '#FF983D'],
  ['Guardados', cerrada, '#FF983D'],
  ['Devoluciones', devoluciones, '#FF983D'],
];

export default function Misvoluntariados() {
  const [postclose, setpostclose] = useState([]);
  const [postactive, setpostactive] = useState([]);

  useEffect(() => {
    axios('../src/data/post.json').then((data) => {
      dbactive(data.data.post);
      dbclose(data.data.post);
    });
  }, []);

  const dbactive = (db: []) => {
    const active = db.filter(
      (ong: OngInterface) =>
        ong.activ === true && ong.name === 'SOS Discriminación Asociación Internacional',
    );
    console.log('active', active);
    setpostactive(active);
  };

  const dbclose = (db: []) => {
    const active = db.filter(
      (ong: OngInterface) =>
        ong.activ === false && ong.name === 'SOS Discriminación Asociación Internacional',
    );
    console.log('active', active);
    setpostclose(active);
  };

  const inf = [
    {
      title: 'Solicitudes',
      btn1: 'Solicitudes',
      db: postactive,
    },
    {
      title: 'Postulaciones guardadas',
      db: postclose,
    },
    {
      title: ' Devoluciones realizadas',
      btn1: 'Dar Devolucion',
      db: postclose,
    },
  ];

  return (
    <Layout>
      <div className="w-ful p-8">
        <p className="text-[#3C3C3C] text-3xl">Mis voluntariados</p>
      </div>
      <div className="flex flex-col gap-5 w-full h-full  mb-[42px] md:flex-row">
        <Nav navlink={navBar} />
        <Info inf={inf} />
      </div>
    </Layout>
  );
}
