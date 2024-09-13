import SideBar from "./components/Sidebar";
import AllProjects from "./Pages/AllProjects/Allproject";
import AllTask from "./Pages/AllTasks/AllTask"
export default function Home() {
  return (
    <div className="flex w-full h-screen poppins">
      {/* Sidebar */}
      {/* <SideBar />
      <AllProjects /> */}
      <AllTask/>
    </div>
  );
}
