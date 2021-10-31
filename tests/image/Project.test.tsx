import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../../src/component/Image';
import { ConfigurationProvider } from '../../src/context/ConfigurationProvider';

describe('The Image component', () => {
    
    it('Should be able to override the "project" option of the configuration', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider
                project="my-project">

                <Image src='/path/to/image.png' width={50} height={50} project="other-project" />
            </ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://other-project.pixair.cloud/images?url=/path/to/image.png&w=64&q=75');
    });
});
