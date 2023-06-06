import { Route, Routes, useLocation } from "react-router-dom";

import Scan from "@/pages/Scan";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Info from "@/pages/Info";
import Layout from "@/components/common/layout";
import RouteTransition from "@/components/common/route-transition";

const AppRouter = () => {
  const location = useLocation();

  return (
    <RouteTransition path={location.pathname}>
      <Routes location={location}>
        <Route path="/">
          <Route element={<Layout />}>
            <Route path="" element={<SignIn />} />
            <Route path="info" element={<Info />}></Route>
            <Route path="scan" element={<Scan />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Route>
      </Routes>
    </RouteTransition>
  );
};

export default AppRouter;
