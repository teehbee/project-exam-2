// Load 8 more venues on venues page

export const loadMoreVenues = (setVisibleCount: React.Dispatch<React.SetStateAction<number>>) => {
  setVisibleCount((prevCount) => prevCount + 8);
};
