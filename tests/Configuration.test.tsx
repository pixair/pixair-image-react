import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../src/component/Image';
import ConfigurationProvider from '../src/context/ConfigurationProvider';

describe('The configuration provider', () => {
    
    it('Should be able provide default ', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider host="https://host-from-provider/" >
                <Image src='/path/to/image.png' />
            </ConfigurationProvider>
        );


        // THEN
        const node = container.querySelector('img');
        expect(node?.getAttribute('src')).toEqual('https://host-from-provider/path/to/image.png');
    });
});
