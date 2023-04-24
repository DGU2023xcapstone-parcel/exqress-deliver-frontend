import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Scan from "../pages/Scan";
import Navigation from "../components/common/navigation";
import Layout from "../components/common/layout";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* <Route path="/signin/*" element/> */}
            {/* <Route path="/signup/*" element/> */}
            <Route path="/" element={<Scan />} />
            {/* <Route path="/deliver/*" element/> */}
            {/* <Route path="/" element={<Navigate replace to="/scan" />} /> */}
          </Route>
        </Routes>
        <Navigation />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
