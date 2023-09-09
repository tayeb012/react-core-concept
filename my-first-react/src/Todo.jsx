// export default function Todo({Task}) {
//   Task = "Amr ghum aiche";
//   return (
//     <>
//       {/* <li>Task</li> */}
//       <li>Task: {Task}</li>
//     </>
//   );
// }

// conditional rendering
// export default function Todo({ Task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {Task}</li>;
//   }
//   return <li>Work on: {Task}</li>;

// }
// conditional rendering (ternary operator)
// export default function Todo({ Task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished" : "Work on"} : {Task}
//     </li>
//   );
// }

// conditional rendering (&&)
// export default function Todo({ Task, isDone }) {
//   return (
//     <li>
//       Task: {Task} {isDone && ": Done"}
//     </li>
//   );
// }

// conditional rendering (||)
export default function Todo({ Task, isDone }) {
  return (
    <li>
      Task: {Task} {isDone || ": Shes hoi nai"}
    </li>
  );
}
