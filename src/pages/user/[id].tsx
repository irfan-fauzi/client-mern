import 'tailwindcss/tailwind.css'
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Id = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(router.query.id)
  })
  return (
    <div>
      <p>user</p>
      <p>{router.query.id}</p>
    </div>
  );
};

export default Id;
