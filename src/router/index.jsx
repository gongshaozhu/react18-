import React, { lazy, Suspense,  } from "react"
import { useRoutes } from 'react-router-dom'

const withSuspense = (Component) => {
  return (props) => (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
}

const A = withSuspense(lazy(() => import("../view/A.jsx")));


const rootRouter = [
    {
        path: "",
        element: <A/>,
    },
    {
        path: '*',
        element: <div>404</div>
    },
    {
      path: '/403',
      element: <div>403</div>
    }
]
const Router = () => {
    return useRoutes(rootRouter)
};

export default Router;