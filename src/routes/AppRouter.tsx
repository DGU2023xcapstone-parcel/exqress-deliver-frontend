import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scan from "@/pages/Scan";
import ScanResult from "@/pages/ScanResult";
import Layout from "@/components/common/layout";
import Navigation from "@/components/common/navigation";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<Layout />}> */}
          <Route path="/scan" element={<Layout />}>
            <Route index element={<Scan />} />
            <Route path="result" element={<ScanResult />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          {/* </Route> */}
        </Routes>
        <Navigation />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
