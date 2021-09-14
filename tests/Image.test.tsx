import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../src/component/Image';

describe('The image component', () => {
    
    it('Should be able to render', () => {

        // WHEN
        const { container } = render(<Image src='/path/to/image.png' />);


        // THEN
        const node = container.querySelector('img');
        expect(node?.getAttribute('src')).toEqual('https://api.pixair.io/path/to/image.png');
    });
});
