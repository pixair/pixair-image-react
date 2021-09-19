import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../src/component/Image';

describe('The image component', () => {
    
    it('Should be able to render', () => {

        // WHEN
        const { container } = render(<Image src='/path/to/image.png' width={50} height={50} />);

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('/images?url=/path/to/image.png&w=50&q=75');
    });
    
    it('Should be able to have a relative path', () => {

        // WHEN
        const { container } = render(<Image src='../../path/to/image.png' width={50} height={50} />);

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('/images?url=../../path/to/image.png&w=50&q=75');
    });
    
    it('Should be able to have an absolute path', () => {

        // WHEN
        const { container } = render(<Image src='http://my-domain/path/to/image.png' width={50} height={50} />);

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('/images?url=http://my-domain/path/to/image.png&w=50&q=75');
    });
    
    it('Should be able to have a alt attribute', () => {

        // WHEN
        const { container } = render(<Image src='/path/to/image.png' width={50} height={50} alt="my-image" />);

        // THEN
        expect(container.querySelector('img')?.getAttribute('alt')).toEqual('my-image');
    });
    
    it('Should be able to override the api options of the configuration', () => {

        // WHEN
        const { container } = render(<Image src='/path/to/image.png' width={50} height={50} api="https://custom-host" />);

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://custom-host?url=/path/to/image.png&w=50&q=75');
    });
    
    it('Should be able to override the quality options of the configuration', () => {

        // WHEN
        const { container } = render(<Image src='/path/to/image.png' width={50} height={50} quality={85} />);

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('/images?url=/path/to/image.png&w=50&q=85');
    });
});
