export default function Button({ children, type, handler }) {
    const style =
      type === "danger"
        ? "bg-red-500 text-white px-3 py-2 rounded shadow hover:bg-red-600"
        : "bg-blue-500 text-white px-3 py-2 rounded shadow hover:bg-blue-600";
  
    return (
      <button className={style} onClick={handler}>
        {children}
      </button>
    );
  }
  