import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-slate-100 h-screen overflow-y-hidden">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
