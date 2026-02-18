import useCourseStore from "../app/courseStore";
import CourseItem from "./CourseItem";

const CourseList = () => {
  const courses = useCourseStore((s) => s.courses);
  const filter = useCourseStore((s) => s.filter);
  const search = useCourseStore((s) => s.search);

  const filtered = courses.filter((c) => {
    const matchFilter =
      filter === "all"
        ? true
        : filter === "completed"
        ? c.completed
        : !c.completed;

    return matchFilter && c.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <ul>
      {filtered.map((c) => (
        <CourseItem key={c.id} course={c} />
      ))}
    </ul>
  );
};

export default CourseList;
