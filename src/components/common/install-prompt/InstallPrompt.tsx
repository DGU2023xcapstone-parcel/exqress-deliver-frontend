import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import AppLogo from "@/assets/appLogo.svg";
import ShareIcon from "@/assets/shareIcon.png";
import * as style from "./InstallPrompt.style";

const InstallPrompt = () => {
  const [isShown, setIsShown] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const isDeviceIOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent);
    setIsIOS(isDeviceIOS);

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    if (
      ("standalone" in window.navigator && window.navigator.standalone) ||
      window.matchMedia("(display-mode: standalone)").matches
    ) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleBeforeInstallPrompt = (e: any) => {
    e.preventDefault();
    setDeferredPrompt(e);

    setIsInstalled(true);
    setIsShown(true);
  };

  const handleCloseInstallPrompt = () => {
    setIsShown(false);
    setIsIOS(false);
  };

  const handleAppInstalled = () => {
    setIsInstalled(true);
    setIsShown(false); // 설치 완료 후 메시지를 더 이상 표시하지 않도록 상태를 업데이트
  };

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === "accepted") {
          console.log("사용자가 설치 프롬프트에 동의했습니다.");
        } else {
          console.log("사용자가 설치 프롬프트를 무시했습니다.");
        }

        setDeferredPrompt(null);
      });
    }
  };

  if (!isIOS && !isShown) return null;
  if (isIOS && isInstalled) return null;
  if (isShown || isIOS) {
    const modalRoot =
      typeof window !== "undefined" ? document.getElementById("modal") : null;

    return modalRoot
      ? createPortal(
          <style.Wrapper id="modal_overlay">
            <style.Box>
              <style.Header>
                <style.Logo src={AppLogo} alt="img" />
                궁금한 내 택배!
                <br />
                앱으로 더 빠르게 스캔하세요!
              </style.Header>
              {isIOS ? (
                <style.Desc>
                  <style.Image src={ShareIcon} width={25} />
                  <style.Text>
                    를 클릭해서 홈화면에 추가하기를 통해 설치해주세요
                  </style.Text>
                </style.Desc>
              ) : (
                <style.Button onClick={handleInstallClick}>
                  지금 앱으로 보기
                </style.Button>
              )}
              <style.Footer onClick={handleCloseInstallPrompt}>
                모바일 웹으로 볼게요.
              </style.Footer>
            </style.Box>
          </style.Wrapper>,
          modalRoot
        )
      : null;
  }
  return null;
};

export default InstallPrompt;
