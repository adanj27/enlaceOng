import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/AutRoutes';
import { Dashboard } from '../pages/Dashboard';
import { HomePage } from '../pages/HomePage';
import { AboutUs } from '../pages/AboutUs';
import { TermsAndConditions } from '../pages/TermsAndConditions';
import { Faq } from '../pages/Faq';
import { Contact } from '../pages/Contact';
import { ProfilePage } from '../pages/user/ProfilePage';
import { EditProfile } from '../pages/user/EditProfile';
import Offert from '../components/Offert';
import Busqueda from '../components/home/Busqueda';
import Post from '../components/ong/Post';
import OrganizationPage from '../pages/OrganizationPage';
import Misvoluntariados from '../components/Misvoluntariados';
import EditSection from '../pages/user/EditSection';
import { useContext, useEffect } from 'react';
import { userContext } from '../Context/UserProvider';
import { User } from '../controllers/controllers';

function Approuter() {
  const isAuthenticated = false; // Cambia esto a `false` para simular un usuario no autenticado

  const { user, setuser } = useContext(userContext);

  useEffect(() => {
    const u = localStorage.getItem('user');
    if (u) {
      const userlogged = JSON.parse(u);
      setuser(userlogged);
      console.log(userlogged);
    }
  }, []);

  return (
    <Routes>
      {/* Ruta de acceso al publico */}
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/offert/:id" element={<Offert />} />
      <Route path="/organization/:id" element={<OrganizationPage />} />
      <Route path="/post" element={<Busqueda />} />
      <Route path="/post/:tipo" element={<Busqueda />} />
      <Route path="/tac" element={<TermsAndConditions />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/busqueda" element={<Post />} />

      {/* Ruta condicionada por la authenticated del usuario */}
      {user?.isLoggin ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit-profile" element={<EditProfile />} />
          <Route path="/profile/edit-sections" element={<EditSection />} />
          <Route path="/profile/my-applications" element={<Misvoluntariados />} />
        </>
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      {/* Ruta de protección, en caso de que el usuario quiera ir a una dirección aleatoria */}
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default Approuter;
