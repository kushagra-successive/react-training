import UserProfile from "./UserProfile";
import { dataArray } from "../Data";
const DataProvider = () => {
  return (
    <div>
      <UserProfile
        name={dataArray.name}
        email={dataArray.email}
        phoneNo={dataArray.phoneNo}
      />
    </div>
  );
};

export default DataProvider;
