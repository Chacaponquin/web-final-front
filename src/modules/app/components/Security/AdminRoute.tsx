import { Fragment, useEffect } from "react";
import { useUser } from "../../../user/hooks";
import { USER_ROLES } from "../../../user/constants";
import { redirect } from "react-router-dom";
import { APP_ROUTES } from "../../constants";

interface Props {
  children: React.ReactNode;
}

export default function AdminRoute({ children }: Props) {
  const { actualUser } = useUser();

  useEffect(() => {
    if (actualUser && actualUser.role !== USER_ROLES.ADMIN) {
      redirect(APP_ROUTES.AUTH.LOGIN);
    }
  }, [actualUser]);

  return <Fragment>{children}</Fragment>;
}
