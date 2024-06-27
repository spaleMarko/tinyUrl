import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/admin/most-popular-domains'>
            Most popular domains
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
