import React from 'react';
import { useFormik } from 'formik';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Input from '../../../components/Input';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import Layout from '../../../components/layout/Layout';
import { dbmongoApi } from '../../../api/apiMongo';
import { User, createUser } from '../../../controllers/controllers';

export const VolunteerRegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: '',
      username: '',
      avatar: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre es obligatorio'),
      lastName: Yup.string(),
      avatar: Yup.string().required(),
      username: Yup.string().required(),
      email: Yup.string().email().required('El email es obligatorio'),
      password: Yup.string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .required('La contraseña es obligatoria'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'La contraseña no coincide')
        .required('La confirmación de la contraseña es obligatoria'),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const startRegister = async () => {
    try {
      const newUser: User = {
        id: '',
        isLoggin: false,
        userName: values.username,
        name: values.name,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        avatar: values.avatar,
        city: '',
        country: '',
        workmodality: '',
        disponibilidad: '',
        areas: '',
        postulaciones: [],
        habilidades: '',
        ubicacionTrabajo: '',
        puestoTrabajo: '',
        aboutme: '',
      };
      await createUser(newUser);
    } catch (error) {
      console.log('Hubo un error al crear usuario');
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto my-8">
        <Card>
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl text-center w-full text-gray-800 font-bold">Registro</h2>
            <div className="w-full flex gap-4">
              <div className="w-full">
                <Input
                  name="name"
                  id="name"
                  type="text"
                  label="Nombre"
                  placeholder="| Ingrese su nombre"
                  error={errors.name}
                  onChange={handleChange}
                  value={values.name}
                  className="w-full h-11"
                />
              </div>
              <div className="w-full">
                <Input
                  name="lastName"
                  id="lastName"
                  type="text"
                  label="Apellido"
                  placeholder="| Ingrese su apellido"
                  error={errors.lastName}
                  onChange={handleChange}
                  value={values.lastName}
                  className="w-full h-11"
                />
              </div>
            </div>
            <Input
              label="Nombre de usuario"
              name="username"
              id="username"
              type="username"
              placeholder="| Ingrese su nombre de usuario"
              onChange={handleChange}
              error={errors.username}
              value={values.username}
              className="w-full h-11"
            />
            <Input
              label="Avatar"
              name="avatar"
              id="avatar"
              type="avatar"
              placeholder="| Ingrese la URL de un avatar"
              onChange={handleChange}
              error={errors.avatar}
              value={values.avatar}
              className="w-full h-11"
            />

            <Input
              label="Correo electrónico"
              name="email"
              id="email"
              type="email"
              placeholder="| Ingrese su correo electrónico"
              onChange={handleChange}
              error={errors.email}
              value={values.email}
              className="w-full h-11"
            />

            <div className="relative">
              <Input
                label="Contraseña"
                name="password"
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="| Ingrese su contraseña"
                onChange={handleChange}
                error={errors.password}
                value={values.password}
                className="w-full h-11"
              />
              <div
                className="cursor-pointer top-9 flex right-0 pr-3 items-center absolute text-gray-800"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            <div className="relative">
              <Input
                label="Repetir contraseña"
                name="confirmPassword"
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="| Ingrese nuevamente su contraseña"
                onChange={handleChange}
                error={errors.confirmPassword}
                value={values.confirmPassword}
                className="w-full h-11"
              />
              <div
                className="cursor-pointer top-9 flex right-0 pr-3 items-center absolute text-gray-800"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            <Button
              className="bg-blue-300 hover:bg-blue-400 transition-colors mt-4 text-white py-2 w-full rounded-xl focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={startRegister}
            >
              Crear cuenta
            </Button>
            <div className="max-w-md mx-auto my-4 px-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-800 after:mt-0.5 after:flex-1 after:border-t after:border-gray-800 ">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-gray-700">O</p>
            </div>
            <div className="relative">
              <Button
                type="button"
                className="bg-blue mb-3 flex w-full items-center justify-center rounded-xl hover:bg-blue-800 transition-colors py-2 text-center text-white"
              >
                Registrarme con facebook
              </Button>
              <div className="top-3 left-12 absolute">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="38.657999999999994 12.828 207.085 207.085"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-center my-5">
              <p className="text-sm mr-5">¿Ya tenés cuenta?</p>
              <Link
                className="px-6 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-colors text-center text-white"
                to="/auth/volunteer/login"
              >
                Inicia sesión
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
};
