import React from 'react';
import { Layout } from '../layout/Layout';
import Input from '../../Input';

export function AddProyectos() {
  const infoInput = [
    {
      id: '1',
      label: 'Nombre del proyecto',
      placeholder: 'Ingrese el nombre del proyecto',
    },
    {
      id: '2',
      label: 'Habilidades',
      placeholder: 'Ingrese las 3 primeras habilidades que le permitieron realizar el proyecto',
    },
    {
      id: '3',
      label: 'Herramientas',
      placeholder: 'Ingrese las 3 primeras herramientas que le permitieron realizar el proyecto',
    },
    {
      id: '4',
      label: 'URL del proyecto',
      placeholder: 'Descripcion de la etiqueta',
    },
  ];

  return (
    <div>
      <Layout title="Añadir proyectos ">
        <div>
          {infoInput.map((info, index) => (
            <Input
              key={index}
              id={info.id}
              className="w-full h-11"
              placeholder={info.placeholder}
              label={info.label}
              name={info.label}
              type="text"
              error=""
              value=""
            />
          ))}
          <button className=" flex items-center justify-center gap-1 border border-[#3C3C3C] rounded-full  mt-4 h-11 w-72 text-sm">
            <div className="text-2xl h-full flex items-center">+</div>
            Añadir contenido multimedia
          </button>
        </div>
      </Layout>
    </div>
  );
}
