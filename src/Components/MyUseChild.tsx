// type ChildProps = {
//   count: number;
// };

import { useState } from "react";
const MyUseChild = () => {
  const [value, setValue] = useState(10);

  const multiplybyten = () => {
    console.log("Multiplication is done");
    setValue((v) => v * 10);
  };

  const dividebyten = () => {
    console.log("Divided by 10");
    setValue((v) => v / 10);
  };
  return (
    <>
      <h1>My Child Component</h1>
      <p>Value: {value}</p>

      <button onClick={multiplybyten}>()X10</button>
      <button onClick={dividebyten}>()/10</button>
    </>
  );
};

export default MyUseChild;
