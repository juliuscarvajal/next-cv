import { useEffect } from "react";
import { clientCaptchaUrl } from "../constants/constants";

export function useRecaptcha() {
  useEffect(() => {
    (() => {
      if (document.getElementById("reCAPTCHA")) {
        return;
      }
      const script = document.createElement("script");
      script.id = "reCAPTCHA";
      script.src = clientCaptchaUrl;
      script.async = true;
      script.onload = () => {
        console.log(">>> reCAPTCHA script loaded");
      };
      script.onerror = () => {
        console.error(">>> Failed to load reCAPTCHA script");
      };
      document.head.appendChild(script);
    })();
  });
}
