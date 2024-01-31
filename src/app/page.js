/*THIS IS THE HOMEPAGE OF THE APPLICATION */

export default function Home() {
  return (
    <h1>Hello World</h1>
  )
}
 /*
In a Next.js application like yours, there isn't a traditional root HTML file like `index.html` you would find in a static website. Instead, the root of your application is likely the `page.js` file located in the [`src/app/`](command:_github.copilot.openRelativePath?%5B%22src%2Fapp%2F%22%5D "src/app/") directory. This is typically where the main application component is defined in a React application. 
However, if you're looking for where the HTML document is set up, Next.js handles this in a special `_document.js` file. If you haven't created this file, Next.js uses a default one. If you need to customize the HTML document, you can create a new `_document.js` file in your `pages` directory.
Here's an example of what a custom `_document.js` file might look like:

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument

In this file, you can customize the `<Html>`, `<Head>`, and `<body>` tags, and Next.js will take care of injecting your application's content with the `<Main />` and `<NextScript />` components.*/