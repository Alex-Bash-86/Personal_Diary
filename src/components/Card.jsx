const Card = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="card bg-base-300 w-96 shadow-sm m-6 cursor-pointer"
    >
      <figure>
        <img src={props.imageUrl} alt={props.imageUrl} />
      </figure>
      <p className="date">{props.date}</p>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default Card;
