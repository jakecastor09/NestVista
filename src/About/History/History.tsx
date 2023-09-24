import Container from '../../components/Container';
import HistoryHeader from './HistoryHeader';
import HistoryItem from './HistoryItem';
import HistoryItemsContainer from './HistoryItemsContainer';
import historyImg1 from '../../assets/history-img-1.webp';
import historyImg2 from '../../assets/history-img-2.webp';

const History = () => {
  return (
    <section>
      <Container>
        <div className='flex flex-col lg:flex-row lg:gap-20'>
          <div className='lg:w-1/2'>
            <HistoryHeader />
            <HistoryItemsContainer>
              <HistoryItem year={'2011'} desc={'Create The Developer Team'} />
              <HistoryItem year={'2019'} desc={'Have a 2 Big Office'} />
              <HistoryItem
                year={'2022'}
                desc={'Have a 400+ Member Team Around The World'}
              />
            </HistoryItemsContainer>
            <p className='mt-4 leading-loose'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className='hidden relative lg:block lg:w-1/2'>
            <img
              src={historyImg1}
              alt=''
              className='rounded-xl h-full object-cover'
            />
            <img
              src={historyImg2}
              alt=''
              className='rounded-xl absolute w-[240px] h-[240px] bottom-20 -left-16'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default History;
