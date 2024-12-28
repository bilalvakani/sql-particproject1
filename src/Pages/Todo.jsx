// // // // // import React, { useState, useEffect } from "react";

// // // // // function Todo() {
// // // // //   const [todos, setTodos] = useState([]);
// // // // //   const [newTodo, setNewTodo] = useState("");
// // // // //   const userId = localStorage.getItem("userId");

// // // // //   const fetchTodos = async () => {
// // // // //     const response = await fetch(`http://localhost:5000/todos/${userId}`);
// // // // //     const data = await response.json();
// // // // //     setTodos(data);
// // // // //   };

// // // // //   const addTodo = async () => {
// // // // //     const response = await fetch("http://localhost:5000/todos", {
// // // // //       method: "POST",
// // // // //       headers: { "Content-Type": "application/json" },
// // // // //       body: JSON.stringify({ userId, text: newTodo }),
// // // // //     });

// // // // //     if (response.ok) {
// // // // //       fetchTodos();
// // // // //       setNewTodo("");
// // // // //     } else {
// // // // //       alert("Error adding todo!");
// // // // //     }
// // // // //   };

// // // // //   const toggleTodo = async (id, completed) => {
// // // // //     const response = await fetch(`http://localhost:5000/todos/${id}`, {
// // // // //       method: "PUT",
// // // // //       headers: { "Content-Type": "application/json" },
// // // // //       body: JSON.stringify({ completed: !completed }),
// // // // //     });

// // // // //     if (response.ok) fetchTodos();
// // // // //   };

// // // // //   const deleteTodo = async (id) => {
// // // // //     const response = await fetch(`http://localhost:5000/todos/${id}`, {
// // // // //       method: "DELETE",
// // // // //     });

// // // // //     if (response.ok) fetchTodos();
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchTodos();
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
// // // // //       <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
// // // // //         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
// // // // //           Your Todos
// // // // //         </h2>
// // // // //         <div className="flex items-center mb-4 space-x-4">
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Add a new todo"
// // // // //             value={newTodo}
// // // // //             onChange={(e) => setNewTodo(e.target.value)}
// // // // //             className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // // //           />
// // // // //           <button
// // // // //             onClick={addTodo}
// // // // //             className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // // //           >
// // // // //             Add
// // // // //           </button>
// // // // //         </div>
// // // // //         <ul className="space-y-4">
// // // // //           {todos.map((todo) => (
// // // // //             <li
// // // // //               key={todo.id}
// // // // //               className="flex items-center justify-between p-4 bg-gray-100 rounded shadow"
// // // // //             >
// // // // //               <div className="flex items-center space-x-4">
// // // // //                 <input
// // // // //                   type="checkbox"
// // // // //                   checked={todo.completed}
// // // // //                   onChange={() => toggleTodo(todo.id, todo.completed)}
// // // // //                   className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
// // // // //                 />
// // // // //                 <span
// // // // //                   className={`text-gray-700 ${
// // // // //                     todo.completed ? "line-through text-gray-500" : ""
// // // // //                   }`}
// // // // //                 >
// // // // //                   {todo.text}
// // // // //                 </span>
// // // // //               </div>
// // // // //               <button
// // // // //                 onClick={() => deleteTodo(todo.id)}
// // // // //                 className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //               >
// // // // //                 Delete
// // // // //               </button>
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Todo;
// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // function Todo() {
// // // // //   const [todos, setTodos] = useState([]);
// // // // //   const [newTodo, setNewTodo] = useState("");
// // // // //   const [editingTodoId, setEditingTodoId] = useState(null);
// // // // //   const [editingText, setEditingText] = useState("");
// // // // //   const userId = localStorage.getItem("userId");
// // // // //   const navigate = useNavigate();

// // // // //   const fetchTodos = async () => {
// // // // //     const response = await fetch(`http://localhost:5000/todos/${userId}`);
// // // // //     const data = await response.json();
// // // // //     setTodos(data);
// // // // //   };

// // // // //   const addTodo = async () => {
// // // // //     const response = await fetch("http://localhost:5000/todos", {
// // // // //       method: "POST",
// // // // //       headers: { "Content-Type": "application/json" },
// // // // //       body: JSON.stringify({ userId, text: newTodo }),
// // // // //     });

// // // // //     if (response.ok) {
// // // // //       fetchTodos();
// // // // //       setNewTodo("");
// // // // //     } else {
// // // // //       alert("Error adding todo!");
// // // // //     }
// // // // //   };

// // // // //   const editTodo = async (id, newText) => {
// // // // //     const response = await fetch(`http://localhost:5000/todos/${id}`, {
// // // // //       method: "PUT",
// // // // //       headers: { "Content-Type": "application/json" },
// // // // //       body: JSON.stringify({ text: newText }),
// // // // //     });

// // // // //     if (response.ok) {
// // // // //       setEditingTodoId(null);
// // // // //       setEditingText("");
// // // // //       fetchTodos();
// // // // //     }
// // // // //   };

// // // // //   const toggleTodo = async (id, completed) => {
// // // // //     const response = await fetch(`http://localhost:5000/todos/${id}`, {
// // // // //       method: "PUT",
// // // // //       headers: { "Content-Type": "application/json" },
// // // // //       body: JSON.stringify({ completed: !completed }),
// // // // //     });

// // // // //     if (response.ok) fetchTodos();
// // // // //   };

// // // // //   const deleteTodo = async (id) => {
// // // // //     const response = await fetch(`http://localhost:5000/todos/${id}`, {
// // // // //       method: "DELETE",
// // // // //     });

// // // // //     if (response.ok) fetchTodos();
// // // // //   };

// // // // //   const logout = () => {
// // // // //     localStorage.removeItem("userId");
// // // // //     navigate("/login");
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchTodos();
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
// // // // //       <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
// // // // //         <div className="flex justify-between items-center mb-6">
// // // // //           <h2 className="text-2xl font-bold text-gray-700">Your Todos</h2>
// // // // //           <button
// // // // //             onClick={logout}
// // // // //             className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //           >
// // // // //             Logout
// // // // //           </button>
// // // // //         </div>
// // // // //         <div className="flex items-center mb-4 space-x-4">
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Add a new todo"
// // // // //             value={newTodo}
// // // // //             onChange={(e) => setNewTodo(e.target.value)}
// // // // //             className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // // //           />
// // // // //           <button
// // // // //             onClick={addTodo}
// // // // //             className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // // //           >
// // // // //             Add
// // // // //           </button>
// // // // //         </div>
// // // // //         <ul className="space-y-4">
// // // // //           {todos.map((todo) => (
// // // // //             <li
// // // // //               key={todo.id}
// // // // //               className="flex items-center justify-between p-4 bg-gray-100 rounded shadow"
// // // // //             >
// // // // //               <div className="flex items-center space-x-4">
// // // // //                 <input
// // // // //                   type="checkbox"
// // // // //                   checked={todo.completed}
// // // // //                   onChange={() => toggleTodo(todo.id, todo.completed)}
// // // // //                   className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
// // // // //                 />
// // // // //                 {editingTodoId === todo.id ? (
// // // // //                   <input
// // // // //                     type="text"
// // // // //                     value={editingText}
// // // // //                     onChange={(e) => setEditingText(e.target.value)}
// // // // //                     className="px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // // //                   />
// // // // //                 ) : (
// // // // //                   <span
// // // // //                     className={`text-gray-700 ${
// // // // //                       todo.completed ? "line-through text-gray-500" : ""
// // // // //                     }`}
// // // // //                   >
// // // // //                     {todo.text}
// // // // //                   </span>
// // // // //                 )}
// // // // //               </div>
// // // // //               <div className="flex items-center space-x-2">
// // // // //                 {editingTodoId === todo.id ? (
// // // // //                   <button
// // // // //                     onClick={() => editTodo(todo.id, editingText)}
// // // // //                     className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
// // // // //                   >
// // // // //                     Save
// // // // //                   </button>
// // // // //                 ) : (
// // // // //                   <button
// // // // //                     onClick={() => {
// // // // //                       setEditingTodoId(todo.id);
// // // // //                       setEditingText(todo.text);
// // // // //                     }}
// // // // //                     className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // //                   >
// // // // //                     Edit
// // // // //                   </button>
// // // // //                 )}
// // // // //                 <button
// // // // //                   onClick={() => deleteTodo(todo.id)}
// // // // //                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //                 >
// // // // //                   Delete
// // // // //                 </button>
// // // // //               </div>
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Todo;
// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // function Todo() {
// // // // //   const [todos, setTodos] = useState([]);
// // // // //   const [newTodo, setNewTodo] = useState("");
// // // // //   const [editingTodoId, setEditingTodoId] = useState(null);
// // // // //   const [editingText, setEditingText] = useState("");
// // // // //   const [showDialog, setShowDialog] = useState(false);
// // // // //   const [dialogAction, setDialogAction] = useState(null);
// // // // //   const [selectedTodoId, setSelectedTodoId] = useState(null);
// // // // //   const userId = localStorage.getItem("userId");
// // // // //   const navigate = useNavigate();

