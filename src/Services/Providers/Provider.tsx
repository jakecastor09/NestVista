import Container from '../../components/Container';
import ProviderHeader from './ProviderHeader';
import ProviderItem from './ProviderItem';
import ProvidersItemsContainer from './ProvidersItemsContainer';
interface Props {
  title: string;
}
const Provider = ({ title }: Props) => {
  return (
    <section>
      <Container>
        <ProviderHeader title={title} />
        <ProvidersItemsContainer>
          <ProviderItem />
          <ProviderItem />
          <ProviderItem />
          <ProviderItem />
        </ProvidersItemsContainer>
      </Container>
    </section>
  );
};

export default Provider;
