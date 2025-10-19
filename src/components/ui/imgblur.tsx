'use client'
import Image from 'next/image'

export default function ImgBlur({
    src,
    alt,
    width,
    height,
}: {
    src: string
    alt: string
    width: number
    height: number
}) {
    return (
        <div className="relative group">
            <div
                className="flex justify-center items-center transition-all duration-300 group-hover:blur-2xl"
                style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: `${width}px`,
                    height: `${height}px`,
                }}
            ></div>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="rounded-lg hover:scale-105 transition-all duration-300 absolute top-0 left-0"
            />
        </div>
    )
}
