import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../src/component/Image';
import ConfigurationProvider from '../src/context/ConfigurationProvider';

describe('The configuration provider', () => {
    
    it('Should perform nothing with no images', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider host="https://host"></ConfigurationProvider>
        );

        // THEN
        const node = container.querySelector('img');
        expect(node).toBeNull();
    });
    
    it('Should be able provide host value for an Image components', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider host="https://host-from-provider">
                <Image src='/path/to/image.png' />
            </ConfigurationProvider>
        );

        // THEN
        const node = container.querySelector('img');
        expect(node?.getAttribute('src')).toEqual('https://host-from-provider/path/to/image.png');
    });
    
    it('Should not add a double slash', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider host="https://domain-with-slash/">
                <Image src='/path/with/slash.png' />
            </ConfigurationProvider>
        );

        // THEN
        const node = container.querySelector('img');
        expect(node?.getAttribute('src')).toEqual('https://domain-with-slash/path/with/slash.png');
    });
    
    it('Should add a slash when no slash', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider host="https://domain-without-slash">
                <Image src='path/without/slash.png' />
            </ConfigurationProvider>
        );

        // THEN
        const node = container.querySelector('img');
        expect(node?.getAttribute('src')).toEqual('https://domain-without-slash/path/without/slash.png');
    });
    
    it('Should be able override a previous configuration provider', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider host="https://first-host">
                <ConfigurationProvider host="https://second-host">
                    <Image src='path/to/image.png' />
                </ConfigurationProvider>
            </ConfigurationProvider>
        );

        // THEN
        const node = container.querySelector('img');
        expect(node?.getAttribute('src')).toEqual('https://second-host/path/to/image.png');
    });
});
