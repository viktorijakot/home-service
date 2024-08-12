import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/Router";
import { UserProvider } from "./components/context/UserContext";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
