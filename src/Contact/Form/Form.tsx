import Container from '../../components/Container';
import FormFeature from './FormFeature';
import FormInputField from './FormInputField';
import FormTouch from './FormTouch';

const Form = () => {
  return (
    <section>
      <Container>
        <FormFeature />
        <div className='mt-4 flex flex-col lg:flex-row-reverse lg:gap-12 md:mt-8 xl:mt-12 '>
          <FormInputField />
          <FormTouch />
        </div>
      </Container>
    </section>
  );
};

export default Form;
