import React, { useEffect, useState } from "react";
import EQRCode from "easyqrcodejs";

export default function QRCode(values: any) {
  const code = React.createRef<HTMLDivElement>();
  const [flagRender, setFlagRender] = useState(false)

  useEffect(() => {
    if(flagRender){
      qrcodeConfig()
      setFlagRender(false)
    }
    setFlagRender(true)
  }, [flagRender, qrcodeConfig]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function qrcodeConfig(){
    new EQRCode(code.current, values.options);
  }

  return (
    <div ref={code} ></div>
  );
}
