import { useEffect } from "react";

function Counter({ count, setCount }) {
  console.log("🔹 Рендер Counter");

  // Срабатывает один раз при монтировании
  useEffect(() => {
    console.log("⚡ Counter смонтировался");
    return () => {
      console.log("❌ Counter размонтировался");
    };
  }, []);

  // Срабатывает каждый раз, когда count меняется
  useEffect(() => {
    console.log("📊 count изменился:", count);
  }, [count]);

  return (
    <div>
      <h2>Счётчик: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: 10 }}>
        -
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 10 }}>
        Сброс
      </button>
    </div>
  );
}

export default Counter;