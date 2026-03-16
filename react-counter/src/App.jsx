import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>
        {show ? "Скрыть компонент" : "Показать компонент"}
      </button>
      <hr />
      {show && <Counter count={count} setCount={setCount} />}
    </div>
  );
}

export default App;