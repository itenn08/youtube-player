import React, { useEffect } from "react";

import { IPage } from "../../types/page";

const Page = ({ children, title = "Not Found" }: IPage): React.ReactElement => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <>{children}</>;
};

export default Page;
