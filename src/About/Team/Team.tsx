import Container from '../../components/Container';
import TeamHeader from './TeamHeader';
import team1 from '../../assets/team-1.webp';
import team2 from '../../assets/team-2.webp';
import team3 from '../../assets/team-3.webp';
import team4 from '../../assets/team-4.webp';
import TeamItemsContainer from './TeamItemsContainer';
import TeamItem from './TeamItem';
import TeamButton from './TeamButton';

const Team = () => {
  return (
    <section>
      <Container>
        <TeamHeader />
        <TeamItemsContainer>
          <TeamItem image={team2} name={'John Smith'} position={'CEO'} />
          <TeamItem
            image={team3}
            name={'David Anderson'}
            position={'Project Manager'}
          />
          <TeamItem
            image={team1}
            name={'Olivia Thompson'}
            position={'Marketing Manager'}
          />
          <TeamItem
            image={team4}
            name={'Michael Johnson'}
            position={'Sales Manager'}
          />
        </TeamItemsContainer>
        <TeamButton />
      </Container>
    </section>
  );
};

export default Team;
