# 1-1 Explore VSCode and what is HTML

VSCode (Visual Studio Code) is a popular and free source code editor developed by Microsoft. It is widely used by developers for various programming languages, including HTML, CSS, JavaScript, and more. VSCode offers a wide range of features, such as code highlighting, code completion, debugging support, version control integration, and an extensive library of extensions that enhance its functionality.

HTML (HyperText Markup Language) is the standard markup language used to create the structure and content of web pages. It provides a set of elements or tags that are used to define the different components of a web page, such as headings, paragraphs, images, links, lists, forms, and more. HTML documents are usually saved with a ".html" extension and can be viewed in web browsers like Chrome, Firefox, or Edge.

## 1-2 HTML Text: Creating paragraphs, Text formatting (b, i, strong, em)

In HTML, you can create paragraphs using the `<p>` tag, which represents a block-level element for defining paragraphs. Here's an example:

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

To format text, you can use the following tags:

- `<b>`: Bold text
- `<i>`: Italic text
- `<strong>`: Strong emphasis (typically displayed as bold)
- `<em>`: Emphasized text (typically displayed as italic)

Example:

```html
<p>This is <b>bold</b> text and <i>italic</i> text.</p>
<p>This is <strong>strong</strong> and <em>emphasized</em> text.</p>
```

## 1-3 HTML Text: Headings, small, and inline vs block (div, span)

HTML provides six levels of headings, `<h1>` to `<h6>`, where `<h1>` represents the highest level of heading and `<h6>` the lowest. Headings are block-level elements, meaning they create a new block on the page.

Example:

```html
<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading 4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6</h6>
```

The `<small>` tag is used to indicate smaller text. It doesn't change the font size but indicates that the text is of minor importance or a smaller note.

```html
<p>This is a normal text.</p>
<p><small>This is smaller text.</small></p>
```

`<div>` and `<span>` are both container elements, but they have different purposes. `<div>` is a block-level container, which means it typically creates a new block or section on the page, whereas `<span>` is an inline container that wraps around a specific part of the text without breaking the flow.

Example:

```html
<div>This is a block-level container.</div>
<p>This is some text <span>with an inline container</span>.</p>
```

## 1-4 HTML List: Container tag, list tags (ol, ul, li), line break, button

HTML provides three main list types: ordered lists (`<ol>`), unordered lists (`<ul>`), and description lists (`<dl>`).

- Ordered List (`<ol>`): Represents a numbered list.

```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

- Unordered List (`<ul>`): Represents a bullet-point list.

```html
<ul>
  <li>Item A</li>
  <li>Item B</li>
  <li>Item C</li>
</ul>
```

- List Item (`<li>`): Represents an individual list item for both ordered and unordered lists.

Line break can be achieved using the `<br>` tag:

```html
<p>This is a line of text.<br>This is another line of text.</p>
```

Buttons can be created using the `<button>` tag:

```html
<button>Click Me</button>
```

## 1-5 HTML Link: Creating links with the anchor tag and its attributes (href, target)

HTML links are created using the anchor tag `<a>`, and they allow users to navigate from one page to another or within the same page.

The `href` attribute specifies the URL or destination of the link:

```html
<a href="https://www.example.com">Visit Example</a>
```

The `target` attribute determines how the link should be opened:

- `_self`: Opens the link in the same tab or window (default behavior).
- `_blank`: Opens the link in a new tab or window.
- `_parent`: Opens the link in the parent frame (iframes).
- `_top`: Opens the link in the full body of the window.

Example:

```html
<a href="https://www.example.com" target="_blank">Visit Example</a>
```

## 1-6 HTML Image: Display online image, local image, folder image

To display an image in HTML, use the `<img>` tag and specify the `src` attribute with the image file's URL or file path.

Display an online image:

```html
<img src="https://www.example.com/image.jpg" alt="Online Image">
```

Display a local image:

```html
<img src="image.jpg" alt="Local Image">
```

If the image is in a subfolder named "images":

```html
<img src="images/image.jpg" alt="Folder Image">
```

The `alt` attribute provides alternative text that is displayed if the image cannot be loaded or for accessibility purposes.

## 1-7 HTML Form: input types, buttons, select, option, login form

HTML forms are used to collect user input. Various form elements can be used, such as text fields, buttons, dropdown menus, and more.

Text input field:

```html
<input type="text" name="username" placeholder="Enter your username">
```

Password input field (for passwords):

```html
<input type="password" name="password" placeholder="Enter your password">
```

Submit button (to submit the form data):

```html
<input type="submit" value="Submit">
```

Select dropdown menu with options:

```html
<select name="gender">
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>
```

Login form example:

```html
<form action="/login" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <input type="submit" value="Login">
</form>
```

## 1-8 HTML Structure: Doctype, html, head, meta, title, body

The basic structure of an HTML document includes the following components:

```html
<!DOCTYPE html> <!-- Document type declaration -->
<html> <!-- Root element of the HTML document -->

