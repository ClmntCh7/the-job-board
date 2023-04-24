import Title from "./Title";

const Header = (props) => {
  return (
    <div className={props.className}>
      <Title className="title" />
    </div>
  );
};

export default Header;
