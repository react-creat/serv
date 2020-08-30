import React from 'react';

function Categories({ items, onClickItem }) {
  const [item, setActiveItem] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {items.map((name, index) => (
          <li
            className={item === index ? 'active' : ''}
            onClick={() => setActiveItem(index)}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
