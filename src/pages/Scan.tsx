import ScanTemplate from "@/components/template/scan";
import { useScanQrCode } from "@/hooks/useGetScanResult";

const Scan = () => {
  const { result, handleScan } = useScanQrCode();

  const handleError = (error: any) => {
    console.log(error);
  };

  return (
    <ScanTemplate onError={handleError} onScan={handleScan} result={result} />
  );
};

export default Scan;
