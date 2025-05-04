import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HeaderLogo = ({ setIsMenuActive }: { setIsMenuActive: (state: boolean) => void }) => {
  const { t } = useTranslation('header');
  return (
    <div>
      <Link to={`/`} onClick={() => setIsMenuActive(false)}>
        <div className="flex items-center gap-7">
          {/* <div className="h-7 w-16 cursor-pointer bg-logo-bg bg-cover text-2xl text-white lg:h-14 lg:w-32"></div> */}
          <h1 className="visible text-2xl text-white sm:visible md:visible lg:block xl:block 2xl:block">
            {t("logo")}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
