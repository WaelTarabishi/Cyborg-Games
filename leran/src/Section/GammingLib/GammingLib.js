import "./GammingLib.css";
import {
  SectionHeader,
  SectionWrapper,
  GammingLibData,
  GammingLibCard,
} from "../../Components";

const GammingLib = () => {
  const cards = GammingLibData.map((card) => {
    return (
      <GammingLibCard
        key={card.id}
        img={card.img}
        title={card.title}
        category={card.category}
        hour_played={card.hour_played}
        date_added={card.date_added}
        currently={card.currently}
      />
    );
  });
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Your Gaming Library</SectionHeader>
        <div className="gamming-lib-cards">{cards}</div>
      </SectionWrapper>
    </>
  );
};

export default GammingLib;
