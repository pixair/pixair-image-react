import React, { useContext, createContext, useMemo } from "react";

export interface ConfigurationProviderProps {
    children?: any;

    /**
     * The project name used to build the Pixair endpoint.
     */
    project: string;

    /**
     * The requested quality of images.
     * Default: 75% of quality
     */
    quality?: number;

    /**
     * Pre-configured image sizes.
     * Default: 16px, 32px, 48px, 64px, 96px, 128px, 256px, 384px
     */
    imageSizes?: number[];

    /**
     * Pre-configured device sizes
     * Default: 640px, 750px, 828px, 1080px, 1200px, 1920px, 2048px, 3840px
     */
    deviceSizes?: number[];
};

export const ConfigurationContext = createContext({
    project: 'example',
    quality: 75,
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
});

export function ConfigurationProvider({ children, ...props }: ConfigurationProviderProps) {
    const configuration = useContext(ConfigurationContext);
    const configurationContext = useMemo(() => {
        return { ...configuration, ...props };
    }, [
        props,
        configuration,
    ]);

    if (!children) {
        return null;
    }

    return <ConfigurationContext.Provider value={configurationContext}>{children}</ConfigurationContext.Provider>;
}
