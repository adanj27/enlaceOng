import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../components/Input';
import Card from '../../../components/Card';
import Layout from '../../../components/layout/Layout';
import Button from '../../../components/Button';
import { User, loginWithEmailAndPass } from '../../../controllers/controllers';
import { userContext } from '../../../Context/UserProvider';

export const VolunteerLoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Coloca un email valido').required('El email es requerido'),
      password: Yup.string().required('La contraseña es requerida'),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const navigate = useNavigate();
  const { user, setuser } = useContext(userContext);

  const startLogin = async () => {
    try {
      const u = await loginWithEmailAndPass(values.email, values.password);

      setuser(u);
      localStorage.setItem('user', JSON.stringify(u));
      setTimeout(() => {
        // console.log(user);

        navigate('/profile');
      }, 1000);
      console.log('Usuario desde componente login', u);
    } catch (error) {
      console.log('credenciales incorrectas');
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto my-10">
        <Card>
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl text-center w-full text-gray-800 font-bold">Iniciar sesión</h2>
            <div className="">
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
            </div>
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
            <a href="#!" className="text-xs">
              ¿Olvidaste tu contraseña?
            </a>
            <Button
              className="bg-violet-400 hover:bg-violet-500 transition-colors mt-4 text-white py-2 w-full rounded-xl focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={startLogin}
            >
              Ingresar
            </Button>
            <div className="max-w-md mx-auto my-4 px-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-800 after:mt-0.5 after:flex-1 after:border-t after:border-gray-800 ">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-gray-700">O</p>
            </div>
            <div className="relative">
              <Button
                type="button"
                className="bg-blue mb-3 flex w-full items-center justify-center rounded-xl hover:bg-blue-800 transition-colors py-2 text-center text-white"
              >
                Ingresar con facebook
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
              <p className="text-sm mr-5">¿No tenés cuenta?</p>
              <Link
                className="px-6 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-colors text-center text-white"
                to="/auth/volunteer/register"
              >
                Registrate
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
};
