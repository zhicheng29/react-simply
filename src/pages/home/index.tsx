import { useSelector, useDispatch } from "@/store/index.ts";

import { setUserInfo } from "@/store/modules/user";

import { Button } from "antd";

import type { RootStateType } from "@/store";

const Home: React.FC = () => {
  const { userInfo } = useSelector((state: RootStateType) => state.user);
  const dispatch = useDispatch();
  const setName = () => {
    dispatch(setUserInfo("Simply-Admin"));
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