// // // // //   const fetchTodos = async () => {
// // // // //     const response = await fetch(`http://localhost:5000/todos/${userId}`);
// // // // //     const data = await response.json();
// // // // //     setTodos(data);
// // // // //   };

// // // // //   const addTodo = async () => {
// // // // //     const response = await fetch("http://localhost:5000/todos", {
// // // // //       method: "POST",
// // // // //       headers: { "Content-Type": "application/json" },
// // // // //       body: JSON.stringify({ userId, text: newTodo }),
// // // // //     });

// // // // //     if (response.ok) {
// // // // //       fetchTodos();
// // // // //       setNewTodo("");
// // // // //     } else {
// // // // //       alert("Error adding todo!");
// // // // //     }
// // // // //   };

// // // // //   const editTodo = async (id, newText) => {
// // // // //     const response = await fetch(`http://localhost:5000/todos/${id}`, {
// // // // //       method: "PUT",
// // // // //       headers: { "Content-Type": "application/json" },
// // // // //       body: JSON.stringify({ text: newText }),
// // // // //     });

// // // // //     if (response.ok) {
// // // // //       setEditingTodoId(null);
// // // // //       setEditingText("");
// // // // //       fetchTodos();
// // // // //     }
// // // // //   };

// // // // //   const toggleTodo = async (id, completed) => {
// // // // //     const response = await fetch(`http://localhost:5000/todos/${id}`, {
// // // // //       method: "PUT",
// // // // //       headers: { "Content-Type": "application/json" },
// // // // //       body: JSON.stringify({ completed: !completed }),
// // // // //     });

// // // // //     if (response.ok) fetchTodos();
// // // // //   };

// // // // //   const confirmDeleteTodo = async (id) => {
// // // // //     const response = await fetch(`http://localhost:5000/todos/${id}`, {
// // // // //       method: "DELETE",
// // // // //     });

// // // // //     if (response.ok) {
// // // // //       fetchTodos();
// // // // //       setShowDialog(false);
// // // // //     }
// // // // //   };

// // // // //   const confirmLogout = () => {
// // // // //     localStorage.removeItem("userId");
// // // // //     navigate("/login");
// // // // //   };

// // // // //   const showDeleteDialog = (id) => {
// // // // //     setDialogAction("delete");
// // // // //     setSelectedTodoId(id);
// // // // //     setShowDialog(true);
// // // // //   };

// // // // //   const showLogoutDialog = () => {
// // // // //     setDialogAction("logout");
// // // // //     setShowDialog(true);
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchTodos();
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
// // // // //       <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
// // // // //         <div className="flex justify-between items-center mb-6">
// // // // //           <h2 className="text-2xl font-bold text-gray-700">Your Todos</h2>
// // // // //           <button
// // // // //             onClick={showLogoutDialog}
// // // // //             className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //           >
// // // // //             Logout
// // // // //           </button>
// // // // //         </div>
// // // // //         <div className="flex items-center mb-4 space-x-4">
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Add a new todo"
// // // // //             value={newTodo}
// // // // //             onChange={(e) => setNewTodo(e.target.value)}
// // // // //             className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // // //           />
// // // // //           <button
// // // // //             onClick={addTodo}
// // // // //             className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // // //           >
// // // // //             Add
// // // // //           </button>
// // // // //         </div>
// // // // //         <ul className="space-y-4">
// // // // //           {todos.map((todo) => (
// // // // //             <li
// // // // //               key={todo.id}
// // // // //               className="flex items-center justify-between p-4 bg-gray-100 rounded shadow"
// // // // //             >
// // // // //               <div className="flex items-center space-x-4">
// // // // //                 <input
// // // // //                   type="checkbox"
// // // // //                   checked={todo.completed}
// // // // //                   onChange={() => toggleTodo(todo.id, todo.completed)}
// // // // //                   className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
// // // // //                 />
// // // // //                 {editingTodoId === todo.id ? (
// // // // //                   <input
// // // // //                     type="text"
// // // // //                     value={editingText}
// // // // //                     onChange={(e) => setEditingText(e.target.value)}
// // // // //                     className="px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // // //                   />
// // // // //                 ) : (
// // // // //                   <span
// // // // //                     className={`text-gray-700 ${
// // // // //                       todo.completed ? "line-through text-gray-500" : ""
// // // // //                     }`}
// // // // //                   >
// // // // //                     {todo.text}
// // // // //                   </span>
// // // // //                 )}
// // // // //               </div>
// // // // //               <div className="flex items-center space-x-2">
// // // // //                 {editingTodoId === todo.id ? (
// // // // //                   <button
// // // // //                     onClick={() => editTodo(todo.id, editingText)}
// // // // //                     className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
// // // // //                   >
// // // // //                     Save
// // // // //                   </button>
// // // // //                 ) : (
// // // // //                   <button
// // // // //                     onClick={() => {
// // // // //                       setEditingTodoId(todo.id);
// // // // //                       setEditingText(todo.text);
// // // // //                     }}
// // // // //                     className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // //                   >
// // // // //                     Edit
// // // // //                   </button>
// // // // //                 )}
// // // // //                 <button
// // // // //                   onClick={() => showDeleteDialog(todo.id)}
// // // // //                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //                 >
// // // // //                   Delete
// // // // //                 </button>
// // // // //               </div>
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>

