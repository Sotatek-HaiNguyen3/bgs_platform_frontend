import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import DefaultLayout from "../layout/DefaultLayout";
import MainLayout from "layout/MainLayout";
import getToken from "utils/auth/get-token";
import LoadingIndicator from "components/common/LoadingIndicator";

const HomePage = lazy(() => import("containers/Home"));
const Register = lazy(() => import("containers/Register"));
const Login = lazy(() => import("containers/Login"));
const NotFound = lazy(() => import("containers/NotFound"));
const AsStudentOrCompany = lazy(() => import("containers/AsStudentOrCompany"))
const MentorTalking = lazy(() => import("containers/MentorTalking"))

const Router = () => {
  let auth = getToken();

  let layout = <DefaultLayout />;

  if (auth) {
    layout = <MainLayout />;
  }

  const routes = [
    {
      path: "/",
      element: layout,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/as-student-or-company",
          element: <AsStudentOrCompany />,
        },
        {
          path: "/mentor-talking",
          element: <MentorTalking />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ];

  const element = useRoutes(routes);

  return (
    <div className="router-container">
      <Suspense fallback={<LoadingIndicator />}>{element}</Suspense>
    </div>
  );
};

export default Router;
