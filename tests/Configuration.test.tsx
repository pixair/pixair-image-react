import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../src/component/Image';
import { ConfigurationProvider } from '../src/context/ConfigurationProvider';

describe('The configuration provider', () => {
    
    it('Should perform nothing with no images', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider project="my-project" quality={75}></ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')).toBeNull();
    });
    
    it('Should be able provide an api url value for all children components', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider project="my-project" quality={75}>
                <Image src='/path/to/image.png' width={50} height={50} />
            </ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://my-project.pixair.cloud/images?url=/path/to/image.png&w=50&q=75');
    });
    
    it('Should be able override a previous configuration provider', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider project="my-project" quality={75}>
                <ConfigurationProvider project="second-project" quality={75}>
                    <Image src='/path/to/image.png' width={50} height={50} />
                </ConfigurationProvider>
            </ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://second-project.pixair.cloud/images?url=/path/to/image.png&w=50&q=75');
    });
});
