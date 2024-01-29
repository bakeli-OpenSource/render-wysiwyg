[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) 

# Render Wysiwyg :rocket

## Usage
You can easily incorporate the RenderWysiwyg component into your React projects by following these simple steps:

### Install the Package
```bash
npm install render-wysiwyg
```
or
```
yarn add render-wysiwyg
```

## Exemple
```html
import React from 'react';
import RenderWysiwyg from 'render-wysiwyg';

const MyComponent: React.FC = () => {
  const content = "<p>This is some <b>HTML</b> content.</p>";
  
  return (
    <div>
      <h1>RenderWysiwyg Example</h1>
      <RenderWysiwyg content={content} />
    </div>
  );
}

export default MyComponent;
```

## Security Note
The RenderWysiwyg component uses DOMPurify to sanitize the HTML content before rendering it. This helps prevent XSS (Cross-Site Scripting) attacks by removing potentially harmful elements and attributes from the content.

However, it's important to note that no sanitization method is foolproof, and it's always a good practice to validate and sanitize user-generated content on the server-side as well.

## Authors

    RED Team
