import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import Dashboard from "./components/Dashboard";
import Filters from "./components/Filter";

 
function App() {
  return (
    <div className="main-container">
      <h1 style={{ marginBottom: "2rem" }}>📚 Course Tracker</h1>
      <Dashboard />
      <Filters />
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
