import { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `window.$crisp=[];window.CRISP_WEBSITE_ID="48129f5d-0c15-463d-a368-8da6e9fac41e";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default CrispChat;
