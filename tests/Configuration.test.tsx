import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../src/component/Image';
import ConfigurationProvider from '../src/context/ConfigurationProvider';

describe('The configuration provider', () => {
    
    it('Should perform nothing with no images', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider api="https://host" quality={75}></ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')).toBeNull();
    });
    
    it('Should be able provide an api url value for all children components', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider api="https://my-api/images" quality={75}>
                <Image src='/path/to/image.png' width={50} height={50} />
            </ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://my-api/images?url=/path/to/image.png&w=50&q=75');
    });
    
    it('Should be able override a previous configuration provider', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider api="https://first-host" quality={75}>
                <ConfigurationProvider api="https://second-host" quality={75}>
                    <Image src='/path/to/image.png' width={50} height={50} />
                </ConfigurationProvider>
            </ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://second-host?url=/path/to/image.png&w=50&q=75');
    });
});
