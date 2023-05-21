import ScanTemplate from "@/components/template/scan";
import { useGetScanResult } from "@/hooks/useGetScanResult";

const Scan = () => {
  const { result, handleScan } = useGetScanResult();

  const handleError = (error: any) => {
    console.log(error);
  };

  return (
    <ScanTemplate onError={handleError} onScan={handleScan} result={result} />
  );
};

export default Scan;
