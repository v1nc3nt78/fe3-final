import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { myRoutes } from '../Routes/utilties/myRoutes';
import ThemeContext from '../Context/ThemeContext/themeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  return (
    <nav>
      <ul className="navbar-nav mb-2 mb-sm-0">
        <li className={`nav-item ${styles.navBarLink}`}>
          <Link className="nav-link" to={myRoutes.home}>
            Home
          </Link>
          <Link className="nav-link" to={myRoutes.contact}>
            Contact
          </Link>
          <Link className="nav-link" to={myRoutes.favs}>
            Favs
          </Link>
        </li>
      </ul>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button
        onClick={handleChangeTheme}
        style={{ background: theme.background, color: theme.font }}
      >
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;
