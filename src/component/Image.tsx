import React, { useContext } from 'react'
import { ConfigurationContext } from '../context/ConfigurationProvider';

export interface ImageProps {
    src: string;
}

export const Image = ({ src }: ImageProps) => {
    const configuration = useContext(ConfigurationContext);
    const newSrc = (src[0] === '/')
        ? configuration.host + src
        : configuration.host + '/' + src;
    return (
        <div className="wrapper">
            <img src={newSrc} />
        </div>
    )
}
