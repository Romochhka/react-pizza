import React from "react";

export const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => onActive(i)}
            className={activeIndex === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
