import { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthCard(props: AuthCardProps) {
  const { children, title, subtitle } = props;

  return <div>AuthCard</div>;
}
