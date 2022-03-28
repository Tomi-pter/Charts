import "./App.css";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <BarChart />
      <Table />
      <PieChart />
    </div>
  );
}

export default App;
