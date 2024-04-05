import { getAuthApi } from "@/api/modules/auth.ts";
import { useDispatch } from "@/redux";
import { setToken } from "@/redux/modules/user";
import { setAuthMenuList } from "@/redux/modules/auth";
import { notification } from "./useMessage";

const usePermission = () => {
  const dispatch = useDispatch();

  const initPermission = async (token: string) => {
    if (token) {
      try {
        const { data: authData } = await getAuthApi();
        dispatch(setAuthMenuList(authData.authMenuList));
        if (!authData.authMenuList.length) {
          dispatch(setToken(""));
          notification.error({
            message: "暂无权限",
            description: "请联系管理员配置权限"
          });
          return Promise.reject("No permission");
        }
      } catch (error) {
        dispatch(setToken(""));
        return Promise.reject(error);
      }
    }
  };

  return { initPermission };
};

export default usePermission;
