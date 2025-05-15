import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Loading from "@components/Loading";
import { Suspense } from "react";

export default function RootLayout() {
  return (
    <div>
      <Header></Header>
      <Suspense fallback={<Loading text="Loading..." />}>
        <Outlet></Outlet>
      </Suspense>
    </div>
  );
}
