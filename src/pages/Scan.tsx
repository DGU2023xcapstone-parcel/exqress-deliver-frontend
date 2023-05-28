import ScanTemplate from "@/components/template/scan";
import { useScanQrCode } from "@/hooks/useScanQrCode";

const Scan = () => {
  const { result, handleScan, handleError } = useScanQrCode();

  return (
    <ScanTemplate onError={handleError} onScan={handleScan} result={result} />
  );
};

export default Scan;
