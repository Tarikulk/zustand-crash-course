import useCourseStore from "../app/courseStore";

const Dashboard = () => {
  const courses = useCourseStore((s) => s.courses);
  const total = courses.length;
  const completed = courses.filter((c) => c.completed).length;
  const pending = total - completed;

  return (
    <div className="dashboard">
      <div className="card">📘 Total: {total}</div>
      <div className="card">✅ Completed: {completed}</div>
      <div className="card">⏳ Pending: {pending}</div>
    </div>
  );
};

export default Dashboard;
