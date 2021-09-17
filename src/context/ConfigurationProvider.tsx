import React, { useContext, createContext, useMemo } from "react";

export interface ConfigurationProviderProps {
    children?: any;
    host: string;
};

export const ConfigurationContext = createContext({
    host: 'https://api.pixair.io'
});

export default function ConfigurationProvider(props: ConfigurationProviderProps) {
    const newConfiguration = {
        host: props.host ? props.host.replace(/\/$/, '') : '',
    }

    const configuration = useContext(ConfigurationContext);
    const configurationContext = useMemo(() => {
        return { ...configuration, ...newConfiguration };
    }, [
        props,
        configuration,
    ]);

    if (!props.children) {
        return null;
    }

    return <ConfigurationContext.Provider value={configurationContext}>{props.children}</ConfigurationContext.Provider>;
}
