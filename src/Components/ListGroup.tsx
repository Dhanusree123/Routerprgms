// import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;

  //   const handleClick = (event: MouseEvent) => {
  // console.log(event);
  //   };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No items found</p> : null}
      {items.length === 0 && <p>No items found</p>}
      <ul>
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}

        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              selectedIndex = index;
            }}
            //   console.log(item, index);
            //   console.log(e);
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
