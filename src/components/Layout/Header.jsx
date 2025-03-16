import Classes from "./Header.module.css";
import recipeImage from "../assets/recpieImage3.png";

const Header = () => {
  return (
    <>
      <h1 className={Classes.header}>Recipes</h1>
      <div className={Classes["main-image"]}>
        <img src={recipeImage}></img>
      </div>
    </>
  );
};

export default Header;