// // // // //       {/* Confirmation Dialog */}
// // // // //       {showDialog && (
// // // // //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
// // // // //           <div className="p-6 bg-white rounded-lg shadow-lg">
// // // // //             <p className="mb-4 text-lg font-semibold text-gray-700">
// // // // //               {dialogAction === "delete"
// // // // //                 ? "Are you sure you want to delete this todo?"
// // // // //                 : "Are you sure you want to logout?"}
// // // // //             </p>
// // // // //             <div className="flex justify-end space-x-4">
// // // // //               <button
// // // // //                 onClick={() => setShowDialog(false)}
// // // // //                 className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
// // // // //               >
// // // // //                 No
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={() => {
// // // // //                   if (dialogAction === "delete") {
// // // // //                     confirmDeleteTodo(selectedTodoId);
// // // // //                   } else if (dialogAction === "logout") {
// // // // //                     confirmLogout();
// // // // //                   }
// // // // //                 }}
// // // // //                 className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
// // // // //               >
// // // // //                 Confirm
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Todo;

// // // // import React, { useState, useEffect } from "react";
// // // // import { useNavigate } from "react-router-dom";

// // // // function Todo() {
// // // //   const [todos, setTodos] = useState([]);
// // // //   const [newTodo, setNewTodo] = useState("");
// // // //   const [editingTodoId, setEditingTodoId] = useState(null);
// // // //   const [editingText, setEditingText] = useState("");
// // // //   const [showDialog, setShowDialog] = useState(false);
// // // //   const [dialogAction, setDialogAction] = useState(null);
// // // //   const [selectedTodoId, setSelectedTodoId] = useState(null);
// // // //   const [userEmail, setUserEmail] = useState("");
// // // //   const userId = localStorage.getItem("userId");
// // // //   const navigate = useNavigate();

// // // //   const fetchTodos = async () => {
// // // //     const response = await fetch(`http://localhost:5000/todos/${userId}`);
// // // //     const data = await response.json();
// // // //     setTodos(data);
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchTodos();
// // // //     const email = localStorage.getItem("userEmail");
// // // //     if (email) {
// // // //       setUserEmail(email);
// // // //     }
// // // //   }, []);

// // // //   const showLogoutDialog = () => {
// // // //     setDialogAction("logout");
// // // //     setShowDialog(true);
// // // //   };

// // // //   const confirmLogout = () => {
// // // //     // Clear localStorage and navigate to the login page
// // // //     localStorage.removeItem("userId");
// // // //     localStorage.removeItem("userEmail");
// // // //     setShowDialog(false);
// // // //     navigate("/login");
// // // //   };

// // // //   const showDeleteDialog = (todoId) => {
// // // //     setDialogAction("delete");
// // // //     setSelectedTodoId(todoId);
// // // //     setShowDialog(true);
// // // //   };

// // // //   const confirmDeleteTodo = async (todoId) => {
// // // //     await fetch(`http://localhost:5000/todos/${todoId}`, {
// // // //       method: "DELETE",
// // // //     });
// // // //     setTodos(todos.filter((todo) => todo.id !== todoId));
// // // //     setShowDialog(false);
// // // //   };

// // // //   return (
// // // //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
// // // //       <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
// // // //         <div className="mb-4 text-black -600 text-3xl ">
// // // //           Hello <span className="font-semibold">{userEmail}</span>
// // // //         </div>
// // // //         <div className="flex justify-between items-center mb-6">
// // // //           <h2 className="text-2xl font-bold text-gray-700">Your Todos</h2>
// // // //           <button
// // // //             onClick={showLogoutDialog}
// // // //             className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
// // // //           >
// // // //             Logout
// // // //           </button>
// // // //         </div>
// // // //         <div className="flex items-center mb-4 space-x-4">
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Add a new todo"
// // // //             value={newTodo}
// // // //             onChange={(e) => setNewTodo(e.target.value)}
// // // //             className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // //           />
// // // //           <button
// // // //             onClick={() => {/* Add your addTodo logic here */}}
// // // //             className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // //           >
// // // //             Add
// // // //           </button>
// // // //         </div>
// // // //         <ul className="space-y-4">
// // // //           {todos.map((todo) => (
// // // //             <li
// // // //               key={todo.id}
// // // //               className="flex items-center justify-between p-4 bg-gray-100 rounded shadow"
// // // //             >
// // // //               <div className="flex items-center space-x-4">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   checked={todo.completed}
// // // //                   onChange={() => {/* Add your toggleTodo logic here */}}
// // // //                   className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
// // // //                 />
// // // //                 {editingTodoId === todo.id ? (
// // // //                   <input
// // // //                     type="text"
// // // //                     value={editingText}
// // // //                     onChange={(e) => setEditingText(e.target.value)}
// // // //                     className="px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // //                   />
// // // //                 ) : (
// // // //                   <span
// // // //                     className={`text-gray-700 ${
// // // //                       todo.completed ? "line-through text-gray-500" : ""
// // // //                     }`}
// // // //                   >
// // // //                     {todo.text}
// // // //                   </span>
// // // //                 )}
// // // //               </div>
// // // //               <div className="flex items-center space-x-2">
// // // //                 {editingTodoId === todo.id ? (
// // // //                   <button
// // // //                     onClick={() => {/* Add your editTodo logic here */}}
// // // //                     className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
// // // //                   >
// // // //                     Save
// // // //                   </button>
// // // //                 ) : (
// // // //                   <button
// // // //                     onClick={() => {
// // // //                       setEditingTodoId(todo.id);
// // // //                       setEditingText(todo.text);
// // // //                     }}
// // // //                     className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //                   >
// // // //                     Edit
// // // //                   </button>
// // // //                 )}
// // // //                 <button
// // // //                   onClick={() => showDeleteDialog(todo.id)}
// // // //                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
// // // //                 >
// // // //                   Delete
// // // //                 </button>
// // // //               </div>
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>

// // // //       {showDialog && (
// // // //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
// // // //           <div className="p-6 bg-white rounded-lg shadow-lg">
// // // //             <p className="mb-4 text-lg font-semibold text-gray-700">
// // // //               {dialogAction === "delete"
// // // //                 ? "Are you sure you want to delete this todo?"
// // // //                 : "Are you sure you want to logout?"}
// // // //             </p>
// // // //             <div className="flex justify-end space-x-4">
// // // //               <button
// // // //                 onClick={() => setShowDialog(false)}
// // // //                 className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
// // // //               >
// // // //                 No
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => {
// // // //                   if (dialogAction === "delete") {
// // // //                     confirmDeleteTodo(selectedTodoId);
// // // //                   } else if (dialogAction === "logout") {
// // // //                     confirmLogout();
// // // //                   }
// // // //                 }}
// // // //                 className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
// // // //               >
// // // //                 Confirm
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Todo;

// // // // import React, { useState, useEffect } from "react";

// // // // function Todo() {
// // // //   const [todos, setTodos] = useState([]);
// // // //   const [newTodo, setNewTodo] = useState("");
// // // //   const userId = localStorage.getItem("userId");

// // // //   const fetchTodos = async () => {
// // // //     const response = await fetch(`http://localhost:5000/todos/${userId}`);
// // // //     const data = await response.json();
// // // //     setTodos(data);
// // // //   };

// // // //   const addTodo = async () => {
// // // //     const response = await fetch("http://localhost:5000/todos", {
// // // //       method: "POST",
// // // //       headers: { "Content-Type": "application/json" },
// // // //       body: JSON.stringify({ userId, text: newTodo }),
// // // //     });

// // // //     if (response.ok) {
// // // //       fetchTodos();
// // // //       setNewTodo("");
// // // //     } else {
// // // //       alert("Error adding todo!");
// // // //     }
// // // //   };

// // // //   const toggleTodo = async (id, completed) => {
// // // //     const response = await fetch(`http://localhost:5000/todos/${id}`, {
// // // //       method: "PUT",
// // // //       headers: { "Content-Type": "application/json" },
// // // //       body: JSON.stringify({ completed: !completed }),
// // // //     });

// // // //     if (response.ok) fetchTodos();
// // // //   };

// // // //   const deleteTodo = async (id) => {
// // // //     const response = await fetch(`http://localhost:5000/todos/${id}`, {
// // // //       method: "DELETE",
// // // //     });

// // // //     if (response.ok) fetchTodos();
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchTodos();
// // // //   }, []);

// // // //   return (
// // // //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
// // // //       <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
// // // //         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
// // // //           Your Todos
// // // //         </h2>
// // // //         <div className="flex items-center mb-4 space-x-4">
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Add a new todo"
// // // //             value={newTodo}
// // // //             onChange={(e) => setNewTodo(e.target.value)}
// // // //             className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // //           />
// // // //           <button
// // // //             onClick={addTodo}
// // // //             className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
// // // //           >
// // // //             Add
// // // //           </button>
// // // //         </div>
// // // //         <ul className="space-y-4">
// // // //           {todos.map((todo) => (
// // // //             <li
// // // //               key={todo.id}
// // // //               className="flex items-center justify-between p-4 bg-gray-100 rounded shadow"
// // // //             >
// // // //               <div className="flex items-center space-x-4">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   checked={todo.completed}
// // // //                   onChange={() => toggleTodo(todo.id, todo.completed)}
// // // //                   className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
// // // //                 />
// // // //                 <span
// // // //                   className={`text-gray-700 ${
// // // //                     todo.completed ? "line-through text-gray-500" : ""
// // // //                   }`}
// // // //                 >
// // // //                   {todo.text}
// // // //                 </span>
// // // //               </div>
// // // //               <button
// // // //                 onClick={() => deleteTodo(todo.id)}
// // // //                 className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
// // // //               >
// // // //                 Delete
// // // //               </button>
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Todo;

// // // import React, { useState, useEffect } from "react";
// // // import { toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";
// // // import { useNavigate } from "react-router-dom";

// // // function Todo() {
// // //   const [todos, setTodos] = useState([]);
// // //   const [newTodo, setNewTodo] = useState("");
// // //   const [editTodoId, setEditTodoId] = useState(null);
// // //   const [editTodoText, setEditTodoText] = useState("");
// // //   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
// // //   const [showLogoutDialog, setShowLogoutDialog] = useState(false);  // For logout confirmation dialog
// // //   const [todoToDelete, setTodoToDelete] = useState(null);
// // //   const userId = localStorage.getItem("userId");
// // //   const navigate = useNavigate();

// // //   const fetchTodos = async () => {
// // //     const response = await fetch(`http://localhost:5000/todos/${userId}`);
// // //     const data = await response.json();
// // //     setTodos(data);
// // //   };

// // //   const addTodo = async () => {
// // //     if (!newTodo) {
// // //       toast.error("Please enter a todo!");
// // //       return;
// // //     }

// // //     const response = await fetch("http://localhost:5000/todos", {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify({ userId, text: newTodo }),
// // //     });

// // //     if (response.ok) {
// // //       fetchTodos();
// // //       setNewTodo("");
// // //       toast.success("Todo added successfully!");
// // //     } else {
// // //       toast.error("Error adding todo!");
// // //     }
// // //   };

// // //   const editTodo = async () => {
// // //     if (!editTodoText) {
// // //       toast.error("Please enter a valid todo!");
// // //       return;
// // //     }

// // //     const response = await fetch(`http://localhost:5000/todos/${editTodoId}`, {
// // //       method: "PUT",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify({ text: editTodoText }),
// // //     });

// // //     if (response.ok) {
// // //       fetchTodos();
// // //       setEditTodoId(null);
// // //       setEditTodoText("");
// // //       toast.success("Todo updated successfully!");
// // //     } else {
// // //       toast.error("Error updating todo!");
// // //     }
// // //   };

// // //   const toggleTodo = async (id, completed) => {
// // //     const response = await fetch(`http://localhost:5000/todos/${id}`, {
// // //       method: "PUT",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify({ completed: !completed }),
// // //     });

// // //     if (response.ok) fetchTodos();
// // //   };

// // //   const deleteTodo = async () => {
// // //     const response = await fetch(`http://localhost:5000/todos/${todoToDelete}`, {
// // //       method: "DELETE",
// // //     });

// // //     if (response.ok) {
// // //       fetchTodos();
// // //       setShowDeleteDialog(false);
// // //       setTodoToDelete(null);
// // //       toast.success("Todo deleted successfully!");
// // //     } else {
// // //       toast.error("Error deleting todo!");
// // //     }
// // //   };

// // //   const logout = () => {
// // //     localStorage.removeItem("userId");
// // //     localStorage.removeItem("userEmail");
// // //     navigate("/login");
// // //     toast.success("Logged out successfully!");
// // //   };

// // //   const openEditDialog = (todo) => {
// // //     setEditTodoId(todo.id);
// // //     setEditTodoText(todo.text);
// // //     setShowDeleteDialog(false); // Close the delete dialog if it's open
// // //   };

// // //   const openLogoutDialog = () => {
// // //     setShowLogoutDialog(true);
// // //   };

// // //   useEffect(() => {
// // //     if (userId) {
// // //       fetchTodos();
// // //     } else {
// // //       navigate("/login");
// // //     }
// // //   }, [userId, navigate]);

// // //   return (
// // //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
// // //       <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
// // //         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Your Todos</h2>

// // //         {/* Add Todo */}
// // //         <div className="flex items-center mb-4 space-x-4">
// // //           <input
// // //             type="text"
// // //             placeholder="Add a new todo"
// // //             value={newTodo}
// // //             onChange={(e) => setNewTodo(e.target.value)}
// // //             className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
// // //           />
// // //           <button
// // //             onClick={addTodo}
// // //             className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
// // //           >
// // //             Add
// // //           </button>
// // //         </div>

// // //         {/* Todo List */}
// // //         <ul className="space-y-4">
// // //           {todos.map((todo) => (
// // //             <li key={todo.id} className="flex items-center justify-between p-4 bg-gray-100 rounded shadow">
// // //               <div className="flex items-center space-x-4">
// // //                 <input
// // //                   type="checkbox"
// // //                   checked={todo.completed}
// // //                   onChange={() => toggleTodo(todo.id, todo.completed)}
// // //                   className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
// // //                 />
// // //                 <span className={`text-gray-700 ${todo.completed ? "line-through text-gray-500" : ""}`}>
// // //                   {todo.text}
// // //                 </span>
// // //               </div>

// // //               <div className="flex space-x-2">
// // //                 <button
// // //                   onClick={() => openEditDialog(todo)}
// // //                   className="px-4 py-2 text-white bg-yellow-600 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
// // //                 >
// // //                   Edit
// // //                 </button>
// // //                 <button
// // //                   onClick={() => {
// // //                     setTodoToDelete(todo.id);
// // //                     setShowDeleteDialog(true);
// // //                   }}
// // //                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
// // //                 >
// // //                   Delete
// // //                 </button>
// // //               </div>
// // //             </li>
// // //           ))}
// // //         </ul>

// // //         {/* Edit Todo Dialog */}
// // //         {editTodoId && (
// // //           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// // //             <div className="bg-white p-6 rounded shadow-lg">
// // //               <h3 className="text-lg font-bold text-gray-700">Edit Todo</h3>
// // //               <div className="mt-4">
// // //                 <input
// // //                   type="text"
// // //                   value={editTodoText}
// // //                   onChange={(e) => setEditTodoText(e.target.value)}
// // //                   className="px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
// // //                 />
// // //                 <button
// // //                   onClick={editTodo}
// // //                   className="ml-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //                 >
// // //                   Save
// // //                 </button>
// // //                 <button
// // //                   onClick={() => setEditTodoId(null)} // Close the dialog
// // //                   className="ml-2 px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
// // //                 >
// // //                   Cancel
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Delete Confirmation Dialog */}
// // //         {showDeleteDialog && (
// // //           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// // //             <div className="bg-white p-6 rounded shadow-lg">
// // //               <h3 className="text-lg font-bold text-gray-700">Are you sure you want to delete this todo?</h3>
// // //               <div className="mt-4 flex space-x-4">
// // //                 <button
// // //                   onClick={() => setShowDeleteDialog(false)}
// // //                   className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
// // //                 >
// // //                   No
// // //                 </button>
// // //                 <button
// // //                   onClick={deleteTodo}
// // //                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
// // //                 >
// // //                   Yes
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Logout Confirmation Dialog */}
// // //         {showLogoutDialog && (
// // //           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// // //             <div className="bg-white p-6 rounded shadow-lg">
// // //               <h3 className="text-lg font-bold text-gray-700">Are you sure you want to logout?</h3>
// // //               <div className="mt-4 flex space-x-4">
// // //                 <button
// // //                   onClick={() => setShowLogoutDialog(false)}
// // //                   className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
// // //                 >
// // //                   No
// // //                 </button>
// // //                 <button
// // //                   onClick={logout}
// // //                   className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
// // //                 >
// // //                   Yes
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Logout Button */}
// // //         <button
// // //           onClick={openLogoutDialog}
// // //           className="mt-4 px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
// // //         >
// // //           Logout
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Todo;