<head> <!-- Contains metadata

 and information about the document -->
  <meta charset="UTF-8"> <!-- Character encoding for the document -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Viewport settings for responsive design -->
  <title>Page Title</title> <!-- Title of the document, displayed in the browser tab -->
</head>

<body> <!-- Contains the visible content of the document -->
  <h1>Hello, World!</h1>
  <p>This is a sample HTML page.</p>
</body>

</html>
```

## 1-9 HTML Overview: Basic HTML concepts and practice task

The overview of basic HTML concepts includes:

- Tags: HTML elements are defined by tags, which come in pairs (opening and closing tags) or are self-closing. Tags are enclosed within angle brackets, e.g., `<tagname>`.

- Attributes: Tags can have attributes that provide additional information or configuration. Attributes are placed inside the opening tag, e.g., `<tagname attribute="value">`.

- Nesting: Tags can be nested inside other tags to create hierarchical structures.

- Block-level vs. Inline elements: Some elements are block-level, meaning they create new blocks on the page, while others are inline, meaning they flow within the text.

- Document Structure: An HTML document typically starts with a `<!DOCTYPE>` declaration, followed by the `<html>` root element. The `<head>` section contains metadata, and the `<body>` section contains the visible content.

Practice task:

Create a simple HTML page with the following components:

1. Add a heading with the text "My First HTML Page."
2. Create two paragraphs with any content you like.
3. Add an image (use any image URL or provide a local image if available).
4. Create an unordered list with three list items containing your favorite colors.
5. Add a link to your favorite website.
6. Create a form with a text input for the user's name and a submit button.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>My First HTML Page</title>
</head>
<body>
  <h1>My First HTML Page</h1>
  
  <p>Hello, this is my first HTML page. It's exciting to learn web development!</p>
  <p>I hope to create many more interesting web pages in the future.</p>

  <img src="https://www.example.com/image.jpg" alt="Sample Image">

  <ul>
    <li>Blue</li>
    <li>Green</li>
    <li>Red</li>
  </ul>

  <a href="https://www.example.com">Visit my favorite website</a>

  <form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <input type="submit" value="Submit">
  </form>
</body>
</html>
```

## 1-10 HTML5 vs HTML, Audio, Video, YouTube Video, Embed, iFrame

HTML5 is the latest version of the Hypertext Markup Language and is an evolution of the older HTML (HTML4, XHTML, etc.). HTML5 introduces several new features and improvements to make web development more efficient and user-friendly. Some key differences between HTML5 and older HTML versions include:

1. Semantic Elements: HTML5 introduces new semantic elements like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, etc., which help structure the web page content more meaningfully and improve accessibility.

2. Audio and Video: HTML5 introduces built-in support for audio and video elements (`<audio>` and `<video>`), making it easier to embed multimedia content without the need for third-party plugins like Flash.

3. YouTube Video Embedding: HTML5 allows you to embed YouTube videos using the `<iframe>` element with the YouTube video URL as the source.

4. Embed and iFrame: HTML5 supports various embedding methods, and one of them is using the `<iframe>` element to embed content from external sources like maps, videos, social media posts, etc.

## 1-11 Explore HTML5 Semantic Elements

HTML5 introduces several semantic elements to improve the structure and meaning of web page content. Here are some of the key semantic elements:

1. `<nav>`: Represents a navigation menu or links to other pages.
2. `<main>`: Represents the main content of the web page.
3. `<header>`: Represents the header section of a web page or a section of the page header.
4. `<footer>`: Represents the footer section of a web page or a section of the page footer.
5. `<section>`: Represents a thematic grouping of content within a web page.
6. `<article>`: Represents an independent piece of content that could be distributed and reused independently.
7. `<time>`: Represents a specific time or a range of time.

## 1-12 HTML Form Elements

HTML forms are used to collect user input on a web page. Here are some of the key form elements

