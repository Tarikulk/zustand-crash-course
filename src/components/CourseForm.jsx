import { useState } from "react";
import useCourseStore from "../app/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((s) => s.addCourse);
  const [title, setTitle] = useState("");

  const submit = () => {
    if (!title.trim()) return alert("Add a title");

    addCourse({ id: Date.now(), title, completed: false });
    setTitle("");
  };

  return (
    <div className="form-container">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new course"
      />
      <button onClick={submit}>Add</button>
    </div>
  );
};

export default CourseForm;
