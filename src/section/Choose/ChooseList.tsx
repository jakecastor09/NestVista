import ChooseItem from './ChooseItem';
import ChooseItems from './ChooseItems';
const ChooseList = () => {
  return (
    <ChooseItems>
      <ChooseItem
        title={'Comfortable Home Design'}
        description={
          'We prioritize creating spaces that embrace tranquility, functionality, and coziness.'
        }
      />
      <ChooseItem
        title={'Professional Developer'}
        description={
          'Our commitment to excellence is reflected in the quality of our work, meticulous attention to detail, and client-centric approach.'
        }
      />
      <ChooseItem
        title={'Fast Response'}
        description={
          'Our commitment to excellence is reflected in the quality of our work, meticulous attention to detail, and client-centric approach.'
        }
      />
    </ChooseItems>
  );
};

export default ChooseList;
