//"react"からuseContextをimport
import { useContext } from "react";

//作成したContextをimport
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRedius: "8px"
};

export const EditButton = () => {
  //Context内のisAdminを取得
  const { isAdmin } = useContext(AdminFlagContext);
  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};