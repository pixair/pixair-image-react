import React from "react";
import { render } from '@testing-library/react';
import { Image } from "./Image";

describe("The image component", () => {
    it("Should be able to render", () => {
        const { container } = render(<Image src="/path/to/image.png" />);

        const node = container.querySelector('img');
        expect(node?.getAttribute('src')).toEqual('/path/to/image.png');
    });
});
