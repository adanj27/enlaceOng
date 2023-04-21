import { Layout } from '../layout/Layout';
import Input from '../../Input';

export function AddExperiencia() {
  const infoInput = [
    {
      id: '1',
      label: 'Puestos',
      placeholder: 'Ingrese el nombre del proyecto',
    },
    {
      id: '2',
      label: 'Tipo de experiencia',
      placeholder: 'Ingrese las 3 primeras habilidades que le permitieron realizar el proyecto',
    },
    {
      id: '4',
      label: 'Ubicacion',
      placeholder: 'Descripcion',
      type: 'texto',
    },
    {
      id: '5',
      label: 'Modalidad',
      placeholder: 'Descripcion',
      type: 'texto',
    },
  ];

  const infoFecha = [
    {
      id: '6',
      label: 'Fecha de inicio',
      placeholder: 'Descripcion',
      type: 'date',
    },
    {
      id: '7',
      label: 'Fecha de finalizacion',
      placeholder: 'Descripcion',
      type: 'date',
    },
  ];
  return (
    <div>
      <Layout title="Añadir Experiencia">
        <div className="">
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
          <div className="flex gap-1 justify-center items-center">
            {infoFecha.map((fecha, index) => (
              <Input
                key={index}
                id={fecha.id}
                className="w-full h-11"
                placeholder={fecha.placeholder}
                label={fecha.label}
                name={fecha.label}
                type={fecha.type}
                error=""
                value=""
              />
            ))}
          </div>
          <Input
            id="actitudes"
            className="w-full h-11"
            placeholder="Descripcion de la etiqueta"
            label="actitudes"
            name="actitudes"
            type="text"
            error=""
            value=""
          />
        </div>
      </Layout>
    </div>
  );
}
