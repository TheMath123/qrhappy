import React, { useEffect, useState } from 'react';
import QRCode from '../components/qrcode';
import EQRCode from "easyqrcodejs";

import smile from '../assets/smile.png';

export default function GenerateQRCode(){
  const [options, setOptions] = useState({})

  useEffect(() => {
    setConfig()
  }, [])

  function setConfig(){
    setOptions({
    text: "https://google.com",
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : EQRCode.CorrectLevel.H, // L, M, Q, H
    logo: smile,
    logoWidth: 100,
    logoHeight: 100
    });
  }

  let color = 0;

  function mudaOp(){
    let dark = `#00000${color}`;
    setOptions({
      text: "https://google.com",
      width: 256,
      height: 256,
      colorDark : dark,
      colorLight : "#ffffff",
      correctLevel : EQRCode.CorrectLevel.H, // L, M, Q, H
      logo: smile,
      logoWidth: 100,
      logoHeight: 100
      });

      color++;
  }

  return(
    <div>
      <QRCode options={options} />
      <button onClick={mudaOp}>Click</button>
    </div>
  )
}
