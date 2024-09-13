import TasksHeader from "./Componets/TaskHeader";
import TasksList from "./Componets/TaskList";
import TasksSubHeader from "./Componets/TaskSubHeader";

function AllTasksContainer() {
  return (
    <div className="bg-slate-50 w-full p-10">
      <TasksHeader />
      <TasksSubHeader />
      <TasksList/>
    </div>
  );
}

export default AllTasksContainer;