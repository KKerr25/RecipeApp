import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import Classes from "./Recipeitem.module.css";

const RecipeItem = (props) => {
  const cartCTX = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCTX.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      ingridients: props.ingridients,
      time: props.time,
    });
  };

  return (
    <li className={Classes.recipe}>
      <div>
        <h3>{props.name}</h3>
        <h4>Description</h4>
        <div className={Classes.description}> {props.description}</div>
        <h4>Time</h4>
        <div className={Classes.description}>{props.time}</div>
        <h4>Ingridents</h4>
        <div className={Classes.description}>{props.ingridients}</div>
      </div>
    </li>
  );
};

export default RecipeItem;
