import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Scan from "../pages/Scan";
import Navigation from "../components/common/navigation";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/signin/*" element/> */}
          {/* <Route path="/signup/*" element/> */}
          <Route path="/scan/*" element={<Scan />} />
          {/* <Route path="/deliver/*" element/> */}
          <Route path="/" element={<Navigate replace to="/scan" />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
