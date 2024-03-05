import { useEffect, useRef, useCallback } from "react";

const IdentifyCode = ({
  identifyCode = "123456",
  fontSizeMin = 25,
  fontSizeMax = 25,
  colorMin = 50,
  colorMax = 160,
  lineColorMin = 100,
  lineColorMax = 280,
  contentWidth = 150,
  contentHeight = 40
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const transparent = () => "rgb(255,255,255)";

  const randomNum = useCallback((min: number, max: number) => Math.floor(Math.random() * (max - min) + min), []);

  const randomColor = useCallback(
    (min: number, max: number) => `rgb(${randomNum(min, max)},${randomNum(min, max)},${randomNum(min, max)})`,
    [randomNum]
  );

  const drawText = useCallback(
    (ctx: CanvasRenderingContext2D, txt: string, i: number) => {
      ctx.fillStyle = randomColor(colorMin, colorMax);
      ctx.font = `${randomNum(fontSizeMin, fontSizeMax)}px SimHei`;
      const x = (i + 1) * (contentWidth / (identifyCode.length + 1));
      const y = randomNum(fontSizeMax, contentHeight - 5);
      const deg = randomNum(-10, 10);
      ctx.translate(x, y);
      ctx.rotate((deg * Math.PI) / 180);
      ctx.fillText(txt, 0, 0);
      ctx.rotate((-deg * Math.PI) / 180);
      ctx.translate(-x, -y);
    },
    [colorMin, colorMax, fontSizeMin, fontSizeMax, contentWidth, identifyCode.length, contentHeight, randomColor, randomNum]
  );

  const drawLine = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      for (let i = 0; i < 8; i++) {
        ctx.strokeStyle = randomColor(lineColorMin, lineColorMax);
        ctx.beginPath();
        ctx.moveTo(randomNum(0, contentWidth), randomNum(0, contentHeight));
        ctx.lineTo(randomNum(0, contentWidth), randomNum(0, contentHeight));
        ctx.stroke();
      }
    },
    [lineColorMin, lineColorMax, contentWidth, contentHeight, randomColor, randomNum]
  );

  const drawDot = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      for (let i = 0; i < 100; i++) {
        ctx.fillStyle = randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(randomNum(0, contentWidth), randomNum(0, contentHeight), 1, 0, 2 * Math.PI);
        ctx.fill();
      }
    },
    [contentWidth, contentHeight, randomColor, randomNum]
  );

  const drawPic = useCallback(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.textBaseline = "bottom";
    ctx.fillStyle = transparent();
    ctx.fillRect(0, 0, contentWidth, contentHeight);

    for (let i = 0; i < identifyCode.length; i++) {
      drawText(ctx, identifyCode[i], i);
    }

    drawLine(ctx);
    drawDot(ctx);
  }, [drawText, drawLine, drawDot, identifyCode, contentWidth, contentHeight]);

  useEffect(() => {
    drawPic();
  }, [drawPic]);

  return <canvas id="s-canvas" width={contentWidth} height={contentHeight} ref={canvasRef}></canvas>;
};

export default IdentifyCode;
