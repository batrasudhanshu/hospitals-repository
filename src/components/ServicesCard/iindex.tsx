import React from "react";
interface CardProps {
  heading: string;
  image: string;
  index: number;
}

const ServicesCard: React.FC<CardProps> = ({ heading, image, index }) => {
  return (
    <div
      className={`${
        index % 2 == 0 ? "bg-yellow-100" : "bg-purple-300"
      } shadow-md rounded p-4 h-80 w-40 flex justify-center align-middle  flex-col`}
      style={{ width: "250px" }}
    >
      <img
        src={`src/assets/${image}`}
        className="w-10 h-5 object-cover text-center"
        style={{ height: "70%", width: "100%" }}
        alt={heading}
      />
      <h2 className="text-xl font-bold text-gray-800 text-left gap-5 line-clamp-5">
        {heading}
      </h2>
    </div>
  );
};

export default ServicesCard;
