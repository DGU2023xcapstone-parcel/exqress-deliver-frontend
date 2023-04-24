import * as style from "./QrScanner.style";

interface QrScannerProps {
  onError: (err: any) => void;
  onScan: (data: string | null) => void;
}
const QrScanner = ({ onError, onScan }: QrScannerProps) => (
  <style.Scanner showViewFinder delay={300} onError={onError} onScan={onScan} />
);

export default QrScanner;
