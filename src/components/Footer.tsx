import Container from './Container';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
  return (
    <section id='footer' className='bg-lightGray py-2'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-12 lg:grid-cols-4'>
          <div>
            <h1 className='text-xl'>NestVista</h1>
            <p className='mt-2 leading-relaxed'>
              Design your ideal home where your family's happiness finds its
              place. Every corner reflects joy and togetherness
            </p>
          </div>
          <div className='space-y-2 hidden md:block'>
            <h1>Get in Touch</h1>
            <p className='flex'>
              <span className='mt-1 mr-2'>
                <FaLocationDot color='black' size='20px' />
              </span>
              123 Anywhere Street, Any City, 12345 ST, Indonesia
            </p>
            <p className='flex'>
              <span className='mt-1 mr-2'>
                <IoCall color='black' size='20px' />
              </span>
              +123 456 7890
            </p>
            <p className='flex'>
              <span className='mt-1 mr-2'>
                <MdEmail color='black' size='20px' />
              </span>
              netvest@yahoo.com
            </p>
          </div>
          <div className='flex mt-8 md:mt-0'>
            <div className='w-1/2 space-y-2'>
              <h1>Useful Links</h1>
              <p>Listing</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Our Team</p>
            </div>
            <div className='w-1/2 space-y-2 md:hidden'>
              <h1>Get in Touch</h1>
              <p className='flex'>
                <span className='mt-1 mr-2'>
                  <FaLocationDot color='black' size='20px' />
                </span>
                123 Anywhere Street, Any City, 12345 ST, Indonesia
              </p>
              <p className='flex'>
                <span className='mt-1 mr-2'>
                  <IoCall color='black' size='20px' />
                </span>
                +123 456 7890
              </p>
              <p className='flex'>
                <span className='mt-1 mr-2'>
                  <MdEmail color='black' size='20px' />
                </span>
                netvest@yahoo.com
              </p>
            </div>
          </div>
          <div className='flex flex-col mt-8 md:mt-0'>
            <h1>Newsletter</h1>
            <input
              type='text'
              placeholder='Your Email'
              className='p-2 px-4 mt-8 border border-pryBlue rounded-full'
            />
            <button className='text-white bg-pryGreen mt-4 py-2 rounded-full'>
              Submit
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
