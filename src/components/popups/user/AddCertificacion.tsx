import React from 'react';
import { Layout } from '../layout/Layout';
import Input from '../../Input';

export function AddCertificacion() {
  const infoInput = [
    {
      id: '1',
      label: 'Titulo',
      placeholder: 'Ingrese titulo de la certificacion',
    },
    {
      id: '2',
      label: 'Institucion',
      placeholder: 'Ingrese las 3 primeras habilidades que le permitieron realizar el proyecto',
    },
  ];

  const infoFecha = [
    {
      id: '3',
      label: 'Fecha de inicio',
    },
    {
      id: '4',
      label: 'Fecha de finalizacion',
    },
  ];

  return (
    <div>
      <Layout title="Añadir Certificaciones ">
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
          <div className="flex gap-2">
            {infoFecha.map((fecha, index) => (
              <Input
                key={index}
                id={fecha.id}
                className="w-full h-11"
                placeholder="mm/aaaa"
                label={fecha.label}
                name={fecha.label}
                type="date"
                error=""
                value=""
              />
            ))}
          </div>
          <Input
            id="certificacion"
            className="w-full h-11"
            placeholder="Descripcion de la etiqueta"
            label="URL de la certificacion"
            name="certificacion"
            type="text"
            error=""
            value=""
          />

          <button className=" flex items-center justify-center gap-1 border border-[#3C3C3C] rounded-full  mt-4 h-11 w-72 text-sm">
            <div className="text-2xl h-full flex items-center">+</div>
            Añadir contenido multimedia
          </button>
        </div>
      </Layout>
    </div>
  );
}
