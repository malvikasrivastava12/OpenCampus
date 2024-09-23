import "./App.css";
import { Council } from "./components/Council";
import { DAONavbar } from "./components/DAONavbar";
import { EntityAndNames } from "./components/EntityAndNames";
import { Footer } from "./components/Footer";
import { OCPCategories } from "./components/OCPCategories";
import { OCPDisCourse } from "./components/OCPDisCourse";
import { Overview } from "./components/Overview";
import { ProposalApproved } from "./components/ProposalApproved";
import { ProposalConflicts } from "./components/ProposalConflicts";
import { ProposalStructure } from "./components/ProposalStructure";
import Sidebar from "./components/sidebar";
import { SubmissionProcess } from "./components/SubmissionProcess";
import { SubmitProposal } from "./components/SubmitProposal";
import { VotingProcess } from "./components/VotingProcess";

function App() {
  return (
    <>
      <DAONavbar></DAONavbar>
      <center>
        <h1 className="Titleheading">Open Campus DAO Governance</h1>
      </center>
      <div className="centent-container">
        <div>
          <Sidebar></Sidebar>
        </div>
        <div>
          <Overview></Overview>
          <SubmissionProcess></SubmissionProcess>
          <ProposalStructure></ProposalStructure>
          <ProposalConflicts></ProposalConflicts>
          <SubmitProposal></SubmitProposal>
          <ProposalApproved></ProposalApproved>
          <VotingProcess></VotingProcess>

          <div className="Titleheading">Open Campus DAO terminology</div>
          <EntityAndNames></EntityAndNames>
          <OCPCategories></OCPCategories>
          <OCPDisCourse></OCPDisCourse>
          <Council></Council>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
