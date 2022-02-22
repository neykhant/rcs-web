import { Fragment } from "react";
import OurServices from "../../components/services/OurServices";
import ServicesHero from "../../components/services/ServicesHero";
import Information from "../../components/Information";
import { getClientSuccess } from "../../data/clientSuccess";
import { getClientSuccessMM } from "../../data/clientSuccessMM";

export async function getStaticProps(context) {
  
  const items = getClientSuccess();

  return {
    props: {
      items,
    },
  };
}

export default function ServicesPage({ items }) {
  return (
    <Fragment>
      <ServicesHero />
      <OurServices />
      <Information items={items} />
    </Fragment>
  );
}
