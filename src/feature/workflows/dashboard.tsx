import Header from "./header";
import WorkFlowTable from "./table";
import { sampleWorkflows } from "../../mocked-data/workflows";

const Dashboard: React.FC = () => (
  <>
    <Header />
    <WorkFlowTable workflows={sampleWorkflows} />
  </>
);

export default Dashboard;
