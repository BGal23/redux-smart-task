import { useDispatch } from "react-redux";
import { setFiltersStatus } from "../../redux/filtersSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const filtered = (newFiltersStatus) => {
    const filtersValue = newFiltersStatus.target.value;
    dispatch(setFiltersStatus(filtersValue));
  };
  return (
    <>
      <h3>Search user</h3>
      <input onChange={filtered} />
      <br />
      <br />
    </>
  );
};

export default Filters;
