import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../src/component/Image';
// import image from '../src/assets/sea.jpg';

describe('The image component', () => {
    // require('../assets/')
    
    it('Should be able to render', () => {

        // GIVEN
        const image = '/path/to/image.png'

        // WHEN
        const { container } = render(<Image src={image} width={50} height={50} />);

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://example.pixair.cloud/images?url=/path/to/image.png&w=50&q=75');
    });
});
