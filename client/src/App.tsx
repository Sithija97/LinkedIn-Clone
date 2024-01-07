import "./App.css";
import { Feed, Navbar } from "./components";

function App() {
  return (
    <>
      <div className="bg-slate-100 h-screen overflow-y-hidden">
        <Navbar />
        <Feed />
      </div>
    </>
  );
}

export default App;
