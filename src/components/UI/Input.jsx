import { forwardRef } from "react";
import Classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={Classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
