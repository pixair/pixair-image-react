import React from 'react';
import { render } from '@testing-library/react';
import { Image } from '../../src/component/Image';
import { ConfigurationProvider } from '../../src/context/ConfigurationProvider';

describe('The width of the Image', () => {
    
    it('Should be the smallest size of image sizes and device sizes above the container width', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider
                project="my-project"
                imageSizes={[100, 200, 300]}
                deviceSizes={[400, 500, 600]}>

                <Image src='/path/to/image.png' width={240} height={240} />
            </ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://my-project.pixair.cloud/images?url=/path/to/image.png&w=300&q=75');
    });
    
    it('Should be the highest size if the container size is above image sizes and device sizes', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider
                project="my-project"
                imageSizes={[100, 200, 300]}
                deviceSizes={[400, 500, 600]}>

                <Image src='/path/to/image.png' width={1000} height={240} />
            </ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://my-project.pixair.cloud/images?url=/path/to/image.png&w=600&q=75');
    });
    
    it('Should find the correct width with overlapping widths', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider
                project="my-project"
                imageSizes={[100, 200, 300]}
                deviceSizes={[150, 250, 350]}>

                <Image src='/path/to/image.png' width={123} height={240} />
            </ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://my-project.pixair.cloud/images?url=/path/to/image.png&w=150&q=75');
    });
    
    it('Should find the correct width with disordered widths', () => {

        // WHEN
        const { container } = render(
            <ConfigurationProvider
                project="my-project"
                imageSizes={[400, 200, 600]}
                deviceSizes={[500, 100, 300]}>

                <Image src='/path/to/image.png' width={450} height={240} />
            </ConfigurationProvider>
        );

        // THEN
        expect(container.querySelector('img')?.getAttribute('src')).toEqual('https://my-project.pixair.cloud/images?url=/path/to/image.png&w=500&q=75');
    });
});
