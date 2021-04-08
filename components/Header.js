import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Trypto</span>Fan
      </h1>
      <p className={headerStyles.description}>
        Your one stop shop for all things fast food
      </p>
    </div>
  );
};
export default Header;
