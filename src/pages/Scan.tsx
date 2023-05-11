import { useState } from "react";
import ScanTemplate from "@/components/template/scan";
import { useGetScanResult } from "@/hooks/useGetScanResult";
import { useNavigate } from "react-router-dom";

const Scan = () => {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const { data } = useGetScanResult({ code: result });

  const handleError = (error: any) => {
    console.log(error);
  };
  const handleScan = (result: string | null) => {
    if (result) {
      setResult(result);
      navigate("/scan/result", {
        state: {
          infoData: data,
        },
      });
    }
  };

  return (
    <ScanTemplate onError={handleError} onScan={handleScan} result={result} />
  );
};

export default Scan;