// // import React, { useState, useEffect } from "react";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import { useNavigate } from "react-router-dom";

// // function Todo() {
// //   const [todos, setTodos] = useState([]);
// //   const [newTodo, setNewTodo] = useState("");
// //   const [editTodoId, setEditTodoId] = useState(null);
// //   const [editTodoText, setEditTodoText] = useState("");
// //   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
// //   const [showLogoutDialog, setShowLogoutDialog] = useState(false);  // For logout confirmation dialog
// //   const [todoToDelete, setTodoToDelete] = useState(null);
// //   const userId = localStorage.getItem("userId");
// //   const userEmail = localStorage.getItem("userEmail"); // Retrieve the email
// //   const navigate = useNavigate();

// //   const fetchTodos = async () => {
// //     const response = await fetch(`http://localhost:5000/todos/${userId}`);
// //     const data = await response.json();
// //     setTodos(data);
// //   };

// //   const addTodo = async () => {
// //     if (!newTodo) {
// //       toast.error("Please enter a todo!");
// //       return;
// //     }
// //     const speakGreeting = (email) => {
// //         const message = new SpeechSynthesisUtterance(`Hello ${email}`);
// //         message.lang = 'en-US';  // Set the language to English (US)
// //         window.speechSynthesis.speak(message);
// //       };

