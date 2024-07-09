
export const fetchJobsApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(require("../jobListings.json"));
    }, 2000);
  });
};
