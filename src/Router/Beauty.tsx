import { useNavigate } from "react-router-dom";
const Beauty = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>WELCOME TO BEAUTY SECTION</h1>
        <h3>LIST OF ITEMS:</h3>
        <p>
          <b>Face Care:</b> Cleansers, toners, moisturizers, serums, face masks,
          exfoliators.
        </p>
        <p>
          <b>Sun Protection:</b> Sunscreens, sunblocks, SPF moisturizers.
        </p>
        <p>
          <b>Face Makeup:</b> Foundations, concealers, compact powders, blushes,
          highlighters, bronzers.
        </p>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};
export default Beauty;
