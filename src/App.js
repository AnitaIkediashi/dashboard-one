import MainBar from "./components/MainBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-white h-100vh grid xl:grid-cols-[272px_1fr] lg:grid-cols-[150px_1fr] overflow-y-scroll grid-cols-1 xl:overflow-hidden scroll">
      <Sidebar />
      <MainBar />
    </div>
  );
}

export default App;