// //     const response = await fetch("http://localhost:5000/todos", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ userId, text: newTodo }),
// //     });

// //     if (response.ok) {
// //       fetchTodos();
// //       setNewTodo("");
// //       toast.success("Todo added successfully!");
// //     } else {
// //       toast.error("Error adding todo!");
// //     }
// //   };

// //   const editTodo = async () => {
// //     if (!editTodoText) {
// //       toast.error("Please enter a valid todo!");
// //       return;
// //     }

// //     const response = await fetch(`http://localhost:5000/todos/${editTodoId}`, {
// //       method: "PUT",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ text: editTodoText }),
// //     });

// //     if (response.ok) {
// //       fetchTodos();
// //       setEditTodoId(null);
// //       setEditTodoText("");
// //       toast.success("Todo updated successfully!");
// //     } else {
// //       toast.error("Error updating todo!");
// //     }
// //   };

// //   const toggleTodo = async (id, completed) => {
// //     const response = await fetch(`http://localhost:5000/todos/${id}`, {
// //       method: "PUT",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ completed: !completed }),
// //     });

// //     if (response.ok) fetchTodos();
// //   };

// //   const deleteTodo = async () => {
// //     const response = await fetch(`http://localhost:5000/todos/${todoToDelete}`, {
// //       method: "DELETE",
// //     });

// //     if (response.ok) {
// //       fetchTodos();
// //       setShowDeleteDialog(false);
// //       setTodoToDelete(null);
// //       toast.success("Todo deleted successfully!");
// //     } else {
// //       toast.error("Error deleting todo!");
// //     }
// //   };

// //   const logout = () => {
// //     localStorage.removeItem("userId");
// //     localStorage.removeItem("userEmail");
// //     navigate("/login");
// //     toast.success("Logged out successfully!");
// //   };

// //   const openEditDialog = (todo) => {
// //     setEditTodoId(todo.id);
// //     setEditTodoText(todo.text);
// //     setShowDeleteDialog(false); // Close the delete dialog if it's open
// //   };

// //   const openLogoutDialog = () => {
// //     setShowLogoutDialog(true);
// //   };

// //   useEffect(() => {
// //     if (userId) {
// //       fetchTodos();
// //     } else {
// //       navigate("/login");
// //     }
// //   }, [userId, navigate]);

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
// //       <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
// //         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Your Todos</h2>

// //         {/* Display logged-in user's email */}
// //         <div className="text-center mb-6 text-gray-600">
// //           <p>Welcome, {userEmail}</p>
// //         </div>

// //         {/* Add Todo */}
// //         <div className="flex items-center mb-4 space-x-4">
// //           <input
// //             type="text"
// //             placeholder="Add a new todo"
// //             value={newTodo}
// //             onChange={(e) => setNewTodo(e.target.value)}
// //             className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
// //           />
// //           <button
// //             onClick={addTodo}
// //             className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
// //           >
// //             Add
// //           </button>
// //         </div>

// //         {/* Todo List */}
// //         <ul className="space-y-4">
// //           {todos.map((todo) => (
// //             <li key={todo.id} className="flex items-center justify-between p-4 bg-gray-100 rounded shadow">
// //               <div className="flex items-center space-x-4">
// //                 <input
// //                   type="checkbox"
// //                   checked={todo.completed}
// //                   onChange={() => toggleTodo(todo.id, todo.completed)}
// //                   className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
// //                 />
// //                 <span className={`text-gray-700 ${todo.completed ? "line-through text-gray-500" : ""}`}>
// //                   {todo.text}
// //                 </span>
// //               </div>

// //               <div className="flex space-x-2">
// //                 <button
// //                   onClick={() => openEditDialog(todo)}
// //                   className="px-4 py-2 text-white bg-yellow-600 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
// //                 >
// //                   Edit
// //                 </button>
// //                 <button
// //                   onClick={() => {
// //                     setTodoToDelete(todo.id);
// //                     setShowDeleteDialog(true);
// //                   }}
// //                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
// //                 >
// //                   Delete
// //                 </button>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Edit Todo Dialog */}
// //         {editTodoId && (
// //           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// //             <div className="bg-white p-6 rounded shadow-lg">
// //               <h3 className="text-lg font-bold text-gray-700">Edit Todo</h3>
// //               <div className="mt-4">
// //                 <input
// //                   type="text"
// //                   value={editTodoText}
// //                   onChange={(e) => setEditTodoText(e.target.value)}
// //                   className="px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                 />
// //                 <button
// //                   onClick={editTodo}
// //                   className="ml-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                 >
// //                   Save
// //                 </button>
// //                 <button
// //                   onClick={() => setEditTodoId(null)} // Close the dialog
// //                   className="ml-2 px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
// //                 >
// //                   Cancel
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Delete Confirmation Dialog */}
// //         {showDeleteDialog && (
// //           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// //             <div className="bg-white p-6 rounded shadow-lg">
// //               <h3 className="text-lg font-bold text-gray-700">Are you sure you want to delete this todo?</h3>
// //               <div className="mt-4 flex space-x-4">
// //                 <button
// //                   onClick={() => setShowDeleteDialog(false)}
// //                   className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
// //                 >
// //                   No
// //                 </button>
// //                 <button
// //                   onClick={deleteTodo}
// //                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
// //                 >
// //                   Yes
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Logout Confirmation Dialog */}
// //         {showLogoutDialog && (
// //           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// //             <div className="bg-white p-6 rounded shadow-lg">
// //               <h3 className="text-lg font-bold text-gray-700">Are you sure you want to logout?</h3>
// //               <div className="mt-4 flex space-x-4">
// //                 <button
// //                   onClick={() => setShowLogoutDialog(false)}
// //                   className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
// //                 >
// //                   No
// //                 </button>
// //                 <button
// //                   onClick={logout}
// //                   className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
// //                 >
// //                   Yes
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Logout Button */}
// //         <button
// //           onClick={openLogoutDialog}
// //           className="mt-4 px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
// //         >
// //           Logout
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Todo;




// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// function Todo() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");
//   const [editTodoId, setEditTodoId] = useState(null);
//   const [editTodoText, setEditTodoText] = useState("");
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
//   const [showLogoutDialog, setShowLogoutDialog] = useState(false);  // For logout confirmation dialog
//   const [todoToDelete, setTodoToDelete] = useState(null);
//   const userId = localStorage.getItem("userId");
//   const userEmail = localStorage.getItem("userEmail"); // Retrieve the email
//   const navigate = useNavigate();

//   const fetchTodos = async () => {
//     const response = await fetch(`http://localhost:5000/todos/${userId}`);
//     const data = await response.json();
//     setTodos(data);
//   };

//   const speakGreeting = (email) => {
//     const message = new SpeechSynthesisUtterance(`Hello ${email}`);
//     message.lang = 'en-US';  // Set the language to English (US)
//     window.speechSynthesis.speak(message);
//   };

//   const addTodo = async () => {
//     if (!newTodo) {
//       toast.error("Please enter a todo!");
//       return;
//     }

//     const response = await fetch("http://localhost:5000/todos", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ userId, text: newTodo }),
//     });

//     if (response.ok) {
//       fetchTodos();
//       setNewTodo("");
//       toast.success("Todo added successfully!");
//     } else {
//       toast.error("Error adding todo!");
//     }
//   };

//   const editTodo = async () => {
//     if (!editTodoText) {
//       toast.error("Please enter a valid todo!");
//       return;
//     }

//     const response = await fetch(`http://localhost:5000/todos/${editTodoId}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text: editTodoText }),
//     });

//     if (response.ok) {
//       fetchTodos();
//       setEditTodoId(null);
//       setEditTodoText("");
//       toast.success("Todo updated successfully!");
//     } else {
//       toast.error("Error updating todo!");
//     }
//   };

//   const toggleTodo = async (id, completed) => {
//     const response = await fetch(`http://localhost:5000/todos/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ completed: !completed }),
//     });

//     if (response.ok) fetchTodos();
//   };

//   const deleteTodo = async () => {
//     const response = await fetch(`http://localhost:5000/todos/${todoToDelete}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       fetchTodos();
//       setShowDeleteDialog(false);
//       setTodoToDelete(null);
//       toast.success("Todo deleted successfully!");
//     } else {
//       toast.error("Error deleting todo!");
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("userId");
//     localStorage.removeItem("userEmail");
//     navigate("/login");
//     toast.success("Logged out successfully!");
//   };

//   const openEditDialog = (todo) => {
//     setEditTodoId(todo.id);
//     setEditTodoText(todo.text);
//     setShowDeleteDialog(false); // Close the delete dialog if it's open
//   };

//   const openLogoutDialog = () => {
//     setShowLogoutDialog(true);
//   };

//   useEffect(() => {
//     if (userId) {
//       fetchTodos();
//       if (userEmail) {
//         speakGreeting(userEmail); // Speak the greeting when email is available
//       }
//     } else {
//       navigate("/login");
//     }
//   }, [userId, userEmail, navigate]);  // Add userEmail as a dependency

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
//       <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Your Todos</h2>

//         {/* Display logged-in user's email */}
//         <div className="text-center mb-6 text-gray-600">
//           <p>Welcome, {userEmail}</p>
//         </div>

//         {/* Add Todo */}
//         <div className="flex items-center mb-4 space-x-4">
//           <input
//             type="text"
//             placeholder="Add a new todo"
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//             className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <button
//             onClick={addTodo}
//             className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           >
//             Add
//           </button>
//         </div>

//         {/* Todo List */}
//         <ul className="space-y-4">
//           {todos.map((todo) => (
//             <li key={todo.id} className="flex items-center justify-between p-4 bg-gray-100 rounded shadow">
//               <div className="flex items-center space-x-4">
//                 <input
//                   type="checkbox"
//                   checked={todo.completed}
//                   onChange={() => toggleTodo(todo.id, todo.completed)}
//                   className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
//                 />
//                 <span className={`text-gray-700 ${todo.completed ? "line-through text-gray-500" : ""}`}>
//                   {todo.text}
//                 </span>
//               </div>

//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => openEditDialog(todo)}
//                   className="px-4 py-2 text-white bg-yellow-600 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => {
//                     setTodoToDelete(todo.id);
//                     setShowDeleteDialog(true);
//                   }}
//                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* Edit Todo Dialog */}
//         {editTodoId && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded shadow-lg">
//               <h3 className="text-lg font-bold text-gray-700">Edit Todo</h3>
//               <div className="mt-4">
//                 <input
//                   type="text"
//                   value={editTodoText}
//                   onChange={(e) => setEditTodoText(e.target.value)}
//                   className="px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//                 <button
//                   onClick={editTodo}
//                   className="ml-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   Save
//                 </button>
//                 <button
//                   onClick={() => setEditTodoId(null)} // Close the dialog
//                   className="ml-2 px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Delete Confirmation Dialog */}
//         {showDeleteDialog && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded shadow-lg">
//               <h3 className="text-lg font-bold text-gray-700">Are you sure you want to delete this todo?</h3>
//               <div className="mt-4 flex space-x-4">
//                 <button
//                   onClick={() => setShowDeleteDialog(false)}
//                   className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
//                 >
//                   No
//                 </button>
//                 <button
//                   onClick={deleteTodo}
//                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
//                 >
//                   Yes
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Logout Confirmation Dialog */}
//         {showLogoutDialog && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded shadow-lg">
//               <h3 className="text-lg font-bold text-gray-700">Are you sure you want to log out?</h3>
//               <div className="mt-4 flex space-x-4">
//                 <button
//                   onClick={() => setShowLogoutDialog(false)}
//                   className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
//                 >
//                   No
//                 </button>
//                 <button
//                   onClick={logout}
//                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
//                 >
//                   Yes
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Todo;



// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// function Todo() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");
//   const [editTodoId, setEditTodoId] = useState(null);
//   const [editTodoText, setEditTodoText] = useState("");
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
//   const [showLogoutDialog, setShowLogoutDialog] = useState(false);  // For logout confirmation dialog
//   const [todoToDelete, setTodoToDelete] = useState(null);
//   const userId = localStorage.getItem("userId");
//   const userEmail = localStorage.getItem("userEmail"); // Retrieve the email
//   const navigate = useNavigate();

//   const fetchTodos = async () => {
//     const response = await fetch(`http://localhost:5000/todos/${userId}`);
//     const data = await response.json();
//     setTodos(data);
//   };

