import { Fragment } from "react";
import { Helmet } from "react-helmet";

interface Props {
  children: React.ReactNode;
  description: string;
  title: string;
}

export default function Layout({ children, title, description }: Props) {
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </Fragment>
  );
}
