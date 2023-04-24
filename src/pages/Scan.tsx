import { useState } from "react";
import ScanTemplate from "@/components/template/scan";

const Scan = () => {
  const [result, setResult] = useState("no result");
  const [error, setError] = useState(null);

  if (error) {
    return <div className="error">{error}</div>;
  }

  const handleError = (error: any) => {
    setError(error.message);
  };
  const handleScan = (data: string | null) => {
    if (data) {
      setResult(data);
    }
  };

  return (
    <ScanTemplate onError={handleError} onScan={handleScan} result={result} />
  );
};

export default Scan;
