import { getAuthMenuListApi } from "@/api/modules/auth.ts";
import { useDispatch } from "@/stores/index.ts";
import { setToken } from "@/stores/modules/user.ts";
import { setAuthMenuList } from "@/stores/modules/auth.ts";

const usePermission = () => {
  const dispatch = useDispatch();

  const initPermission = async (token: string) => {
    if (token) {
      try {
        const { data: menuList } = await getAuthMenuListApi();
        dispatch(setAuthMenuList(menuList));
        if (!menuList.length) {
          dispatch(setToken(""));
          return Promise.reject("无菜单权限");
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
