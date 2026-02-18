import useCourseStore from "../app/courseStore";

const CourseItem = ({ course }) => {
  const toggle = useCourseStore((s) => s.toggleCourseStatus);
  const remove = useCourseStore((s) => s.removeCourse);

  return (
    <li className={`course-item ${course.completed ? "done" : ""}`}>
      <div className="course-item-col-1">
        <input
          type="checkbox"
          checked={course.completed}
          onChange={() => toggle(course.id)}
        />
        {course.title}
      </div>
      <button className="delete-btn" onClick={() => remove(course.id)}>
        ❌
      </button>
    </li>
  );
};

export default CourseItem;
