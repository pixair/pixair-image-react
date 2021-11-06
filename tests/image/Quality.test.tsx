import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../../src/component/Image';
import { ConfigurationProvider } from '../../src/context/ConfigurationProvider';

describe('The Image component', () => {
    
    it('Should be able to override the "quality" option of the configuration', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider
                project="my-project"
                quality={100}>

                <Image src='/path/to/image.png' width={50} height={50} quality={85} />
            </ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://my-project.pixair.cloud/images?url=/path/to/image.png&w=64&q=85');
    });
});
