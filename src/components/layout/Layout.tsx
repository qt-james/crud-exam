import LayoutMain from "./LayoutMain";
import { ReactNode, useEffect, useState } from "react";

interface LayoutPropType {
  children: ReactNode;
}

export default function Layout(props: LayoutPropType) {
  const { children } = props;

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <LayoutMain>{children}</LayoutMain>;
}
