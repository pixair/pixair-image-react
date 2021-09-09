import React from 'react'

export interface ImageProps {
    src: string;
}

export const Image = ({ src }: ImageProps) => {
    return (
        <div className="wrapper">
            <img src={src} />
        </div>
    )
}
