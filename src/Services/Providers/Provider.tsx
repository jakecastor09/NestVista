import Container from '../../components/Container';
import ProviderHeader from './ProviderHeader';
import ProviderItem from './ProviderItem';
import ProvidersItemsContainer from './ProvidersItemsContainer';
const Provider = () => {
  return (
    <section>
      <Container>
        <ProviderHeader />
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
