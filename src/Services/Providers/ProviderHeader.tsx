interface Props {
  title: string;
}
const ProviderHeader = ({ title }: Props) => {
  return (
    <header>
      <h1 className='text-2xl md:text-3xl lg:text-4xl'>{title}</h1>
      <p className='mt-4 leading-loose'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </header>
  );
};

export default ProviderHeader;
