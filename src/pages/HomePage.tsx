import LandingPageBottom from '../components/home/Bottom';
import Collab from '../components/home/Collab';
import { FirstExperience } from '../components/home/FirstExperience';
import Header from '../components/home/Header';
import PostSearch from '../components/home/PostSearch';
import Layout from '../components/layout/Layout';
import { User, createUser, getUserByEmail } from '../controllers/controllers';

export const HomePage = () => {
  const newUser: User = {
    id: '10',
    isLoggin: false,
    userName: 'Nelson',
    name: 'Adam',
    lastName: 'Jimenez',
    email: 'adam@gmail.com',
    password: '123456',
    avatar: 'adadasd',
    city: '',
    country: '',
    workmodality: '',
    areas: '',
  };
  const peticiones = () => {
    createUser(newUser);
    // getUserByEmail('adam@gmail.com');
  };

  return (
    <Layout>
      <button onClick={peticiones}>Crear usuario</button>
      <Header />
      <Collab />
      <PostSearch />
      <FirstExperience />
      <LandingPageBottom />
    </Layout>
  );
};
