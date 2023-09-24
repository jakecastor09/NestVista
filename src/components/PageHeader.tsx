import Container from './Container';

interface Props {
  title: string;
  description: string;
}
const PageHeader = ({ title, description }: Props) => {
  return (
    <Container>
      <header className='text-center'>
        <h1 className='text-3xl capitalize md:text-4xl lg:text-5xl'>{title}</h1>
        <p className='mt-4 leading-loose lg:max-w-xl lg:mx-auto xl:max-w-2xl'>
          {description}
        </p>
      </header>
    </Container>
  );
};

export default PageHeader;
