import "./Card.css";
import { BsFillStarFill } from "react-icons/bs";
import { BiCloudDownload } from "react-icons/bi";

const Card = (props) => {
  return (
    <>
      <div className="most-popular-item">
        <div className="card-wrapper">
          <img className="most-popular-item-img " src={props.img} />
          <div className="most-popular-item-content">
            <h4 className="most-popular-item-title">
              {props.title}
              <br />
              <span>{props.category}</span>
            </h4>
            <ul>
              <li>
                <span style={{ color: "yellow" }}>
                  <BsFillStarFill />
                </span>
                <span> {props.rate}</span>
              </li>
              <li>
                <span style={{ color: "#e75e8d" }}>
                  <BiCloudDownload />
                </span>
                <span> {props.download}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
