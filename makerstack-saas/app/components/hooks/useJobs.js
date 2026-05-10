import { useJobStore } from '../store/useJobStore';

export function useJobs() {
  const { jobs, setJobs, addJob } = useJobStore();

  return {
    jobs,
    setJobs,
    addJob,
  };
}