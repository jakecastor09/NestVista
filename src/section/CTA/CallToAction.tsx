import Container from '../Container/Container';
import cta1 from '../../assets/cta-1.webp';
import cta2 from '../../assets/cta-2.webp';
import cta3 from '../../assets/cta-3.webp';
import cta4 from '../../assets/cta-4.webp';

const CallToAction = () => {
  return (
    <section id='#CTA'>
      <Container>
        <div className='flex flex-col lg:flex-row-reverse lg:gap-8 xl:gap-14 '>
          <div className='w-full flex flex-col'>
            <img src={cta1} alt='' className='rounded-xl md:hidden' />
            <h1 className='text-3xl mt-8 leading-snug md:mt-0 md:text-4xl md:max-w-xl md:leading-normal xl:text-5xl xl:leading-tight xl:max-w-full'>
              Let's Move to Your Dream Family Home
            </h1>
            <p className='mt-5 leading-relaxed md:leading-loose lg:max-w-lg xl:max-w-2xl'>
              Discover the joy of moving into a home that feels just right –
              where comfort, style, and functionality merge seamlessl
            </p>
            <button className='py-2 text-white bg-pryGreen mt-6 rounded-full hover:opacity-90 duration-200 md:w-max md:px-4'>
              Get Quote New
            </button>
            <div className='hidden md:flex md:gap-4 md:mt-4 lg:overflow-x-auto'>
              <img
                src={cta2}
                alt=''
                className='rounded-xl h-[184px] w-[210px]'
              />
              <img
                src={cta3}
                alt=''
                className='rounded-xl h-[184px] w-[210px]'
              />
              <img
                src={cta4}
                alt=''
                className='rounded-xl h-[184px] w-[210px]'
              />
            </div>
          </div>
          <div>
            <img
              src={cta1}
              alt=''
              className='hidden lg:block h-full rounded-xl'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
