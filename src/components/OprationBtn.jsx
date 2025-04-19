const OprationBtn = ({ button_title, symbol, onClick }) => {
  return (
    <button onClick={onClick}>
      {button_title} {symbol}
    </button>
  );
};

export default OprationBtn;
