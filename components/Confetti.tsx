"use client"

import { useEffect, useRef, useCallback } from "react"
import * as rive from "@rive-app/canvas"

export default function Confetti() {
  const confettiAnimation = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    new rive.Rive({
      src: "/animations.riv",
      artboard: "confetti",
      canvas: confettiAnimation.current as HTMLCanvasElement,
      autoplay: true,
    })
  }, [])

  return (
    <canvas
      ref={confettiAnimation}
      width={window.innerWidth}
      height={window.innerHeight}
      className="absolute pointer-events-none z-50 inset-0"
    />
  )
}