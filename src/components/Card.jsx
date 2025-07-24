const Card = (props) => {
  return (
    <div className="card bg-base-300 w-96 shadow-sm m-6">
      <figure>
        <img src={props.imageUrl} alt={props.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>{props.content}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
