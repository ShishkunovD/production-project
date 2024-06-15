import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return(
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({ path, element }) => {
            return <Route key={path} path={path} element={(
              <Suspense fallback={<div>Loading...</div>}>
                <div className="page-wrapper">
                  {element}
                </div>
              </Suspense>
              )} />
          })}
        </Routes>
      </Suspense>
    );
}

export default AppRouter;
