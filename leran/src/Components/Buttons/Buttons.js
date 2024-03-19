import "./Buttons.css";

const PrimaryButton = (props) => {
  return (
    <div className="button-primary-button">
      <a href="/#">{props.children}</a>
    </div>
  );
};
const SecondryButton = (props) => {
  return (
    <div className="button-secondry-button">
      <a>{props.children}</a>
    </div>
  );
};

export default PrimaryButton;

export { SecondryButton };
