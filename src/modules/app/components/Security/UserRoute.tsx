import { Fragment, useEffect } from "react";
import { useUser } from "../../../user/hooks";
import { redirect } from "react-router-dom";
import { APP_ROUTES } from "../../constants";

interface Props {
  children: React.ReactNode;
}

export default function UserRoute({ children }: Props) {
  const { actualUser } = useUser();

  useEffect(() => {
    if (!actualUser) {
      redirect(APP_ROUTES.AUTH.LOGIN);
    }
  }, [actualUser]);

  return <Fragment>{children}</Fragment>;
}
