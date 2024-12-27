import { useNavigate } from "react-router-dom";
const Furniture = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>WELCOME TO FURNITURE SECTION</h1>
        <p>
          <b>Sofas & Recliners:</b>Comfort meets elegance with Flipkart's wide
          selection of sofas, sectionals, recliners, and sofa sets. From classic
          to contemporary designs, find the perfect seating to complete your
          living room.
        </p>
        <p>
          <b>Beds & Mattresses:</b>Sleep in comfort with our range of wooden
          beds, metal beds, and bunk beds, paired with memory foam mattresses,
          spring mattresses, and more.
        </p>
        <p>
          <b>Dining & Storage:</b>Elevate your dining experience with dining
          tables, chairs, and sideboards. Discover smart storage solutions like
          bookshelves, TV units, and shoe racks to keep your space organized and
          stylish.
        </p>
        <p>
          <b>Office Furniture:</b>Upgrade your workspace with ergonomic office
          chairs, study tables, computer desks, and more. Designed for
          productivity and comfort, these pieces bring functionality to your
          home office.
        </p>
        <button onClick={() => navigate("Furniture", { replace: true })}>
          Go back
        </button>
      </div>
    </>
  );
};
export default Furniture;
