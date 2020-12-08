import { InfoSection, Pricing } from "./../../components";
import { homeObjFour } from "./Data";
const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour}></InfoSection>
    </>
  );
};

export default Services;
