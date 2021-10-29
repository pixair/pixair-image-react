import React, { useEffect, useContext, useState } from 'react'
import { ConfigurationContext } from '../context/ConfigurationProvider';
import { getImageSize } from '../utils';

export interface ImageProps {

    /**
     * Image source, could be an absolute or a relative path.
     * It could also be a base64 string.
     */
    src: string;

    /**
     * Set the width of the image element.
     */
    width?: number;

    /**
     * Set the height of the image element.
     */
    height?: number;

    /**
     * Tha alt text of the image element.
     */
    alt?: string;

    /**
     * Override the api option given by the ConfigurationProvider.
     */
    project?: string;

    /**
     * Override the quality option given by the ConfigurationProvider.
     */
    quality?: number;
}

/**
 * Image component, automatically optimize the content of the picture by using the pixair api.
 */
export const Image = ({
    src,
    width,
    height,
    quality,
    project,
    ...imageAttibutes
}: ImageProps) => {
    
    const [containerWidth, setContainerWidth] = useState(width)
    const [containerHeight, setContainerHeight] = useState(height)

    useEffect(() => {
        console.log('effect', src);
        if (isBase64(src)) {
            console.log('base64');
            initSizeFromBase64();
        }
    }, [src])

    async function initSizeFromBase64() {
        const imageSize = await getImageSize(src as string);
        setContainerWidth(imageSize.width)
        setContainerHeight(imageSize.height)
    }

    const configuration = useContext(ConfigurationContext);
    const apiUrl = buildPixairEndpoint(project ?? configuration.project);
    const imageQuality = quality ?? configuration.quality;
    const imageSrc = `${apiUrl}?url=${src}&w=${width}&q=${imageQuality}`;

    return (
        <div style={{ width: containerWidth, height: containerHeight, background: 'red' }}>
            <img src={imageSrc} {...imageAttibutes} />
        </div>
    )
}

function isBase64(value: string): boolean {
    return value.match('/^data\:image\/png\;base64/g') !== null;
}

function buildPixairEndpoint(project: string): string {
    return `https://${project}.pixair.cloud/images`;
}
