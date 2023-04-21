import Layout from '../../components/layout/Layout';
import Button from '../../components/Button';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddIcon from '@mui/icons-material/Add';
import Input from '../../components/Input';
import image from '../../assets/user.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import { userContext } from '../../Context/UserProvider';
import { User, updateUser } from '../../controllers/controllers';
import { log } from 'console';

export const EditProfile = () => {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      puestoTrabajo: '',
      ubicacionTrabajo: '',
      workmodality: '',
      disponibilidad: '',
      habilidades: '',
      aboutme: '',
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      lastName: Yup.string(),
      puestoTrabajo: Yup.string(),
      ubicacionTrabajo: Yup.string(),
      workmodality: Yup.string(),
      disponibilidad: Yup.string(),
      habilidades: Yup.string(),
      aboutme: Yup.string(),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const { user, setuser } = useContext(userContext);

  const datosbasicos = async () => {
    if (user) {
      const newUser: User = {
        ...user,
        city: 'Mendoza',
        habilidades: 'HTML|CSS|JS|React|Node.js',
        areas: 'Full Stack Development',
        workmodality: ' Hibrido, Remoto',
        aboutme: values.aboutme,
      };

      const newdatauser = await updateUser(user.email, newUser);
      console.log(newdatauser);
      setuser(newdatauser);
    }

    console.log({ values });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto my-12 flex flex-col items-center lg:flex lg:items-start">
        <h2 className="mb-5 text-2xl font-bold">Editar perfil</h2>
        <div className=" w-full flex flex-col items-center gap-5 lg:flex-row lg:items-start">
          <ul className="w-96 flex flex-col gap-3 text-white text-lg">
            <li className="bg-orange-400 py-1 rounded-lg flex items-center">
              <AssignmentTurnedInOutlinedIcon className="mx-3" />
              Datos básicos
            </li>
            <li className="bg-orange-400 py-1 rounded-lg flex items-center">
              <TurnedInNotIcon className="mx-3" />
              Medios de contacto
            </li>
            <li className="bg-orange-400 py-1 rounded-lg flex items-center">
              <InfoOutlinedIcon className="mx-3" />
              Sobre mí
            </li>
            <li className="bg-orange-400 py-1 rounded-lg flex items-center">
              <InfoOutlinedIcon className="mx-3" />
              Currículo
            </li>
          </ul>
          <div className="w-5/6">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col border-border-1 border-[#89D0CA] rounded-3xl p-5 shadow-sm shadow-[#89D0CA] mb-5">
                <span className="text-lg font-bold">Datos básicos</span>
                <div className="flex justify-between my-2">
                  <div className="flex mx-auto flex-col items-center">
                    <img src={image} alt="user" className="w-32" />
                    <span className="border border-1 border-black px-5 text-xs font-semibold py-1 mt-3 rounded-full">
                      Cargar una foto
                    </span>
                  </div>
                  <div className="w-1/2">
                    <Input
                      type="text"
                      label="Nombre"
                      placeholder="| Ingrese su nombre"
                      className="w-full h-11"
                      id=""
                      value={values.name}
                      name="name"
                      error={errors.name}
                      onChange={handleChange}
                    />
                    <Input
                      type="text"
                      label="Apellido"
                      placeholder="| Ingrese su apellido"
                      className="w-full h-11"
                      id=""
                      value={values.lastName}
                      name="lastname"
                      error=""
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <Input
                  type="text"
                  label="Puesto"
                  placeholder="| Ingrese su puesto de preferencia"
                  className="w-full h-11"
                  id=""
                  value={values.puestoTrabajo}
                  name="puestoTrabajo"
                  error=""
                  onChange={handleChange}
                />
                <div className="flex gap-5 w-full justify-between">
                  <span className="w-full">
                    <Input
                      type="text"
                      label="Ubicación"
                      placeholder="| Ingrese su provincia, ciudad o zona"
                      className="w-full h-11"
                      id=""
                      value={values.ubicacionTrabajo}
                      name="ubicacionTrabajo"
                      error=""
                      onChange={handleChange}
                    />
                  </span>
                  <span className="w-full">
                    <Input
                      type="text"
                      label="Modalidad"
                      placeholder="| Ingrese su modalidad de trabajo de preferencia"
                      className="w-full h-11"
                      id=""
                      value={values.workmodality}
                      name="workmodality"
                      error=""
                      onChange={handleChange}
                    />
                  </span>
                </div>
                <Input
                  type="text"
                  label="Disponibilidad"
                  placeholder="| Seleccione su estado de disponibilidad"
                  className="w-full h-11"
                  id=""
                  value={values.disponibilidad}
                  name="disponibilidad"
                  error=""
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  label="Habilidades principales"
                  placeholder="| Seleccione 3 habilidades principales"
                  className="w-full h-11"
                  id=""
                  value={values.habilidades}
                  name="habilidades"
                  error=""
                  onChange={handleChange}
                />
                <div className="flex justify-end mt-5">
                  <Button type="button" className="px-10 text-white">
                    Guardar
                  </Button>
                </div>
              </div>
            </form>
            <div className="border-border-1 border-[#89D0CA] rounded-3xl p-5 shadow-sm shadow-[#89D0CA]">
              <span className="text-lg font-bold">Medios de contacto</span>
              <Input
                type="text"
                label="Correo electrónico"
                placeholder="| Ingrese su correo electrónico"
                className="w-full h-11"
                id=""
                value=""
                name=""
                error=""
              />
              <Input
                type="text"
                label="LinkedIn"
                placeholder="| Ingrese su URL de LinkedIn"
                className="w-full h-11"
                id=""
                value=""
                name=""
                error=""
              />
              <Input
                type="text"
                label="Behance"
                placeholder="| Ingrese su URL de Behance"
                className="w-full h-11"
                id=""
                value=""
                name=""
                error=""
              />
              <Input
                type="text"
                label="Github"
                placeholder="| Ingrese su URL de Github"
                className="w-full h-11"
                id=""
                value=""
                name=""
                error=""
              />
              <Input
                type="text"
                label="Otro"
                placeholder="| Ingrese otra red social o página web que quiera vincular con su cuenta"
                className="w-full h-11"
                id=""
                value=""
                name=""
                error=""
              />
              <div className="flex justify-end mt-5">
                <Button type="button" className="px-10 text-white">
                  Guardar
                </Button>
              </div>
            </div>
            <div className="border-border-1 border-[#89D0CA] rounded-3xl p-5 shadow-sm shadow-[#89D0CA] my-5">
              <span className="text-lg font-bold">Sobre mí</span>
              <Input
                type="text"
                label=""
                id=""
                name="aboutme"
                value={values.aboutme}
                error=""
                placeholder="| Ingrese un texto"
                className="w-full border-2 border-black h-16 rounded-xl my-3 p-2"
                onChange={handleChange}
              ></Input>
              <div className="flex justify-end mt-5">
                <Button type="button" className="px-10 text-white" onClick={datosbasicos}>
                  Guardar
                </Button>
              </div>
            </div>
            <div className="border-border-1 border-[#89D0CA] rounded-3xl p-5 shadow-sm shadow-[#89D0CA]">
              <h2 className="text-lg font-bold mb-3">Curriulo</h2>
              <button className="border border-1 border-black px-5 py-1 rounded-full">
                <AddIcon className="mr-2" />
                Añadir contenido multimedia
              </button>
              <div className="flex flex-col">
                <span className="text-sm font-bold">* Solo se admiten archivos PDF o JPG.</span>
                <span className="text-sm mt-5 flex items-center gap-2">
                  <input type="checkbox" title="checkbox" />
                  Premitir que las organizaciones descarguen su curriculum
                </span>
              </div>
              <div className="flex justify-end mt-5">
                <Button type="button" className="px-10 text-white">
                  Guardar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