1. `<label>`: Represents a label for an input element. Clicking on the label focuses on the associated input element.
2. `<fieldset>`: Groups related form elements together and can be used to create a border around them.
3. `<legend>`: Represents a caption for the `<fieldset>` element.
4. `<input type="radio">`: Represents a radio button, allowing users to select one option from a group of options.
5. `<input type="checkbox">`: Represents a checkbox, allowing users to select one or more options from a group of options.
6. `<textarea>`: Represents a multiline text input area.
7. `<input type="reset">`: Represents a button that resets the form to its initial state.
8. `<input type="submit">`: Represents a button that submits the form data to the server.

## 1-13 HTML Table Elements

HTML tables are used to display tabular data. Here are some key table elements:

1. `<table>`: Represents the table itself.
2. `<tr>`: Represents a row in the table.
3. `<th>`: Represents a header cell in the table (usually located at the top).
4. `<td>`: Represents a data cell in the table (contains the actual data).
5. `<caption>`: Represents the table caption or title.
6. `colspan`: Attribute used to specify the number of columns a table cell should span.
7. `<thead>`: Represents the table header group.
8. `<tbody>`: Represents the table body group.
9. `<tfoot>`: Represents the table footer group.

## 1-14 Navigation Simple Navbar and Internal Navigation

A simple navigation bar (navbar) is a common UI component in web development. It usually contains links to different sections or pages of a website. Internal navigation refers to linking to different sections within the same web page. Here's an example of a simple navbar and internal navigation:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Simple Navbar</title>
    <style>
        /* Basic CSS for the navbar */
        ul.navbar {
            list-style-type: none;
            padding: 0;
            background-color: #333;
            overflow: hidden;
        }

        li.nav-item {
            float: left;
        }

        a.nav-link {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        a.nav-link:hover {
            background-color: #ddd;
            color: black;
        }

        /* Add some space to the sections */
        section {
            padding: 20px;
        }
    </style>
</head>
<body>
    <ul class="navbar">
        <li class="nav-item"><a class="nav-link" href="#section1">Section 1</a></li>
        <li class="nav-item"><a class="nav-link" href="#section2">Section 2</a></li>
        <li class="nav-item"><a class="nav-link" href="#section3">Section 3</a></li>
    </ul>

    <section id="section1">
        <h2>Section 1</h2>
        <p>This is the content of Section 1.</p>
    </section>

    <section id="section2">
        <h2>Section 2</h2>
        <p>This is the content of Section 2.</p>
    </section>

    <section id="section3">
        <h2>Section 3</h2>
        <p>This is the content of Section 3.</p>
    </section>
</body>
</html>
```

In this example, the navigation bar contains links that point to the corresponding sections within the same page. When the user clicks on a link, the page will scroll to the respective section.

## 1-15 4-7 Explore HTML Tags

As of my knowledge cutoff date in September 2021, I can't provide an exhaustive list of all HTML tags here as there are many, and new ones may have been introduced after that time. However, here are some essential HTML tags that you should know:

- `<html>`: Represents the root of an HTML document.
- `<head>`: Contains meta-information about the HTML document, such as title, links to stylesheets, etc.
- `<body>`: Represents the content of the HTML document that will be displayed in the browser.
- `<h1>`, `<h2>`, ..., `<h6>`: Headings of different levels, where `<h1>` is the highest level and `<h6>` is the lowest.
- `<p>`: Represents a paragraph of text.
- `<a>`: Represents a hyperlink, used to create links to other pages or resources.
- `<img>`: Represents an image.
- `<ul>`: Represents an unordered list.
- `<ol>`: Represents an ordered list.
- `<li>`: Represents a list item.
- `<div>`: Represents a generic container for block-level elements.
- `<span>`: Represents a generic inline container for inline elements.
- `<br>`: Represents a line break.
- `<hr>`: Represents a horizontal rule (a thematic break between sections).
- `<em>`: Represents emphasized text.


- `<strong>`: Represents strongly emphasized text.
- `<input>`: Represents an input field, such as text input, checkbox, radio button, etc.
- `<form>`: Represents an HTML form for user input.
- `<table>`: Represents a table for tabular data.
- `<iframe>`: Represents an inline frame for embedding external content.

Remember that this is not an exhaustive list, and there are many more HTML tags available to suit different needs in web development.

## 1-16 Explore HTML Attributes and Emmet Cheatsheet

HTML attributes provide additional information about HTML elements. Some common attributes include:

- `class`: Used to assign one or more classes to an element for styling and JavaScript purposes.
- `id`: Used to provide a unique identifier for an element, which can be used for targeting specific elements with CSS or JavaScript.
- `href`: Used in `<a>` elements to specify the URL the link points to.
- `src`: Used in `<img>` and `<iframe>` elements to specify the source (URL or file path) of the image or embedded content.
- `alt`: Used in `<img>` elements to provide alternative text that is displayed when the image cannot be loaded.
- `style`: Used to apply inline CSS styles directly to an element.
- `target`: Used in `<a>` elements to specify where to open the linked page (e.g., in a new tab or the same tab).

Emmet is a productivity tool that allows developers to write HTML and CSS code using shorthand syntax. It helps in writing code faster and more efficiently. Here's a simple Emmet cheatsheet for some commonly used shortcuts:

- `div` or `.`: Creates a `<div>` element. Use `.` followed by a class name to assign a class to the `<div>` element (e.g., `div.my-class`).
- `#`: Creates an element with an `id` attribute (e.g., `div#my-id`).
- `ul>li`: Creates an unordered list with list items (e.g., `ul>li*3` will create three list items).
- `a`: Creates an anchor (link) element (e.g., `a[href="#"]` will create a link with an empty `href` attribute).
- `img`: Creates an image element (e.g., `img[src="image.jpg" alt="Image"]`).
- `input`: Creates an input element (e.g., `input[type="text"]`).

Emmet supports more complex expressions and nesting, which can significantly speed up writing HTML and CSS code. It's worth exploring and using for web development tasks.

## 1-17 Pseudo-classes `hover`, `visited`, `focus`

Pseudo-classes are used to style elements based on their state or position in the document. Here are some commonly used pseudo-classes:

1. `:hover`: This pseudo-class is applied when the user hovers over an element with the mouse pointer. It is commonly used to change the appearance of links or buttons when they are hovered.

```css
a:hover {
  color: red;
}
```

2. `:visited`: This pseudo-class targets links that have been visited by the user. It allows you to style visited links differently from unvisited links.

```css
a:visited {
  color: purple;
}
```

3. `:focus`: This pseudo-class targets an element that currently has keyboard focus or has been focused by the user. It is often used to style form elements or interactive elements.

```css
input:focus {
  border: 2px solid blue;
}
```

## 1-18 Position `static`, `relative`, `absolute`, `fixed`, `sticky`

These are different values of the `position` property in CSS that control the positioning of elements. Here's a brief explanation of each:

1. `position: static`: This is the default value. Elements with `position: static` are positioned according to the normal flow of the document. Top, right, bottom, left, and z-index properties have no effect on statically positioned elements.

2. `position: relative`: With `position: relative`, an element is positioned relative to its normal position in the document flow. You can use `top`, `right`, `bottom`, and `left` properties to move the element from its original position.

3. `position: absolute`: Elements with `position: absolute` are positioned relative to the nearest positioned ancestor (an ancestor element with `position` other than `static`). If there is no positioned ancestor, it is positioned relative to the document body. It is taken out of the normal flow of the document.

4. `position: fixed`: Elements with `position: fixed` are positioned relative to the viewport (the browser window). They will remain fixed at a specified position even when the user scrolls the page.

5. `position: sticky`: Elements with `position: sticky` behave like `position: relative` within its container until the user scrolls to a certain point. Once the element reaches that point, it becomes `position: fixed` and remains fixed until the scrolling passes that point.

## 1-19 Stack Elements `z-index` and Pseudo-Elements

1. `z-index`: The `z-index` property is used to control the stacking order of elements along the z-axis (depth) in a web page. Elements with higher `z-index` values appear in front of elements with lower `z-index` values. The default `z-index` is `auto`, and elements are stacked in the order they appear in the document. Positive integer values increase the stacking order, and negative values decrease it.

```css
/* Higher z-index means element appears in front of others */
.element1 {
  z-index: 2;
}

.element2 {
  z-index: 1;
}
```

2. Pseudo-elements: Pseudo-elements are used to style a specific part of an element. They are denoted by double colons (::) in CSS. Common pseudo-elements include `::before` and `::after`, which allow you to insert content before or after an element's content.

```css
.element::before {
  content: "Before";
  /* Other styles */
}

.element::after {
  content: "After";
  /* Other styles */
}
```

Please note that `::before` and `::after` can be used only with elements that have `content` in their CSS (e.g., `content: ""`), like elements with `display: block`, `inline-block`, `table`, etc.

