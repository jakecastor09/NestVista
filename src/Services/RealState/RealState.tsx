import Container from '../../components/Container';
import RealStateHeader from './RealStateHeader';
import RealStateItem from './RealStateItem';
import RealStateItemsContainer from './RealStateItemsContainer';
import realStateImg1 from '../../assets/realstate-img-1.webp';
import realStateImg2 from '../../assets/realstate-img-2.webp';

const RealState = () => {
  return (
    <section>
      <Container>
        <div className='flex flex-col xl:flex-row-reverse gap-x-44 '>
          <div className='xl:w-1/2'>
            <RealStateHeader />
            <RealStateItemsContainer>
              <RealStateItem name={'Property Consultans'} />
              <RealStateItem name={'Builders'} />
              <RealStateItem name={'Home Inspections'} />
              <RealStateItem name={'Agents'} />
              <RealStateItem name={'Building Contractors'} />
              <RealStateItem name={'Exterior Design'} />
              <RealStateItem name={'Vastu Consultans'} />
              <RealStateItem name={'Property Design'} />
              <RealStateItem name={'Interior Decorators'} />
              <RealStateItem name={'Rent'} />
              <RealStateItem name={'Architects'} />
              <RealStateItem name={'Investor'} />
            </RealStateItemsContainer>
            <p className='mt-8 text-sm leading-loose'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='hidden xl:block xl:w-1/2 xl:relative'>
            <img
              src={realStateImg1}
              alt=''
              className='max-h-[460px]  min-w-full object-cover rounded-xl'
            />
            <img
              src={realStateImg2}
              alt=''
              className='max-h-[200px] absolute bottom-16 -right-14 max-w-[260px] object-cover rounded-xl'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RealState;
