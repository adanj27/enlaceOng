import React from 'react';
import Button from '../../Button';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const Layout = ({ title, children }: Props) => {
  return (
    <>
      <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center overflow-hidden shadow-lg transform transition-all">
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30 -z-10"></div>
        <div className="w-[564px] mx-auto border-border-1 bg-white border-[#89D0CA] rounded-3xl p-5 shadow-sm shadow-[#89D0CA] border-2">
          <h2 className="font-semibold text-lg mb-5">{title}</h2>
          {children}
          <div className="flex justify-end mt-5">
            <Button type="button" className="px-10 text-white">
              Guardar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
