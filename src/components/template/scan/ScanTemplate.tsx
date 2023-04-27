import QrScanner from "@/components/pages/scan/qr-scanner";
import * as style from "./ScanTemplate.style";

export interface ScanTemplateProps {
  result: string;
  onError: (err: any) => void;
  onScan: (data: string | null) => void;
}
const ScanTemplate = ({ onError, onScan, result }: ScanTemplateProps) => (
  <style.Wrapper>
    <QrScanner onError={onError} onScan={onScan} />
    {result}
  </style.Wrapper>
);

export default ScanTemplate;
