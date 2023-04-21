import { Layout } from '../layout/Layout';
import Input from '../../Input';

export function AddEducacion() {
  const infoInput = [
    {
      id: '1',
      label: 'Titulo/Carrera',
      placeholder: 'Ingrese nombre de la carrear o estudio ',
    },
    {
      id: '2',
      label: 'Institucion',
      placeholder: '',
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
      <Layout title="Añadir Estudios ">
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
            id="Promedio"
            className="w-full h-11"
            placeholder="Descripcion de la etiqueta"
            label="Promedio"
            name="promedio"
            type="text"
            error=""
            value=""
          />
        </div>
      </Layout>
    </div>
  );
}
