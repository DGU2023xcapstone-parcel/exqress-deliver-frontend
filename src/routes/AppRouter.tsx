import { Route, Routes, useLocation } from "react-router-dom";
import Scan from "@/pages/Scan";
import ScanResult from "@/pages/ScanResult";
import Layout from "@/components/common/layout";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Info from "@/pages/Info";
import RouteTransition from "./PageTransition";

const AppRouter = () => {
  const location = useLocation();

  return (
    <RouteTransition path={location.pathname}>
      <Routes location={location}>
        <Route path="/">
          <Route element={<Layout />}>
            <Route path="" element={<Info />}></Route>
            <Route path="scan">
              <Route path="" element={<Scan />} />
              <Route path="result" element={<ScanResult />} />
            </Route>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Route>
      </Routes>
    </RouteTransition>
  );
};

export default AppRouter;
