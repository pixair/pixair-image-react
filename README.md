# Pixair Image React Library

![tests status](https://github.com/pixair/pixair-image-react/actions/workflows/tests.yml/badge.svg)

This project provide you React components that helps you to use the Pixair API.

## Installation

Inside your react project, add the following dependency

```
yarn add pixair-image-react
```

Inside your root component, add the following provider:

```
import { ConfigurationProvider } from 'pixair-image-react';

// ...

<ConfigurationProvider api="https://vincent-api.pixair.io" quality={75}>
    // Children components
</ConfigurationProvider>
```

Then, in one of your component, you'll be able to use:

```
import { Image } from 'pixair-image-react';

// ...

<Image src="/path/to/image.png" width={50} height={50}/>
```

This image will be automatically optimize by the Pixair API.

## Contribute

You can contribute to this project by doing pull requests on this repository.

Make sure to add automated tests and related documentation to your new feature.
