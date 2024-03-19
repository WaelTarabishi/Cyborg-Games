import "./MostPopular.css";

import {
  Card,
  SectionHeader,
  SectionWrapper,
  mostPopualrData,
} from "../../Components/index";
const MostPopular = () => {
  const cards = mostPopualrData.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.img}
        title={card.title}
        category={card.category}
        rate={card.rate}
        download={card.download}
      />
    );
  });
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Most Popular</SectionHeader>
        <div className="most-popular-itemss">{cards}</div>
      </SectionWrapper>
    </>
  );
};

export default MostPopular;