//   const speakGreeting = (email) => {
//     const message = new SpeechSynthesisUtterance(`Hello ${email}`);
//     message.lang = 'en-US';  // Set the language to English (US)
//     window.speechSynthesis.speak(message);
//   };

//   const addTodo = async () => {
//     if (!newTodo) {
//       toast.error("Please enter a todo!");
//       return;
//     }

//     const response = await fetch("http://localhost:5000/todos", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ userId, text: newTodo }),
//     });

//     if (response.ok) {
//       fetchTodos();
//       setNewTodo("");
//       toast.success("Todo added successfully!");
//     } else {
//       toast.error("Error adding todo!");
//     }
//   };

//   const editTodo = async () => {
//     if (!editTodoText) {
//       toast.error("Please enter a valid todo!");
//       return;
//     }

//     const response = await fetch(`http://localhost:5000/todos/${editTodoId}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text: editTodoText }),
//     });

//     if (response.ok) {
//       fetchTodos();
//       setEditTodoId(null);
//       setEditTodoText("");
//       toast.success("Todo updated successfully!");
//     } else {
//       toast.error("Error updating todo!");
//     }
//   };

//   const toggleTodo = async (id, completed) => {
//     const response = await fetch(`http://localhost:5000/todos/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ completed: !completed }),
//     });

//     if (response.ok) fetchTodos();
//   };

//   const deleteTodo = async () => {
//     const response = await fetch(`http://localhost:5000/todos/${todoToDelete}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       fetchTodos();
//       setShowDeleteDialog(false);
//       setTodoToDelete(null);
//       toast.success("Todo deleted successfully!");
//     } else {
//       toast.error("Error deleting todo!");
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("userId");
//     localStorage.removeItem("userEmail");
//     navigate("/login");
//     toast.success("Logged out successfully!");
//   };

//   const openEditDialog = (todo) => {
//     setEditTodoId(todo.id);
//     setEditTodoText(todo.text);
//     setShowDeleteDialog(false); // Close the delete dialog if it's open
//   };

//   const openLogoutDialog = () => {
//     setShowLogoutDialog(true);
//   };

//   useEffect(() => {
//     if (userId) {
//       fetchTodos();
//       if (userEmail) {
//         speakGreeting(userEmail); // Speak the greeting when email is available
//       }
//     } else {
//       navigate("/login");
//     }
//   }, [userId, userEmail, navigate]);  // Add userEmail as a dependency

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
//       <div className="w[450px]h-[350x] p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Your Todos</h2>

//         {/* Display logged-in user's email */}
//         <div className="text-3xl  text-black text-center mb-6">
//           <p>Welcome, {userEmail}</p>
//         </div>

//         {/* Logout Button */}
//         <button
//           onClick={openLogoutDialog}
//           className="w-73 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
//         >
//           Logout
//         </button>

//         {/* Add Todo */}
//         <div className="flex items-center mb-4 space-x-4">
//           <input
//             type="text"
//             placeholder="Add a new todo"
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//             className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <button
//             onClick={addTodo}
//             className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           >
//             Add
//           </button>
//         </div>

//         {/* Todo List */}
//         <ul className="space-y-4">
//           {todos.map((todo) => (
//             <li key={todo.id} className="flex items-center justify-between p-4 bg-gray-100 rounded shadow">
//               <div className="flex items-center space-x-4">
//                 <input
//                   type="checkbox"
//                   checked={todo.completed}
//                   onChange={() => toggleTodo(todo.id, todo.completed)}
//                   className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
//                 />
//                 <span className={`text-gray-700 ${todo.completed ? "line-through text-gray-500" : ""}`}>
//                   {todo.text}
//                 </span>
//               </div>

//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => openEditDialog(todo)}
//                   className="px-4 py-2 text-white bg-yellow-600 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => {
//                     setTodoToDelete(todo.id);
//                     setShowDeleteDialog(true);
//                   }}
//                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* Edit Todo Dialog */}
//         {editTodoId && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded shadow-lg">
//               <h3 className="text-lg font-bold text-gray-700">Edit Todo</h3>
//               <div className="mt-4">
//                 <input
//                   type="text"
//                   value={editTodoText}
//                   onChange={(e) => setEditTodoText(e.target.value)}
//                   className="px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//                 <button
//                   onClick={editTodo}
//                   className="ml-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   Save
//                 </button>
//                 <button
//                   onClick={() => setEditTodoId(null)} // Close the dialog
//                   className="ml-2 px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Delete Confirmation Dialog */}
//         {showDeleteDialog && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded shadow-lg">
//               <h3 className="text-lg font-bold text-gray-700">Are you sure you want to delete this todo?</h3>
//               <div className="mt-4 flex space-x-4">
//                 <button
//                   onClick={() => setShowDeleteDialog(false)}
//                   className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
//                 >
//                   No
//                 </button>
//                 <button
//                   onClick={deleteTodo}
//                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
//                 >
//                   Yes
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Logout Confirmation Dialog */}
//         {showLogoutDialog && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded shadow-lg">
//               <h3 className="text-lg font-bold text-gray-700">Are you sure you want to log out?</h3>
//               <div className="mt-4 flex space-x-4">
//                 <button
//                   onClick={() => setShowLogoutDialog(false)}
//                   className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
//                 >
//                   No
//                 </button>
//                 <button
//                   onClick={logout}
//                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
//                 >
//                   Yes
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Todo;




// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// function Todo() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");
//   const [editTodoId, setEditTodoId] = useState(null);
//   const [editTodoText, setEditTodoText] = useState("");
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
//   const [showLogoutDialog, setShowLogoutDialog] = useState(false);  
//   const [todoToDelete, setTodoToDelete] = useState(null);
//   const userId = localStorage.getItem("userId");
//   const userEmail = localStorage.getItem("userEmail");
//   const navigate = useNavigate();

//   const fetchTodos = async () => {
//     const response = await fetch(`http://localhost:5000/todos/${userId}`);
//     const data = await response.json();
//     setTodos(data);
//   };

//   const speakGreeting = (email) => {
//     const message = new SpeechSynthesisUtterance(`Hello ${email}`);
//     message.lang = 'en-US';
//     window.speechSynthesis.speak(message);
//   };

//   const addTodo = async () => {
//     if (!newTodo) {
//       toast.error("Please enter a todo!");
//       return;
//     }

//     const response = await fetch("http://localhost:5000/todos", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ userId, text: newTodo }),
//     });

//     if (response.ok) {
//       fetchTodos();
//       setNewTodo("");
//       toast.success("Todo added successfully!");
//     } else {
//       toast.error("Error adding todo!");
//     }
//   };

//   const editTodo = async () => {
//     if (!editTodoText) {
//       toast.error("Please enter a valid todo!");
//       return;
//     }

//     const response = await fetch(`http://localhost:5000/todos/${editTodoId}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text: editTodoText }),
//     });

//     if (response.ok) {
//       fetchTodos();
//       setEditTodoId(null);
//       setEditTodoText("");
//       toast.success("Todo updated successfully!");
//     } else {
//       toast.error("Error updating todo!");
//     }
//   };

//   const toggleTodo = async (id, completed) => {
//     const response = await fetch(`http://localhost:5000/todos/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ completed: !completed }),
//     });

//     if (response.ok) fetchTodos();
//   };

