 # Get started

This page will explain you how to get started with Pixair.

## Installation

Inside your react project, add the following dependency

```
yarn add pixair-image-react
```

## Usage

Inside your root component, add the following provider:

```
import { ConfigurationProvider } from 'pixair-image-react';

// ...

<ConfigurationProvider project="my-project" quality={75}>
    // Children components
</ConfigurationProvider>
```

Then, in one of your component, you'll be able to use:

```
import { Image } from 'pixair-image-react';

// ...

<Image src="/path/to/image.png" width={50} height={50} />
```

This image will be automatically optimize by the Pixair API.

