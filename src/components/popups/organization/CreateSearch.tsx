import React, { HTMLAttributes, useState } from 'react';
import { Layout } from '../layout/Layout';
import CloseIcon from '@mui/icons-material/Close';
import Input from '../../Input';

interface CustomButtonProps extends HTMLAttributes<HTMLSpanElement> {
  title: string;
}

export const CreateSearch = ({ title }: CustomButtonProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <span onClick={() => setOpen(!open)}>{title}</span>
        {open && (
          <Layout title="Crear busqueda">
            <div onClick={() => setOpen(!open)} className="w-full relative flex justify-end">
              <CloseIcon className="absolute -top-10 cursor-pointer" />
            </div>
            <div className="mx-5">
              <Input
                label="Título"
                placeholder="| Ingrese el título de la busqueda"
                className="w-full h-10"
                type="text"
                name=""
                error=""
                id=""
                value=""
              />
              <Input
                label="Área"
                placeholder="| Ingrese el área de trabajo"
                className="w-full h-10"
                type="text"
                name=""
                error=""
                id=""
                value=""
              />
              <Input
                label="Puesto"
                placeholder="| Ingrese el nombre del puesto"
                className="w-full h-10"
                type="text"
                name=""
                error=""
                id=""
                value=""
              />
              <Input
                label="Ubicación"
                placeholder="| Ingrese el nombre de la institución emisora"
                className="w-full h-10"
                type="text"
                name=""
                error=""
                id=""
                value=""
              />
              <div className="flex gap-2">
                <Input
                  label="Modalidad"
                  placeholder="| Seleccione la modalidad de trabajo"
                  className="w-full h-10"
                  type="text"
                  name=""
                  error=""
                  id=""
                  value=""
                />
                <Input
                  label="Duración"
                  placeholder="| Seleccione la duración del trabajo"
                  className="w-full h-10"
                  type="text"
                  name=""
                  error=""
                  id=""
                  value=""
                />
              </div>
              <div className="flex gap-2">
                <Input
                  label="Cant. de hs"
                  placeholder="| Cant. de horas de trabajo por semana"
                  className="w-full h-10"
                  type="text"
                  name=""
                  error=""
                  id=""
                  value=""
                />
                <Input
                  label="Certificado"
                  placeholder="| Seleccione si entrega certificado"
                  className="w-full h-10"
                  type="text"
                  name=""
                  error=""
                  id=""
                  value=""
                />
              </div>
              <h2 className="font-semibold text-md">Detalles de la propuesta</h2>
              <Input
                label="Descripción"
                placeholder="| Descripción de la etiqueta"
                className="w-full h-10"
                type="text"
                name=""
                error=""
                id=""
                value=""
              />
              <Input
                label="Tareas a realizar"
                placeholder="| Descripción de la etiqueta"
                className="w-full h-10"
                type="text"
                name=""
                error=""
                id=""
                value=""
              />
              <Input
                label="Requisitos preferenciales"
                placeholder="| Descripción de la etiqueta"
                className="w-full h-10"
                type="text"
                name=""
                error=""
                id=""
                value=""
              />
            </div>
          </Layout>
        )}
      </div>
    </>
  );
};
