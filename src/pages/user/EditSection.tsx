import activas from '../../assets/postOng/maleta.png';
import cerrada from '../../assets/postOng/busqueda_cerrada.png';
import devoluciones from '../../assets/postOng/devoluciones.png';
import Layout from '../../components/layout/Layout';
import Nav from '../../components/Nav';
import { CardEducation } from './CardEducation';
import { CardExperience } from './CardExperience';
import { CardProjects } from './CardProjects';
import LayoutUser from './layout/LayoutUser';

const navBar = [
  ['Certificaciones', activas, '#FF983D'],
  ['Experiencia', cerrada, '#FF983D'],
  ['Estudios', devoluciones, '#FF983D'],
  ['Porfolio', devoluciones, '#FF983D'],
];

export default function EditSection() {
  const inf = [
    {
      title: 'Certificaciones',
      btn: 'Añadir certificación',
      children: <CardEducation />,
    },
    {
      title: 'Experiencia',
      btn: 'Añadir experiencia',
      children: <CardExperience />,
    },
    {
      title: 'Estudios',
      btn: 'Añadir estudios',
      children: <CardEducation />,
    },
    {
      title: 'Proyectos',
      btn: 'Añadir proyectos',
      children: <CardProjects />,
    },
  ];

  return (
    <Layout>
      <div className="w-full flex justify-center p-8 md:justify-start">
        <p className="text-[#3C3C3C] font-medium text-3xl leading-10">Editar secciones</p>
      </div>
      <div className="flex flex-col gap-5 w-full h-full  mb-[42px] md:flex-row">
        <Nav navlink={navBar} />
        <div className="w-full h-auto flex flex-col  items-center">
          {inf.map((info, index) => (
            <LayoutUser key={index} index={index} title={info.title} btn={info.btn}>
              {info.children}
            </LayoutUser>
          ))}
        </div>
      </div>
    </Layout>
  );
}
