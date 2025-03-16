import { useState } from "react";
import Classes from "./AddButton.module.css";

const AddButton = () => {
  const [showForm, setShowForm] = useState(false);

  const AddRecipe = () => {
    setShowForm(true);
  };

  const RemoveRecipe = () => {
    setShowForm(false);
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");

  const sendRecipe = async () => {
    const newRecipe = {
      name,
      description,
      time,
      ingredients,
    };

    try {
      const response = await fetch(
        "https://recipeapp-19652-default-rtdb.firebaseio.com/Recipie.json",
        {
          method: "POST",
          body: JSON.stringify(newRecipe),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send recipe.");
      }

      alert("Recipe sent successfully!");
      window.location.reload();
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <button className={Classes.button} onClick={AddRecipe}>
        Add Recipe
      </button>
      {showForm && (
        <div className={Classes.overlay}>
          <div className={Classes.modal}>
            <label>Recipe Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label htmlFor="">Description:</label>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label htmlFor="">Ingridients:</label>
            <textarea
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
            <label htmlFor="">Time:</label>
            <textarea
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            ></textarea>
            <div className={Classes.modalButtons}>
              <button onClick={sendRecipe}>Add</button>
              <button onClick={RemoveRecipe}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddButton;
