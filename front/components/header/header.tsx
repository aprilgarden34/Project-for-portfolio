import classes from './header.module.scss';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>SIMMANI</div>
      <nav>
        <ul>
          <li>
            <Link href="/">도감</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/community">소개</Link>
          </li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
