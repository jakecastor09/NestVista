import aboutSmImg1 from '../../assets/about-sm-img1.webp';
import aboutSmImg2 from '../../assets/about-md-img2.webp';
import aboutSmImg3 from '../../assets/about-xl-img3.webp';

const AboutImage = () => {
  return (
    <>
      {/* *refactor later */}
      <img
        src={aboutSmImg1}
        alt=''
        className='rounded-xl max-h-[240px] object-cover md:hidden w-full mt-4'
      />
      <img
        src={aboutSmImg2}
        alt=''
        className='hidden rounded-xl w-full object-cover md:block mt-4 md:max-h-[320px] lg:hidden'
      />
      <img
        src={aboutSmImg3}
        alt=''
        className='hidden rounded-xl w-full mt-8 object-cover lg:block lg:max-h-[400px] '
      />
    </>
  );
};

export default AboutImage;
