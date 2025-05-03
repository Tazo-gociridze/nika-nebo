// import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

const HeaderNav = () => {
  // const { t } = useTranslation('header');
  const { pathname } = useLocation();

  const isActiveLink = (to: string) => pathname === to;

  return (
    <nav className="hidden gap-x-10 text-[19px] text-white sm:hidden lg:flex">
      <NavLink to="/" className={isActiveLink('/') ? 'text-[#ff9646]' : 'hover:text-[#ff9646]'}>
        მთავარი
      </NavLink>
      <NavLink
        to="/tours"
        className={isActiveLink('/tours') ? 'text-[#ff9646]' : 'hover:text-[#ff9646]'}
      >
        ავეჯი
      </NavLink>
    </nav>
  );
};

export default HeaderNav;
