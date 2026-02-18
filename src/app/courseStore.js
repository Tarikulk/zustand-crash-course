import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Zustand store
const courseStore = (set, get) => ({
  // STATE
  courses: [],
  filter: "all", // all | completed | pending
  search: "",

  // ACTIONS
  addCourse: (course) =>
    set((state) => ({
      courses: [course, ...state.courses],
    })),

  removeCourse: (id) =>
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== id),
    })),

  toggleCourseStatus: (id) =>
    set((state) => ({
      courses: state.courses.map((c) =>
        c.id === id ? { ...c, completed: !c.completed } : c
      ),
    })),

  setFilter: (filter) => set({ filter }),
  setSearch: (text) => set({ search: text }),

  // DERIVED STATE (dashboard stats)
  stats: () => {
    const courses = get().courses;
    const completed = courses.filter((c) => c.completed).length;
    return {
      total: courses.length,
      completed,
      pending: courses.length - completed,
    };
  },

  // FILTERED LIST
  filteredCourses: () => {
    const { courses, filter, search } = get();

    return courses.filter((c) => {
      const matchFilter =
        filter === "all"
          ? true
          : filter === "completed"
          ? c.completed
          : !c.completed;

      const matchSearch = c.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchFilter && matchSearch;
    });
  },
});

const useCourseStore = create(
  persist(devtools(courseStore), { name: "course-dashboard" })
);

export default useCourseStore;
