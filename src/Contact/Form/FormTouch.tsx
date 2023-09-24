import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import contactImg1 from '../../assets/contact-img-1.webp';
const FormTouch = () => {
  return (
    <div className='mt-8 lg:w-2/5'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl'>Get in touch</h1>
      <p className='mt-2 leading-loose'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut.
      </p>
      <div className='mt-4 space-y-2'>
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
      <img
        src={contactImg1}
        alt=''
        className='mt-4 rounded-xl min-h-[240px] object-cover lg:mt-8'
      />
    </div>
  );
};

export default FormTouch;
