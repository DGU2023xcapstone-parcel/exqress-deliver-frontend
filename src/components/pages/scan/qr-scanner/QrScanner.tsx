import { ScanTemplateProps } from "@/components/template/scan/ScanTemplate";
import * as style from "./QrScanner.style";

const QrScanner = ({
  onError,
  onScan,
}: Pick<ScanTemplateProps, "onError" | "onScan">) => (
  <style.Scanner showViewFinder delay={300} onError={onError} onScan={onScan} />
);

export default QrScanner;
