# React Boilerplate

This is my React workflow. Fork or copy the repo.

Components and Containers are under app/COMPONENT/component-name and app/CONTAINER/container-name. There we’ll also keep styles.css for each. Styles are added as className elements, not as style elements.

Adding components or containers:
- Create an exclusive folder for that it.
- Make sure to import it on index.js. Every sub-component folder should have an index.js.

# Functionalities

* ES6
* ES6/React linting
* Production-ready
* Hot module replacement
* CSS modules

# Snippets

Editor of choice is Atom with snippets from https://atom.io/packages/react. I added a functional react component snippet. Mostly I use ```frcc``` and ``rcc6``.

frcc snippet:
**"React: functional react component":
    prefix: "frcc"
    body: "import React, { PropTypes } from 'react'\n\nexport default function $1 (props) {\n\treturn (\n\t\t<div>$1</div>\n\t)\n}"**

# Run

* `npm install`
* `npm run start`
* open localhost:8080
