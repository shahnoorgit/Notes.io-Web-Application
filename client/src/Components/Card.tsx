const Card = () => {
  return (
    <div className="card  bg-blue-800 text-white ">
      <div className="card-body overflow-hidden">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions ">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
