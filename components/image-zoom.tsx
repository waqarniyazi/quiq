"use client"

import React, { useRef, useEffect, useCallback } from "react"
import mediumZoom, { type Zoom } from "medium-zoom"

type ImageZoomProps = {
  children: React.ReactNode
}

export default function ImageZoom({ children }: ImageZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const zoomRef = useRef<Zoom | null>(null)

  const attachZoom = useCallback(() => {
    if (!containerRef.current) return
    const images = containerRef.current.querySelectorAll("img")
    if (!zoomRef.current) {
      zoomRef.current = mediumZoom(images, {
        background: "rgba(0, 0, 0, 0.9)",
        margin: 24,
      })
    } else {
      zoomRef.current.attach(images)
    }
  }, [])

  useEffect(() => {
    attachZoom()
    return () => {
      zoomRef.current?.detach()
    }
  }, [attachZoom])

  return <div ref={containerRef}>{children}</div>
}
