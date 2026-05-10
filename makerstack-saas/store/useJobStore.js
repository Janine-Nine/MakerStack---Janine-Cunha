import { create } from 'zustand';

export const useJobStore = create((set) => ({
  jobs: [],

  setJobs: (jobs) => set({ jobs }),

  addJob: (job) =>
    set((state) => ({
      jobs: [...state.jobs, job],
    })),
}));