//   const deleteTodo = async () => {
//     const response = await fetch(`http://localhost:5000/todos/${todoToDelete}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       fetchTodos();
//       setShowDeleteDialog(false);
//       setTodoToDelete(null);
//       toast.success("Todo deleted successfully!");
//     } else {
//       toast.error("Error deleting todo!");
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("userId");
//     localStorage.removeItem("userEmail");
//     navigate("/login");
//     toast.success("Logged out successfully!");
//   };

//   const openEditDialog = (todo) => {
//     setEditTodoId(todo.id);
//     setEditTodoText(todo.text);
//     setShowDeleteDialog(false); 
//   };

//   const openLogoutDialog = () => {
//     setShowLogoutDialog(true);
//   };

//   useEffect(() => {
//     if (userId) {
//       fetchTodos();
//       if (userEmail) {
//         speakGreeting(userEmail);
//       }
//     } else {
//       navigate("/login");
//     }
//   }, [userId, userEmail, navigate]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
//       <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Your Todos</h2>

//         <div className="text-3xl text-black text-center mb-6">
//           <p>Welcome, {userEmail}</p>
//         </div>

//         <button
//           onClick={openLogoutDialog}
//           className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
//         >
//           Logout
//         </button>

//         <div className="flex flex-col sm:flex-row sm:items-center mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
//           <input
//             type="text"
//             placeholder="Add a new todo"
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//             className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <button
//             onClick={addTodo}
//             className="w-full sm:w-auto px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           >
//             Add
//           </button>
//         </div>

//         <ul className="space-y-4">
//           {todos.map((todo) => (
//             <li key={todo.id} className="flex items-center justify-between p-4 bg-gray-100 rounded shadow">
//               <div className="flex items-center space-x-4">
//                 <input
//                   type="checkbox"
//                   checked={todo.completed}
//                   onChange={() => toggleTodo(todo.id, todo.completed)}
//                   className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
//                 />
//                 <span className={`text-gray-700 ${todo.completed ? "line-through text-gray-500" : ""}`}>
//                   {todo.text}
//                 </span>
//               </div>

//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => openEditDialog(todo)}
//                   className="px-4 py-2 text-white bg-yellow-600 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => {
//                     setTodoToDelete(todo.id);
//                     setShowDeleteDialog(true);
//                   }}
//                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {editTodoId && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded shadow-lg">
//               <h3 className="text-lg font-bold text-gray-700">Edit Todo</h3>
//               <div className="mt-4">
//                 <input
//                   type="text"
//                   value={editTodoText}
//                   onChange={(e) => setEditTodoText(e.target.value)}
//                   className="px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//                 <button
//                   onClick={editTodo}
//                   className="ml-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   Save
//                 </button>
//                 <button
//                   onClick={() => setEditTodoId(null)} 
//                   className="ml-2 px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {showDeleteDialog && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded shadow-lg">
//               <h3 className="text-lg font-bold text-gray-700">Are you sure you want to delete this todo?</h3>
//               <div className="mt-4 flex space-x-4">
//                 <button
//                   onClick={() => setShowDeleteDialog(false)}
//                   className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
//                 >
//                   No
//                 </button>
//                 <button
//                   onClick={deleteTodo}
//                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
//                 >
//                   Yes
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {showLogoutDialog && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded shadow-lg">
//               <h3 className="text-lg font-bold text-gray-700">Are you sure you want to log out?</h3>
//               <div className="mt-4 flex space-x-4">
//                 <button
//                   onClick={() => setShowLogoutDialog(false)}
//                   className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
//                 >
//                   No
//                 </button>
//                 <button
//                   onClick={logout}
//                   className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
//                 >
//                   Yes
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Todo;



import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const userId = localStorage.getItem("userId");
  const userEmail = localStorage.getItem("userEmail");
  const navigate = useNavigate();

  const fetchTodos = async () => {
    const response = await fetch(`http://localhost:5000/todos/${userId}`);
    const data = await response.json();
    setTodos(data);
  };

  const speakGreeting = (email) => {
    const message = new SpeechSynthesisUtterance(`Hello ${email}`);
    message.lang = "en-US";
    window.speechSynthesis.speak(message);
  };

  const addTodo = async () => {
    if (!newTodo) {
      toast.error("Please enter a todo!");
      return;
    }

    const response = await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, text: newTodo }),
    });

    if (response.ok) {
      fetchTodos();
      setNewTodo("");
      toast.success("Todo added successfully!");
    } else {
      toast.error("Error adding todo!");
    }
  };

  const editTodo = async () => {
    if (!editTodoText) {
      toast.error("Please enter a valid todo!");
      return;
    }

    const response = await fetch(`http://localhost:5000/todos/${editTodoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: editTodoText }),
    });

    if (response.ok) {
      fetchTodos();
      setEditTodoId(null);
      setEditTodoText("");
      toast.success("Todo updated successfully!");
    } else {
      toast.error("Error updating todo!");
    }
  };

  const toggleTodo = async (id, completed) => {
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });

    if (response.ok) fetchTodos();
  };

  const deleteTodo = async () => {
    const response = await fetch(`http://localhost:5000/todos/${todoToDelete}`, {
      method: "DELETE",
    });

    if (response.ok) {
      fetchTodos();
      setShowDeleteDialog(false);
      setTodoToDelete(null);
      toast.success("Todo deleted successfully!");
    } else {
      toast.error("Error deleting todo!");
    }
  };

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    navigate("/login");
    toast.success("Logged out successfully!");
  };

  const openEditDialog = (todo) => {
    setEditTodoId(todo.id);
    setEditTodoText(todo.text);
    setShowDeleteDialog(false);
  };

  const openLogoutDialog = () => {
    setShowLogoutDialog(true);
  };

  useEffect(() => {
    if (userId) {
      fetchTodos();
      if (userEmail) {
        speakGreeting(userEmail);
      }
    } else {
      navigate("/login");
    }
  }, [userId, userEmail, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500 p-4 sm:p-6">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Your Todos</h2>

        <div className="text-xl sm:text-2xl text-black text-center mb-6">
          <p>Welcome, {userEmail}</p>
        </div>

        <button
          onClick={openLogoutDialog}
          className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
        >
          Logout
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={addTodo}
            className="w-full sm:w-auto px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Add
          </button>
        </div>

        <ul className="space-y-4">
          {todos.map((todo) => (
            <li key={todo.id} className="flex flex-wrap items-center justify-between p-4 bg-gray-100 rounded shadow">
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id, todo.completed)}
                  className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                />
                <span className={`text-gray-700 ${todo.completed ? "line-through text-gray-500" : ""}`}>
                  {todo.text}
                </span>
              </div>

              <div className="flex space-x-2 mt-2 sm:mt-0">
                <button
                  onClick={() => openEditDialog(todo)}
                  className="px-4 py-2 text-white bg-yellow-600 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setTodoToDelete(todo.id);
                    setShowDeleteDialog(true);
                  }}
                  className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Dialogs */}
        {/* Existing dialog modals */}
        {editTodoId && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-lg font-bold text-gray-700">Edit Todo</h3>
              <div className="mt-4">
                <input
                  type="text"
                  value={editTodoText}
                  onChange={(e) => setEditTodoText(e.target.value)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={editTodo}
                  className="ml-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditTodoId(null)} 
                  className="ml-2 px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {showDeleteDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-lg font-bold text-gray-700">Are you sure you want to delete this todo?</h3>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => setShowDeleteDialog(false)}
                  className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
                >
                  No
                </button>
                <button
                  onClick={deleteTodo}
                  className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}

        {showLogoutDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-lg font-bold text-gray-700">Are you sure you want to log out?</h3>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => setShowLogoutDialog(false)}
                  className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
                >
                  No
                </button>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
