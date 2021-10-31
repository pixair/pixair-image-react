import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../../src/component/Image';
import { ConfigurationProvider } from '../../src/context/ConfigurationProvider';

describe('The "project" option in configuration', () => {
    
    it('Should be able to provide a default value for Image components', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider project="my-project">
                <Image src='/path/to/image.png' width={50} height={50} />
            </ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://my-project.pixair.cloud/images?url=/path/to/image.png&w=64&q=75');
    });
    
    it('Should be able to override a previous configuration', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider project="my-project">
                <ConfigurationProvider project="second-project">
                    <Image src='/path/to/image.png' width={50} height={50} />
                </ConfigurationProvider>
            </ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://second-project.pixair.cloud/images?url=/path/to/image.png&w=64&q=75');
    });
});
