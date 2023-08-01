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
