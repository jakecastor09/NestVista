import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='p-4 md:py-4 md:px-6 xl:p-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl'>NestVista</h1>
        <div className='space-x-4 flex items-center lg:space-x-8'>
          <div className='lg:hidden'>
            <GiHamburgerMenu size='24px' />
          </div>
          <ul className='hidden space-x-12 lg:flex text-textBody'>
            <li className='font-semibold text-textTitle'>
              <Link to={'/'}> Home</Link>
            </li>
            <li>
              <Link to={'/listing'}> Listing</Link>
            </li>
            <li>Services</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact Us</li>
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
