import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "@/store/modules/user";

import { RootStateType } from "@/store";

import { Button } from "antd";

const Home: React.FC = () => {
  const { userInfo } = useSelector((state: RootStateType) => state.user);
  const dispatch = useDispatch();
  const setName = () => {
    dispatch(setUserName("刘章衡大傻逼"));
    console.log(userInfo.name);
  };
  return (
    <>
      <div>{userInfo.name}</div>
      <Button type="primary" onClick={setName}>
        change name
      </Button>
    </>
  );
};

export default Home;
