import React from 'react';
import Categories from '../components/categories/Categories';
import Filter from '../components/Filter/filter';
import PizzaBlock from '../components/pizza-block/pizzaBlock';
import { useSelector } from 'react-redux';

function Home() {
  const { items, load } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
      load: pizzas.isLoad,
    };
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <Filter items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {load && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
