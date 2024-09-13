import AllProjectsSection from "./Componets/AllProjectSection";
import ProjectsHeader from "./Componets/ProjectHeader";
import ProjectsSubHeader from "./Componets/ProjectSubHeader";
import StateSideBar from "./Componets/StateRightBar";
function AllProjects() {
  return (
    <div className="bg-slate-50 w-full min-h-screen flex">
      <AllProjectsArea />
      {/* Project side bar we are going to add */}
      <StateSideBar/>

    </div>
  );
}

function AllProjectsArea() {
  return (
    <div className="w-[78%] p-10 flex flex-col gap-3">
      {/* Search bar and the add project button */}
      <ProjectsHeader />
      {/* My Projects Title and the add button */}
      <ProjectsSubHeader />
      <AllProjectsSection/>
    </div>
  );
}

export default AllProjects;
