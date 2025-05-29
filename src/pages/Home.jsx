import React from "react";
import { Categories } from "../Components/Categories";
import { Sort } from "../Components/Sort";
import PizzaBlock from "../Components/PizzaBlock";
import { Skeleton } from "../Components/PizzaBlock/Skeleton";

const itemsApi = import.meta.env.VITE_ITEMS_API;

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(itemsApi)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(6)].map((_, index) => <Skeleton />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};
