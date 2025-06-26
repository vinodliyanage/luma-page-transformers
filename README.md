# Luma Page Transformers

![npm](https://img.shields.io/npm/v/luma-page-transformers)
![license](https://img.shields.io/npm/l/luma-page-transformers)

A collection of modular page transformers for the [Luma Bookmark Manager](https://github.com/vinodliyanage/luma-web-app). These transformers help standardize and clean up metadata—such as title, description, image, favicon, and URL—when saving bookmarks from various websites.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [NPM Package](#npm-package)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Domain-Specific Transformers:** Customize how metadata is extracted and transformed for different websites.
- **Consistent Metadata:** Ensure your bookmarks have clean, uniform data.
- **Extensible:** Easily add new transformers for additional domains.
- **Plug-and-Play:** Seamlessly integrates with the Luma Bookmark Manager.

## How It Works

Each transformer is responsible for transforming the following fields from a web page:

- `title`
- `description`
- `image`
- `favicon`
- `url`

For example, a YouTube transformer can remove notification counts (like `(2)`) from the page title, so your bookmark title is simply `My Video Title`.

## Installation

You can install the package via npm:

```bash
npm install luma-page-transformers
```

Alternatively, clone the repository:

```bash
git clone https://github.com/vinodliyanage/luma-page-transformers.git
cd luma-page-transformers
```

## Usage

Import and use a transformer in your project:

```js
import getTransformer from "luma-page-transformers";

// Example: Get a transformer for a specific hostname
const transformer = getTransformer("youtube.com");

// Transform page metadata
const cleanTitle = transformer.title("(2) My Video Title"); // Output: 'My Video Title'
```

You can add new domain-specific transformers in the `domains/` directory.

## NPM Package

The package is available on npm: [luma-page-transformers](https://www.npmjs.com/package/luma-page-transformers)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For support or inquiries, please contact [vinodsliyanage@gmail.com](mailto:vinodsliyanage@gmail.com).

---

**Happy bookmarking!**
