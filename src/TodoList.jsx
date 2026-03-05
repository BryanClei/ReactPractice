import { useState } from "react";

export const TodoList = () => {
  const [items, setItem] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Build an App", done: false },
  ]);
  console.log("Rendering with items: ", items);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      text: "Deploy to production",
      done: false,
    };

    // setItem([...items, newItem]);
    setItem(items.concat(newItem));
  };

  const removeItem = (id) => {
    setItem(items.filter((item) => item.id !== id));
  };

  const toggleDone = (id) => {
    setItem(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      }),
    );
  };

  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <span
                style={{ textDecoration: item.done ? "line-through" : "none" }}
              >
                {item.text}
              </span>
              <button onClick={() => toggleDone(item.id)}>
                {item.done ? "Undo" : "Done"}
              </button>
              <button onClick={() => removeItem(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <button onClick={addItem}>Add item</button>
    </div>
  );
};

// import { useState } from "react";
// import "./TodoList.css";

// const Todo = ({ index, id, createdAt }) => {
//   return (
//     <div className="todo-item">
//       <div className="todo-cell">{index}</div>
//       <div className="todo-cell">{id}</div>
//       <div className="todo-cell">
//         <input className="todo-input" placeholder="Enter item..." />
//       </div>
//       <div className="todo-cell">{createdAt.toLocaleTimeString()}</div>
//     </div>
//   );
// };

// export const TodoList = () => {
//   const date = new Date();
//   const [todoCounter, setTodoCounter] = useState(1);
//   const [list, setList] = useState([
//     {
//       id: 1,
//       createdAt: date,
//     },
//   ]);

//   const sortByEarliest = () => {
//     const sortedList = [...list].sort((a, b) => {
//       return a.createdAt - b.createdAt;
//     });
//     setList(sortedList);
//   };

//   const sortByLatest = () => {
//     const sortedList = [...list].sort((a, b) => {
//       return b.createdAt - a.createdAt;
//     });
//     setList(sortedList);
//   };

//   const addToEnd = () => {
//     const date = new Date();
//     const nextId = todoCounter + 1;
//     const newList = [...list, { id: nextId, createdAt: date }];
//     setList(newList);
//     setTodoCounter(nextId);
//   };

//   const addToStart = () => {
//     const date = new Date();
//     const nextId = todoCounter + 1;
//     const newList = [{ id: nextId, createdAt: date }, ...list];
//     setList(newList);
//     setTodoCounter(nextId);
//   };

//   return (
//     <div className="todo-container">
//       <div className="todo-header">
//         <div className="todo-buttons">
//           <button onClick={addToStart} className="todo-btn">
//             Add New to Start
//           </button>
//           <button onClick={addToEnd} className="todo-btn">
//             Add New to End
//           </button>
//           <button onClick={sortByEarliest} className="todo-btn">
//             Sort by Earliest
//           </button>
//           <button onClick={sortByLatest} className="todo-btn">
//             Sort by Latest
//           </button>
//         </div>
//       </div>
//       <div className="todo-list">
//         <div className="todo-header-row">
//           <div className="todo-cell">Index</div>
//           <div className="todo-cell">ID</div>
//           <div className="todo-cell">Item</div>
//           <div className="todo-cell">Created at</div>
//         </div>
//         {list.map((todo, index) => (
//           <Todo key={index} index={index} {...todo} />
//         ))}
//       </div>
//     </div>
//   );
// };
