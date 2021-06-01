import ProductCardsHolder from '../components/ProductCardsHolder/index';
import Data from '../data/birthdayPartyData';

const BirthdayPartyPage = () => (
  <div>
    <ProductCardsHolder title="Birthday Cakes" data={Data} />
  </div>
);

export default BirthdayPartyPage;
