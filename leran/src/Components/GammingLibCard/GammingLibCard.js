import { SecondryButton } from "..";
import "./GamminLibCard.css";
function GammingLibCard(props) {
  return (
    <div className="gamming-lib-card">
      <ul>
        <li className="gamming-lib-card-img">
          <img src={props.img}></img>
        </li>
        <li>
          <h4>{props.title}</h4>
          <span>{props.category}</span>
        </li>
        <li>
          <h4>Date Added</h4>
          <span>{props.date_added}</span>
        </li>
        <li>
          <h4>Hours Played</h4>
          <span>{props.hour_played}</span>
        </li>
        <li>
          <h4>Currently</h4>
          <span>{props.currently}</span>
        </li>

        <SecondryButton>Donwload</SecondryButton>
        {/* <div className="main-button">
          <a href="/#">Donwload</a>
        </div> */}
      </ul>
    </div>
  );
}

export default GammingLibCard;
