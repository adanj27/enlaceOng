import { ChangeEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../assets/LogoEnlaceSVG.svg';

import { Menu } from './Menu';
import Input from '../Input';
import UserMenu from './UserMenu';
import { userContext } from '../../Context/UserProvider';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [busqueda, setBusqueda] = useState<string>('');
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const { user } = useContext(userContext);
  const navigate = useNavigate();

  const SearchPostulaciones = () => {
    navigate(`/post/${busqueda}`);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setBusqueda(event.target.value);
  }

  const showLoginAndSignUp = (
    <div className="sm:block sm:ml-6">
      <div className="flex h-full items-center space-x-5">
        <Input
          className="h-5 rounded-3xl w-full"
          placeholder="Search"
          label=""
          id=""
          value={busqueda}
          type="text"
          name="busqueda"
          error=""
          onChange={handleInputChange}
        />
        <button onClick={SearchPostulaciones}>GO!</button>
        <UserMenu />
      </div>
    </div>
  );

  const showLogoutAndCart = (
    <div className="sm:ml-6">
      <div className="flex h-full items-center space-x-4">
        <Link to="/auth/volunteer/login">
          <Button
            type="button"
            className="inline-flex bg-transparent items-center px-4 py-2 xl:text-base md:text-base text-xs font-bold text-black"
          >
            Iniciar sesión
          </Button>
        </Link>
        <Link to="/auth/volunteer/register">
          <Button
            type="button"
            className="text-black inline-flex bg-transparent items-center px-5 py-1 border-2 border-gray-800 xl:text-base md:text-base text-xs font-bold rounded-full "
          >
            Registrarme
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex-shrink-0 flex items-center">
            <Menu isOpen={isMenuOpen} toggle={toggleMenu} />
            <Link to="/home" className="md:block">
              <img className="w-10" src={Logo} alt="logo" />
            </Link>
          </div>
          {user?.isLoggin ? showLoginAndSignUp : showLogoutAndCart}
        </div>
      </div>
    </nav>
  );
}
