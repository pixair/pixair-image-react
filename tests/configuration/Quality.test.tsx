import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../../src/component/Image';
import { ConfigurationProvider } from '../../src/context/ConfigurationProvider';

describe('The "quality" option in configuration', () => {
    
    it('Should be able to provide a default value for Image components', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider project="my-project" quality={50}>
                <Image src='/path/to/image.png' width={50} height={50} />
            </ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://my-project.pixair.cloud/images?url=/path/to/image.png&w=64&q=50');
    });
    
    it('Should be able to override a previous configuration', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider project="my-project" quality={50}>
                <ConfigurationProvider project="my-project" quality={25}>
                    <Image src='/path/to/image.png' width={50} height={50} />
                </ConfigurationProvider>
            </ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://my-project.pixair.cloud/images?url=/path/to/image.png&w=64&q=25');
    });
});
