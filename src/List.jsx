import PropTypes from "prop-types";

function List({ category = "Category", items = [] }) {
  // const fruits = [
  //   { id: 1, name: "apple", calories: 123 },
  //   { id: 2, name: "orange", calories: 12 },
  //   { id: 3, name: "banana", calories: 13 },
  //   { id: 4, name: "coconut", calories: 23 },
  //   { id: 5, name: "pineapple", calories: 2 },
  // ];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); //Alphabetical reverse
  // fruits.sort((a, b) => a.calories - b.calories); //Numeric
  // fruits.sort((a, b) => b.calories - a.calories); //Numeric reverse

  // const lowCalFruits = fruits.filter((fruits) => fruits.calories < 100);
  // const highCalFruits = fruits.filter((fruits) => fruits.calories >= 100);

  const Category = category;
  const itemList = items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{Category}</h3>
      <ul className="list-items">{listItems}</ul>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

export default List;
