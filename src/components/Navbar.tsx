import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [clickPage, setClickPage] = useState('home');
  const styleNavItem = 'font-semibold text-textTitle';
  return (
    <nav className='p-4 md:py-4 md:px-6 xl:p-6'>
      <div className='flex justify-between items-center'>
        <Link to={'/'}>
          <h1 className='text-2xl'>NestVista</h1>
        </Link>
        <div className='space-x-4 flex items-center lg:space-x-8'>
          <div className='lg:hidden'>
            <GiHamburgerMenu size='24px' />
          </div>
          <ul className='hidden space-x-12 lg:flex text-textBody'>
            <li
              className={`${clickPage === 'home' && styleNavItem}`}
              onClick={() => setClickPage('home')}
            >
              <Link to={'/'}> Home</Link>
            </li>
            <li
              className={`${clickPage === 'listing' && styleNavItem}`}
              onClick={() => setClickPage('listing')}
            >
              <Link to={'/listing'}> Listing</Link>
            </li>
            <li
              className={`${clickPage === 'services' && styleNavItem}`}
              onClick={() => setClickPage('services')}
            >
              <Link to={'/services'}> Services</Link>
            </li>
            <li
              className={`${clickPage === 'about' && styleNavItem}`}
              onClick={() => setClickPage('about')}
            >
              <Link to={'/about'}>About</Link>
            </li>
            <li
              className={`${clickPage === 'contact' && styleNavItem}`}
              onClick={() => setClickPage('contact')}
            >
              <Link to={'/contact'}>Contact Us</Link>
            </li>
          </ul>
          <button className='px-6 py-2 rounded-full bg-pryGreen text-white font-medium hover:opacity-90 duration-200'>
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
