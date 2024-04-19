import React, { FC } from 'react'

interface DynamicRenderImgProps {
  src: string
  alt: string
  className: string
}

const DynamicRenderImg: FC<DynamicRenderImgProps> = ({
  className,
  src,
  alt,
}) => {
  return <img className={className} src={src} alt={alt} />
}

export default DynamicRenderImg
