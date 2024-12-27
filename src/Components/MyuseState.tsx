// import { useState } from "react";

type Props = {
  counterFun: () => void;
  label: string;
};

const MyuseState = (props: Props) => {
  return <button onClick={props.counterFun}>{props.label}</button>;
};

export default MyuseState;

// const MyuseState = () => {
//   const [count, setCount] = useState(0);

//   const increase = () => {
//     console.log("Increased by One");
//     setCount((c) => c + 2);
//   };

//   const decrease = () => {
//     console.log("Decreased by One");
//     setCount((c) => c - 1);
//   };

//   return (
//     <>
//       <div>
//         <h1>Main Component</h1>
//         <p>Count : {count}</p>
//         <button onClick={increase}>+1</button>
//         <button onClick={decrease}>-1</button>
//       </div>
//     </>
//   );
// };

// export default MyuseState;
