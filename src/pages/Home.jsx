import React from "react";
import { Categories } from "../Components/Categories";
import { Sort } from "../Components/Sort";
import PizzaBlock from "../Components/PizzaBlock";
import { Skeleton } from "../Components/PizzaBlock/Skeleton";

const itemsApi = import.meta.env.VITE_ITEMS_API;

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
    order: "desc",
  });

  const fetchWithParams = async (categoryId, sortProperty, order) => {
    const response = await fetch(itemsApi);
    const data = await response.json();

    let items = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));

    if (categoryId > 0) {
      items = items.filter((item) => item.category === categoryId);
    }

    items.sort((a, b) => {
      if (sortProperty === "title") {
        const result = a.title.localeCompare(b.title, "ru");
        return order === "asc" ? result : -result;
      }
      const result = a[sortProperty] - b[sortProperty];
      return order === "asc" ? result : -result;
    });

    return items;
  };

  React.useEffect(() => {
    setIsLoading(true);

    fetchWithParams(categoryId, sortType.sortProperty, sortType.order)
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        setItems([]);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};
