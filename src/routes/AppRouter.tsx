import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scan from "@/pages/Scan";
import ScanResult from "@/pages/ScanResult";
import Layout from "@/components/common/layout";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Info from "@/pages/Info";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route element={<Layout isActivate />}>
              <Route path="" element={<Info />}></Route>
              <Route path="scan">
                <Route path="" element={<Scan />} />
                <Route path="result" element={<ScanResult />} />
              </Route>
            </Route>
            <Route element={<Layout isActivate={false} />}>
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
