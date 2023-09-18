import Container from '../Container/Container';
import StepDescription from './StepDescription';
import StepHeader from './StepHeader';
import StepItem from './StepItem';
import StepList from './StepList';
import { stepData } from './data';
const Step = () => {
  return (
    <section id='#step'>
      <Container>
        <StepHeader />
        <StepList>
          {stepData.map(data => (
            <StepItem
              key={data.id}
              id={data.id}
              title={data.title}
              description={data.description}
            />
          ))}
        </StepList>
        <StepDescription />
      </Container>
    </section>
  );
};

export default Step;
