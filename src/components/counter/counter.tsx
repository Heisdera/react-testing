import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
        placeholder="Enter amount"
        aria-label="Amount to set counter"
      />
      <button type="button" onClick={() => setCount(amount)}>
        Set
      </button>
    </div>
  );
};
