import { CounterTwoProps } from "./counter-two.types";

export const CounterTwo = (props: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button type="button" onClick={props.handleIncrement}>
          Increment
        </button>
      )}
      {props.handleDecrement && (
        <button type="button" onClick={props.handleDecrement}>
          Decrement
        </button>
      )}
    </div>
  );
};
