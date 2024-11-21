function ResetButton({ resetBoard }) {
  return (
    <div>
      <button className="reset-btn" onClick={resetBoard}>Reset</button>
    </div>
  );
}

export default ResetButton;
