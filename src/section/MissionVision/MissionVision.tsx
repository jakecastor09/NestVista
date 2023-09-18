import Container from '../Container/Container';
import vision from '../../assets/vision.webp';
import mission from '../../assets/mission.webp';
const MissionVision = () => {
  return (
    <section id='mission-vision' className=' bg-lightGray'>
      <Container>
        <div className='flex flex-col space-y-8 md:space-x-8 lg:md:space-x-24  md:space-y-0 md:flex-row md:justify-around'>
          <div className='md:flex md:flex-col-reverse'>
            <img
              src={vision}
              alt=''
              className='rounded-xl md:mt-6 h-2/3 object-cover'
            />
            <div className='mt-4 md:mt-0'>
              <h1 className='text-3xl xl:text-4xl'>Our Vision</h1>
              <p className='leading-loose mt-2 xl:mt-4'>
                Our vision is to help you find not just a house, but your
                perfect home. We are committed to guiding you on your journey to
                homeownership with professionalism, integrity, and a deep
                understanding of your unique needs.
              </p>
            </div>
          </div>

          <div className='md:flex md:flex-col'>
            <img
              src={mission}
              alt=''
              className='rounded-xl md:mt-6 h-2/3 object-cover'
            />
            <div className='mt-4'>
              <h1 className='text-3xl xl:text-4xl'>Our Mission</h1>
              <p className='leading-loose mt-2 xl:mt-4'>
                Our mission is to connect individuals and families with their
                perfect homes, providing exceptional service and expertise in
                the real estate market. We strive to make the buying process
                seamless, ensuring every client finds a place where lasting
                memories.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MissionVision;
