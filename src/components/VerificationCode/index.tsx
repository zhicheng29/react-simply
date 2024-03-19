import React, { useEffect, useRef, useCallback } from "react";

// 默认值
const defaultIdentifyCodeProps = {
  identifyCode: "123456", // 验证码
  fontSizeMin: 25, // 字体最小值
  fontSizeMax: 25, // 字体最大值
  colorMin: 50, // 颜色最小值
  colorMax: 160, // 颜色最大值
  lineColorMin: 100, // 线条颜色最小值
  lineColorMax: 280, // 线条颜色最大值
  contentWidth: 150, // 容器宽度
  contentHeight: 40 // 容器高度
};

type IdentifyCodePropsType = Partial<typeof defaultIdentifyCodeProps>;

const IdentifyCode: React.FC<IdentifyCodePropsType> = props => {
  const { identifyCode, fontSizeMin, fontSizeMax, colorMin, colorMax, lineColorMin, lineColorMax, contentWidth, contentHeight } =
    { ...defaultIdentifyCodeProps, ...props };

  // 画布引用实例
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 透明颜色
  const transparent = () => "rgb(255,255,255)";
  // 生成指定范围内的随机数
  const randomNum = useCallback((min: number, max: number) => Math.floor(Math.random() * (max - min) + min), []);
  // 生成随机颜色
  const randomColor = useCallback(
    (min: number, max: number) => `rgb(${randomNum(min, max)},${randomNum(min, max)},${randomNum(min, max)})`,
    [randomNum]
  );
  // 绘制文字及样式
  const drawText = useCallback(
    (ctx: CanvasRenderingContext2D, txt: string, i: number) => {
      // 生成随机文本颜色
      ctx.fillStyle = randomColor(colorMin, colorMax);
      // 生成随机字体大小，设置字体类型
      ctx.font = `${randomNum(fontSizeMin, fontSizeMax)}px SimHei`;
      // 计算文本的横坐标
      const x = (i + 1) * (contentWidth / (identifyCode.length + 1));
      // 生成随机文本的纵坐标
      const y = randomNum(fontSizeMax, contentHeight - 5);
      // 生成随机旋转角度
      const deg = randomNum(-10, 10);
      // 平移坐标原点
      ctx.translate(x, y);
      // 旋转
      ctx.rotate((deg * Math.PI) / 180);
      // 绘制文本
      ctx.fillText(txt, 0, 0);
      // 恢复旋转
      ctx.rotate((-deg * Math.PI) / 180);
      // 恢复平移
      ctx.translate(-x, -y);
    },
    [colorMin, colorMax, fontSizeMin, fontSizeMax, contentWidth, identifyCode.length, contentHeight, randomColor, randomNum]
  );

  // 绘制干扰线
  const drawLine = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      for (let i = 0; i < 8; i++) {
        // 随机线条颜色
        ctx.strokeStyle = randomColor(lineColorMin, lineColorMax);
        ctx.beginPath();
        ctx.moveTo(randomNum(0, contentWidth), randomNum(0, contentHeight));
        // 随机线条终点
        ctx.lineTo(randomNum(0, contentWidth), randomNum(0, contentHeight));
        // 绘制
        ctx.stroke();
      }
    },
    [lineColorMin, lineColorMax, contentWidth, contentHeight, randomColor, randomNum]
  );

  // 绘制干扰点
  const drawDot = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      for (let i = 0; i < 100; i++) {
        // 随机点颜色
        ctx.fillStyle = randomColor(0, 255);
        ctx.beginPath();
        // 随机点坐标
        ctx.arc(randomNum(0, contentWidth), randomNum(0, contentHeight), 1, 0, 2 * Math.PI);
        // 绘制
        ctx.fill();
      }
    },
    [contentWidth, contentHeight, randomColor, randomNum]
  );

  // 绘制验证码图片
  const drawPic = useCallback(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    // 文本基线设置
    ctx.textBaseline = "bottom";
    // 透明背景
    ctx.fillStyle = transparent();
    // 绘制背景
    ctx.fillRect(0, 0, contentWidth, contentHeight);
    for (let i = 0; i < identifyCode.length; i++) {
      // 绘制文字
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
