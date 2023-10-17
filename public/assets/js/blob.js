import {
    spline,
    pointsInPath,
    createCoordsTransformer
  } from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.1";

  const circlePath = document.getElementById("mask-path");

  const circlePath2 = document.getElementById("mask-path-2");

  function createLiquidPath(path, options) {
    const svgPoints = pointsInPath(path, options.detail);
    const originPoints = svgPoints.map(({ x, y }) => ({ x, y }));
    const liquidPoints = svgPoints.map(({ x, y }) => ({ x, y }));
  
    const mousePos = { x: 0, y: 0 };
    const transformCoords = createCoordsTransformer(path.closest("svg"));
    const pointDistance = Math.hypot(
      originPoints[0].x - originPoints[1].x,
      originPoints[0].y - originPoints[1].y
    );
    const maxDist = {
      x: options.axis.includes("x") ? pointDistance / 2 : 0,
      y: options.axis.includes("y") ? pointDistance / 2 : 0
    };
  
    gsap.ticker.add(() => {
      gsap.set(path, {
        attr: {
          d: spline(liquidPoints, options.tension, options.close)
        }
      });
    });
  
    window.addEventListener("mousemove", (e) => {
      const { x, y } = transformCoords(e);
  
      mousePos.x = x;
      mousePos.y = y;
  
      liquidPoints.forEach((point, index) => {
        const pointOrigin = originPoints[index];
        const distX = Math.abs(pointOrigin.x - mousePos.x);
        const distY = Math.abs(pointOrigin.y - mousePos.y);
  
        if (distX <= options.range.x && distY <= options.range.y) {
          const difference = {
            x: pointOrigin.x - mousePos.x,
            y: pointOrigin.y - mousePos.y
          };
  
          const target = {
            x: pointOrigin.x + difference.x,
            y: pointOrigin.y + difference.y
          };
  
          const x = gsap.utils.clamp(
            pointOrigin.x - maxDist.x,
            pointOrigin.x + maxDist.x,
            target.x
          );
  
          const y = gsap.utils.clamp(
            pointOrigin.y - maxDist.y,
            pointOrigin.y + maxDist.y,
            target.y
          );
  
          gsap.to(point, {
            x: x,
            y: y,
            ease: "sine",
            overwrite: true,
            duration: 0.175,
            onComplete() {
              gsap.to(point, {
                x: pointOrigin.x,
                y: pointOrigin.y,
                ease: "elastic.out(1, 0.3)",
                duration: 1.25
              });
            }
          });
        }
      });
    });
  }
  
  const prefersReducedMotionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );
  
  if (prefersReducedMotionQuery && !prefersReducedMotionQuery.matches) {
    createLiquidPath(circlePath, {
      detail: 16,
      tension: 1,
      close: true,
      range: {
        x: 20,
        y: 20
      },
      axis: ["x", "y"]
    });
    createLiquidPath(circlePath2, {
        detail: 18,
        tension: 1,
        close: true,
        range: {
          x: 20,
          y: 20
        },
        axis: ["x", "y"]
      });
  }