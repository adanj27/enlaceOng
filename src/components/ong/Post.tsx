import { useEffect, useState } from 'react';
import axios from 'axios';
import { OngInterface } from '../../types/VolunteerPosition';
import activas from '../../assets/postOng/maleta.png';
import cerrada from '../../assets/postOng/busqueda_cerrada.png';
import resena from '../../assets/postOng/resena.png';
import devoluciones from '../../assets/postOng/devoluciones.png';
import Layout from '../layout/Layout';
import Nav from '../Nav';
import Info from '../Info';
import { CreateSearch } from '../popups/organization/CreateSearch';

const navBar = [
  ['Búsquedas activas', activas, '#FF983D'],
  ['Búsquedas cerradas', cerrada, '#FF983D'],
  ['Reseñas', resena, '#A8A1DF'],
  ['Devoluciones', devoluciones, '#89d0ca'],
];

function Post() {
  const [postclose, setpostclose] = useState([]);
  const [postactive, setpostactive] = useState([]);

  useEffect(() => {
    axios('src/data/post.json').then((data) => {
      dbactive(data.data.post);
      dbclose(data.data.post);
    });
  }, []);

  const inf = [
    {
      title: 'Busqueda activa',
      btn: <CreateSearch title="Crear una busqueda" />,
      db: postactive,
    },
    {
      title: 'Busqueda cerradas',
      db: postclose,
    },

    {
      title: 'Reseñas',
      btn: <CreateSearch title="Fijar reseña" />,
      db: postclose,
    },
    {
      title: ' Devoluciones realizadas',
      btn: <CreateSearch title="Dar devolucion" />,
      db: postclose,
    },
  ];

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

  return (
    <Layout>
      <div className="w-ful p-8">
        <p className="text-[#3C3C3C] text-3xl">Mis búsquedas</p>
      </div>
      <div className="flex flex-col gap-5 w-full h-full  mb-[42px] md:flex-row">
        <Nav navlink={navBar} />
        <Info inf={inf} />
      </div>
    </Layout>
  );
}

export default Post;
