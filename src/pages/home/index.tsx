import React from "react";

import { useSelector, useDispatch } from "@/stores/index.ts";

import { setUserInfo } from "@/stores/modules/user";

import { Button } from "antd";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.user);
  const setName = () => {
    dispatch(setUserInfo("simply admin"));
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
