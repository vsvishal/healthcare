interface CardProp {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProp) => {
  return (
    <div className="shadow-xl p-10 transition duration-300 hover:scale-105 h-fit md:h-52 w-full">
      <h1 className="text-xl text-blue-500 font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
