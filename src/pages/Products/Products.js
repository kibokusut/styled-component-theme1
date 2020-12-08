import { InfoSection, Pricing } from "./../../components";
import { homeObjTwo, homeObjThree, homeObjFour } from "./Data";
const Product = () => {
  return (
    <>
      <InfoSection {...homeObjTwo}></InfoSection>
      <InfoSection {...homeObjThree}></InfoSection>
      <Pricing />
      <InfoSection {...homeObjFour}></InfoSection>
    </>
  );
};

export default Product;
