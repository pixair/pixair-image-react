import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../../src/component/Image';

describe('The Image component', () => {
    
    it('Should be able to have an alt attribute', () => {

        // WHEN
        const { container } = render(<Image src='/path/to/image.png' width={50} height={50} alt="my-image" />);

        // THEN
        expect(container.querySelector('img')?.getAttribute('alt')).toEqual('my-image');
    });
});
