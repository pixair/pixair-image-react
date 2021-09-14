import React, { useContext, createContext, useMemo } from "react";

export interface ConfigurationProviderProps {
    children?: React.ReactChild;
    host: string;
};

export const ConfigurationContext = createContext({
    host: 'https://api.pixair.io'
});

export default function ConfigurationProvider(props: ConfigurationProviderProps) {
    const configuration = useContext(ConfigurationContext);
    const configurationContext = useMemo(() => ({ ...props, ...configuration }), [
        props,
        configuration,
    ]);

    if (!props.children) {
        return null;
    }

    return <ConfigurationContext.Provider value={configurationContext}>{props.children}</ConfigurationContext.Provider>;
}
