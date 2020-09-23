import React from "react";
import { useParams } from "react-router-dom";

export const Profile: React.FC<any> = (props) => {
  const { id }: { id: string } = useParams();

  return <div>{id}</div>;
};
