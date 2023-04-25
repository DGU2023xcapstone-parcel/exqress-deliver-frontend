import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scan from "@/pages/Scan";
import ScanResult from "@/pages/ScanResult";
import Layout from "@/components/common/layout";
import Navigation from "@/components/common/navigation";
import SignIn from "../pages/SignIn";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* <Route path="/signin/*" element/> */}
            {/* <Route path="/signup/*" element/> */}
            <Route path="/scan" element={<Scan />} />
            <Route path="/scan/result" element={<ScanResult />} />
            {/* <Route path="/deliver/*" element/> */}
            {/* <Route path="/" element={<Navigate replace to="/scan" />} /> */}
            <Route path="/signin" element={<SignIn />} />
          </Route>
        </Routes>
        <Navigation />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
