import React, { useContext } from 'react'
import { ConfigurationContext } from '../context/ConfigurationProvider';

export interface ImageProps {

    /**
     * Image source, could be an absolute or a relative path.
     */
    src: string;

    /**
     * Set the width of the image element.
     */
    width: number;

    /**
     * Set the height of the image element.
     */
    height: number;

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
    const configuration = useContext(ConfigurationContext);
    const apiUrl = buildPixairEndpoint(project ?? configuration.project);
    const imageQuality = quality ?? configuration.quality;
    const imageSrc = `${apiUrl}?url=${src}&w=${width}&q=${imageQuality}`;

    return (
        <img src={imageSrc} {...imageAttibutes} />
    )
}

function buildPixairEndpoint(project: string): string {
    return `https://${project}.pixair.cloud/images`;
}
