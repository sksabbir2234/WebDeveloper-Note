# 2-1 Introduction to CSS and CSS types (inline, internal, external)

CSS stands for Cascading Style Sheets and is a language used to control the presentation and layout of HTML documents. It allows web developers to apply styles, such as colors, fonts, and spacing, to HTML elements, making web pages visually appealing.

CSS can be included in HTML documents using three different methods:

1.Inline CSS: Styles are applied directly to individual HTML elements using the `style` attribute. For example:

```html
<p style="color: blue; font-size: 16px;">This is a paragraph with inline CSS.</p>
```

2.Internal CSS: Styles are placed within the `<style>` element in the `<head>` section of the HTML document. This method allows you to apply styles to multiple elements on the same page. For example:

```html
<head>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>
```

3.External CSS: Styles are defined in a separate CSS file with a .css extension. The CSS file is then linked to the HTML document using the `<link>` element in the `<head>` section. For example:

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

The styles.css file will contain the CSS rules.

## 2-2 CSS Text: text color, text alignment, text decoration, font size, font family, font-style

CSS allows you to control various aspects of text in web pages:

- Text Color:

```css
p {
  color: red;
}
```

- Text Alignment:

```css
p {
  text-align: center; /* Possible values: left, right, center, justify */
}
```

- Text Decoration:

```css
a {
  text-decoration: underline; /* Possible values: underline, none, overline, line-through */
}
```

- Font Size:

```css
p {
  font-size: 18px;
}
```

- Font Family:

```css
body {
  font-family: "Arial", sans-serif;
}
```

- Font Style:

```css
p {
  font-style: italic; /* Possible values: normal, italic, oblique */
}
```

## 2-3 CSS Selectors (basic): id, class, universal, tags, grouping, attribute, id vs class

CSS selectors are used to target and apply styles to specific HTML elements. Here are some basic CSS selectors:

- Element Selector: Targets all occurrences of a specific HTML element. For example:

```css
p {
  color: blue;
}
```

- ID Selector: Targets a specific element with a unique ID attribute. IDs should be unique within the page. For example:

```css
#header {
  background-color: gray;
}
```

- Class Selector: Targets elements with a specific class attribute. Classes can be reused on multiple elements. For example:

```css
.button {
  background-color: green;
}
```

- Universal Selector: Targets all elements on the page. For example:

```css
* {
  margin: 0;
  padding: 0;
}
```

- Grouping Selector: Targets multiple selectors and applies the same styles to all of them. For example:

```css
h1, h2, h3 {
  font-family: "Helvetica", sans-serif;
}
```

- Attribute Selector: Targets elements based on their attributes. For example, selecting all `<a>` elements with a title attribute:

```css
a[title] {
  color: orange;
}
```

- ID vs. Class: IDs are used for unique elements, and classes are used for multiple elements that share the same styles. IDs have higher specificity than classes.

## 2-4 Mixed Selectors multiple classes, combined selectors, attribute, div, span

CSS allows you to use multiple selectors to target elements in various ways:

- Multiple Classes: Target elements with multiple classes applied. For example:

```css
.button.primary {
  background-color: blue;
}
```

- Combined Selectors: Combine multiple selectors without space to target specific elements. For example, to target `<a>` elements inside a `<div>` with the class "container":

```css
div.container a {
  color: red;
}
```

- Attribute Selectors: Target elements based on their attributes. For example, to target `<input>` elements with a type attribute of "submit":

```css
input[type="submit"] {
  background-color: green;
}
```

- Div and Span: `<div>` and `<span>` are generic container elements. They can be targeted just like any other HTML element. For example:

```css
div {
  border: 1px solid black;
}

span.highlight {
  color: yellow;
}
```

## 2-5 CSS Borders: Border, border-radius, Margin, different ways to set margin

CSS provides properties to style the borders of elements:

- Border:

```css
div {
  border: 1px solid black;
}
```

- Border Radius: Creates rounded corners for elements. For example:

```css
div {
  border-radius: 5px;
}
```

- Margin: Sets the space outside the border of an element. For example:

```css
div {
  margin: 10px;
}
```

Different ways to set margins:

- Set all margins to the same value:

```css
div {
  margin: 10px;
}
```

- Set margins clockwise from the top (clockwise: top, right, bottom, left):

```css
div {
  margin: 10px 20px 30px 40px;
}
```

- Set vertical margins and horizontal margins separately:

```css
div {
  margin: 10px 20px; /* top/bottom, right/left */
}
```

- Set margins for each side individually:

```css
div {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
}
```

## 2-6 CSS Box Model: Padding, border, content, height, width

The CSS box model represents the structure of an element, which consists of the following parts:

- Content: The actual content of the element (e.g., text, images).
- Padding: The space between the content and the element's border.
- Border: The border around the padding and content.
- Margin: The space outside the border, creating the gap between neighboring elements.

CSS allows you to control the box model properties:

- Padding:

```css
div {
  padding: 10px;
}
```

- Border:

```css
div {
  border: 1px solid black;
}
```

- Content (Width and Height):

```css
div {
  width: 200px;
  height: 100px;
}
```

## 2-7 CSS Display: none, hidden, inline, block, inline-block, box-shadow

CSS `display` property controls how an element is rendered on the page:

- `none`: The element is completely removed from the page and takes no space.

```css
div {
  display: none;
}
```

- `hidden`: The element is hidden, but it still occupies space on the page.

```css
div {
  visibility: hidden;
}
```

- `block`: The element is displayed as a block-level

 element and takes the full width available.

```css
div {
  display: block;
}
```

- `inline`: The element is displayed as an inline-level element, and it takes only the necessary width to fit its content.

```css
span {
  display: inline;
}
```

- `inline-block`: The element is displayed as an inline-level element, but it allows setting a width and height like a block-level element.

```css
div {
  display: inline-block;
}
```

- `box-shadow`: Adds a shadow effect to an element.

```css
div {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
```

## 2-8 CSS Background: color, image, repeat, position, size, relative image path

CSS allows you to set background properties for elements:

- Background Color:

```css
div {
  background-color: lightblue;
}
```

- Background Image:

```css
div {
  background-image: url("image.jpg");
}
```

- Background Repeat:

```css
div {
  background-repeat: repeat-x; /* Possible values: repeat, repeat-x, repeat-y, no-repeat */
}
```

- Background Position:

```css
div {
  background-position: center top; /* Possible values: left top, center center, right bottom, ... */
}
```

- Background Size:

```css
div {
  background-size: cover; /* Possible values: auto, cover, contain, ... */
}
```

- Relative Image Path: If the CSS file is in a different directory than the HTML file, use a relative path to the image file.

```css
div {
  background-image: url("../images/image.jpg");
}
```

## 2-9 CSS Overview Module Summary and practice task

Congratulations! You've covered the basics of CSS, including how to apply styles using inline, internal, and external methods. You've learned about text styling, selectors, box model, borders, and backgrounds.

Now, for practice, try creating a simple webpage with various elements (e.g., headings, paragraphs, images, buttons) and apply different CSS styles to them. Experiment with different font sizes, colors, alignments, and margins. Use various selectors (IDs, classes, element selectors) to target specific elements. Apply borders and backgrounds to some elements. Get creative and have fun exploring the possibilities of CSS!

Remember to link your external CSS file to your HTML document and use the appropriate selector combinations to target specific elements. Practice is key to mastering CSS, so keep experimenting and building projects to improve your skills!
