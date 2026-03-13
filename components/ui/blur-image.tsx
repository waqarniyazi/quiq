"use client"

import React from "react"
import Image from "next/image"

type Props = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  lazy?: boolean
  [key: string]: any
}

export function BlurImage({ src, alt, width = 1200, height = 630, className = "", lazy = true, ...props }: Props) {
  const [loaded, setLoaded] = React.useState(false)
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoad={() => setLoaded(true)}
      className={`${className} transition-all duration-500 ${loaded ? "blur-0 opacity-100" : "blur-lg opacity-70"}`}
      loading={lazy ? "lazy" : "eager"}
      {...props}
    />
  )
}
