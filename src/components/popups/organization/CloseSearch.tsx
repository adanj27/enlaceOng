import React, { useState } from 'react';
import { Layout } from '../layout/Layout';
import CloseIcon from '@mui/icons-material/Close';
import Input from '../../Input';
import AddIcon from '@mui/icons-material/Add';

export const CloseSearch = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <span
          // ref={menuRef}
          onClick={() => setOpen(!open)}
          className="text-lg font-semibold my-5 border border-1 border-black px-2 rounded-full flex items-center gap-2 cursor-pointer"
        >
          <AddIcon />
          Añadir sección
        </span>
        {open && (
          <Layout title="Crear busqueda">
            <div onClick={() => setOpen(!open)} className="w-full relative flex justify-end">
              <CloseIcon className="absolute -top-10 cursor-pointer" />
            </div>
            <div className="mx-5">
              <Input
                label="¿Encontró al voluntario adecuado a la búsqueda?"
                placeholder="| Seleccione una opción"
                className="w-full h-10"
                type="text"
                name=""
                error=""
                id=""
                value=""
              />
              <Input
                label="Seleccione el voluntario elegido"
                placeholder="| Seleccione una opción"
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
