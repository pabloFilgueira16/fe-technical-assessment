import WorkFlowDashboard from "./feature/workflows/dashboard";
import Sidebar from "./components/side-bar";

function App() {
  return (
    <div className="flex flex-row flex-1">
      <Sidebar />
      <WorkFlowDashboard />
    </div>
  );
}

export default App;
