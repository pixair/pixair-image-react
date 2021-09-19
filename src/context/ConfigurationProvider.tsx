import React, { useContext, createContext, useMemo } from "react";

export interface ConfigurationProviderProps {
    children?: any;

    /**
     * The Pixair api url.
     */
    api: string;

    /**
     * The requested quality of images.
     */
    quality: number;
};

export const ConfigurationContext = createContext({
    api: '/images',
    quality: 75,
});

export default function ConfigurationProvider({ children, ...props }: ConfigurationProviderProps) {
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
