import Header from "./header";
import WorkFlowTable from "./table";

const Dashboard: React.FC = () => (
  <div className="flex flex-col flex-1">
    <Header />
    <WorkFlowTable />
  </div>
);

export default Dashboard;
