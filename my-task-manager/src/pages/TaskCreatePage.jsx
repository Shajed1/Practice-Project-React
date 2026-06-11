import MasterLayout from "../components/MasterLayout.jsx";
import TaskCreate from "../components/TaskCreate.jsx";


const TaskCreatePage = () => {
    return (
        <div>
            <MasterLayout>
            <TaskCreate/>
            </MasterLayout>

        </div>
    );
};

export default TaskCreatePage;