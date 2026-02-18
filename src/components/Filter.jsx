import useCourseStore from "../app/courseStore";

const Filters = () => {
  const setFilter = useCourseStore((s) => s.setFilter);
  const setSearch = useCourseStore((s) => s.setSearch);

  return (
    <div className="filters">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>

      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Filters;
