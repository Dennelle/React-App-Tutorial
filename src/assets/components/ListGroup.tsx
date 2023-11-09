function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {/* ====== using a tienary statement instead of an if else statement to return if no items are on the list ====== */}
      {items.length === 0 ? <p>No Items Found</p> : null}
      <ul className="list-group">
        {/* ======= using the .map on items to make each item in the array display as a list ========= */}
        {items.map((item) => (
          // ===== You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array: this is useful for objects in an array==========
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.
