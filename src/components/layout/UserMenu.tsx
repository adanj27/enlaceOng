import { useContext, useRef, useState } from 'react';
import User from '../../assets/user.svg';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/UserProvider';
import { logout } from '../../controllers/controllers';

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const Menu = [
    { name: 'Editar perfil', link: 'edit-profile' },
    { name: 'Editar secciones', link: 'edit-sections' },
    { name: 'Mis aplicaciones', link: 'my-applications' },
  ];

  const menuRef = useRef(null);
  const imgRef = useRef<HTMLImageElement>(null);

  window.addEventListener('click', (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  const { user, setuser } = useContext(userContext);
  const navigate = useNavigate();
  const loggout = async () => {
    if (user) {
      const userlogout = await logout(user.email);
      setuser(userlogout);
      localStorage.clear();
      setTimeout(() => {
        navigate('/');
      }, 200);
    }
    setOpen(false);
  };

  return (
    <div className="relative z-10">
      <img
        ref={imgRef}
        onClick={() => setOpen(!open)}
        src={User}
        alt="user"
        className="w-8 cursor-pointer"
      />
      {open && (
        <div
          ref={menuRef}
          className="bg-white shadow-md w-64 px-5 py-3 absolute top-11 -left-48 border-2 rounded-b-3xl"
        >
          <div className="flex gap-2">
            <img
              src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
              alt="user"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <span className="font-bold text-sm">Santiago Aguírre</span>
              <br />
              <span className="text-xs">Desarrollador Frontend</span>
            </div>
          </div>
          <Link to="/profile">
            <button className="w-full text-center border border-1 rounded-full my-3 border-black">
              Ir a mi perfil
            </button>
          </Link>
          <ul className="cursor-pointer mb-2">
            {Menu.map((menu) => (
              <li onClick={() => setOpen(false)} key={menu.name} className="my-1 hover:underline">
                <Link to={`/profile/${menu.link}`}>{menu.name}</Link>
              </li>
            ))}
          </ul>
          <span onClick={loggout} className="hover:underline cursor-pointer">
            Cerrar sesión
          </span>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
