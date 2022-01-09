import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../src/component/Image';

describe('The image container', () => {
    
    it('Should get the size of the image', () => {

        // WHEN
        const { container } = render(<Image src='/path/to/image.png' width={50} height={50} />);

        // THEN
        expect(container.querySelector('div')?.getAttribute('style')).toEqual('width: 50px; height: 50px;');
    });
    
    it('Should be able to update the image width', () => {

        // WHEN
        const { container, rerender } = render(<Image src='/path/to/image.png' width={50} height={50} />);

        // WHEN
        rerender(<Image src='/path/to/image.png' width={100} height={50} />)

        // THEN
        expect(container.querySelector('div')?.getAttribute('style')).toEqual('width: 100px; height: 50px;');
    });
    
    it('Should be able to update the image height', () => {

        // WHEN
        const { container, rerender } = render(<Image src='/path/to/image.png' width={50} height={50} />);

        // WHEN
        rerender(<Image src='/path/to/image.png' width={50} height={100} />)

        // THEN
        expect(container.querySelector('div')?.getAttribute('style')).toEqual('width: 50px; height: 100px;');
    });
});
