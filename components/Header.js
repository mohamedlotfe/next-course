import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
     <p className={headerStyles.description}>
         Keep up to date  with the latest version of Next js
     </p>
    </div>
  );
};

export default Header;
