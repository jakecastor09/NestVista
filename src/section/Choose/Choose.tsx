import Container from '../Container/Container';
import ChooseHeader from './ChooseHeader';
import ChooseList from './ChooseList';
import chooseImg1 from '../../assets/choose-img-1.webp';
import chooseImg2 from '../../assets/choose-img-2.webp';

const Choose = () => {
  return (
    <section id='choose'>
      <Container>
        <div className='space-x-12 lg:flex xl:space-x-16'>
          <div className='lg:w-1/2'>
            <ChooseHeader />
            <ChooseList />
          </div>
          <div className='hidden lg:w-1/2 relative lg:block '>
            <img
              src={chooseImg1}
              alt=''
              className='rounded-xl relative h-full object-cover
            '
            />
            <img
              src={chooseImg2}
              alt=''
              className='rounded-xl absolute bottom-24  w-[327px] h-[210px] lg:-left-8 xl:-left-16'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Choose;
