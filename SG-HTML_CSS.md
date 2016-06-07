# HTML/CSS Style Guide
* [Reference](https://github.com/google/styleguide "Reference")

## General Style Rules
### Protocol
*Omit the protocol from embedded resources.*

Omit the protocol portion (http:, https:) from URLs pointing to images and other media files, style sheets, and scripts unless the respective files are not available over both protocols.

Omitting the protocol—which makes the URL relative—prevents mixed content issues and results in minor file size savings.

```HTML
<!-- Not recommended -->
<script src="http://www.google.com/js/gweb/analytics/autotrack.js"></script>
```
```HTML
<!-- Recommended -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>
```
```CSS
/* Not recommended */
.example {
  background: url(http://www.google.com/images/example);
}
```
```CSS
/* Recommended */
.example {
  background: url(//www.google.com/images/example);
}
```

##General Formatting Rules
###Indentation
Indent by 2 spaces at a time.

Don’t use tabs or mix tabs and spaces for indentation.

```HTML
<ul>
  <li>Fantastic
  <li>Great
</ul>
```
```CSS
.example {
  color: blue;
}
```

###Capitalization
Use only lowercase.

All code has to be lowercase: This applies to HTML element names, attributes, attribute values (unless text/CDATA), CSS selectors, properties, and property values (with the exception of strings).
```HTML
<!-- Not recommended -->
<A HREF="/">Home</A>
```
```HTML
<!-- Recommended -->
<img src="google.png" alt="Google">
```
```CSS
/* Not recommended */
color: #E5E5E5;
```
```CSS
/* Recommended */
color: #e5e5e5;
```
###Trailing Whitespace
*Trailing whitespace is any spaces or tabs after the last non-whitespace character on the line until the newline.*

Remove trailing white spaces.
Trailing white spaces are unnecessary and can complicate diffs.

```HTML
<!-- Not recommended -->
<p>What?_
```
```HTML
<!-- Recommended -->
<p>Yes please.
```

##General Meta Rules
###Encoding
Use UTF-8 (no BOM).

Make sure your editor uses UTF-8 as character encoding, without a byte order mark.

Specify the encoding in HTML templates and documents via <meta charset="utf-8">. Do not specify the encoding of style sheets as these assume UTF-8.

(More on encodings and when and how to specify them can be found in [Handling character encodings in HTML and CSS.](http://www.w3.org/International/tutorials/tutorial-char-enc/ "Handling character encodings in HTML and CSS."))

###Comment
Explain code as needed, where possible.

Use comments to explain code: What does it cover, what purpose does it serve, why is respective solution used or preferred?

(This item is optional as it is not deemed a realistic expectation to always demand fully documented code. Mileage may vary heavily for HTML and CSS code and depends on the project’s complexity.)

###Action Items
Mark todos and action items with **TODO**.

Highlight todos by using the keyword **TODO** only, not other common formats like **@@**.

Append a contact (username or mailing list) in parentheses as with the format **TODO(contact).**

Append action items after a colon as in **TODO:** action item.

```HTML
{# TODO(john.doe): revisit centering #}
<center>Test</center>
```
```HTML
<!-- TODO: remove optional tags -->
<ul>
  <li>Apples</li>
  <li>Oranges</li>
</ul>
```

#HTML - Style Rules (Specific)


###Document Type
Use HTML5.

HTML5 (HTML syntax) is preferred for all HTML documents: `<!DOCTYPE html>.`

(It’s recommended to use HTML, as text/html. Do not use XHTML. XHTML, as application/xhtml+xml, lacks both browser and infrastructure support and offers less room for optimization than HTML.)

Although fine with HTML, do not close void elements, i.e. write `<br>`, not `<br />`.

###HTML Validity
Use valid HTML where possible.

Use valid HTML code unless that is not possible due to otherwise unattainable performance goals regarding file size.

Use tools such as the W3C HTML validator to test.

Using valid HTML is a measurable baseline quality attribute that contributes to learning about technical requirements and constraints, and that ensures proper HTML usage.

```HTML
<!-- Not recommended -->
<title>Test</title>
<article>This is only a test.
```
```HTML
<!-- Recommended -->
<!DOCTYPE html>
<meta charset="utf-8">
<title>Test</title>
<article>This is only a test.</article>
```

###Semantics
Use HTML according to its purpose.

Use elements (sometimes incorrectly called “tags”) for what they have been created for. For example, use heading elements for headings, p elements for paragraphs, a elements for anchors, etc.

Using HTML according to its purpose is important for accessibility, reuse, and code efficiency reasons.

```HTML
<!-- Not recommended -->
<div onclick="goToRecommendations();">All recommendations</div>
```
```HTML
<!-- Recommended -->
<a href="recommendations/">All recommendations</a>
```

###Multimedia Fallback
Provide alternative contents for multimedia.

For multimedia, such as images, videos, animated objects via canvas, make sure to offer alternative access. For images that means use of meaningful alternative text (alt) and for video and audio transcripts and captions, if available.

Providing alternative contents is important for accessibility reasons: A blind user has few cues to tell what an image is about without @alt, and other users may have no way of understanding what video or audio contents are about either.

(For images whose alt attributes would introduce redundancy, and for images whose purpose is purely decorative which you cannot immediately use CSS for, use no alternative text, as in alt="".)

```HTML
<!-- Not recommended -->
<img src="spreadsheet.png">
```
```HTML
<!-- Recommended -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot.">
```

###Separation of Concerns
Separate structure from presentation from behavior.

Strictly keep structure (markup), presentation (styling), and behavior (scripting) apart, and try to keep the interaction between the three to an absolute minimum.

That is, make sure documents and templates contain only HTML and HTML that is solely serving structural purposes. Move everything presentational into style sheets, and everything behavioral into scripts.

In addition, keep the contact area as small as possible by linking as few style sheets and scripts as possible from documents and templates.

Separating structure from presentation from behavior is important for maintenance reasons. It is always more expensive to change HTML documents and templates than it is to update style sheets and scripts.

```HTML
<!-- Not recommended -->
<!DOCTYPE html>
<title>HTML sucks</title>
<link rel="stylesheet" href="base.css" media="screen">
<link rel="stylesheet" href="grid.css" media="screen">
<link rel="stylesheet" href="print.css" media="print">
<h1 style="font-size: 1em;">HTML sucks</h1>
<p>I’ve read about this on a few sites but now I’m sure:
  <u>HTML is stupid!!1</u>
<center>I can’t believe there’s no way to control the styling of
  my website without doing everything all over again!</center>
```
```HTML
<!-- Recommended -->
<!DOCTYPE html>
<title>My first CSS-only redesign</title>
<link rel="stylesheet" href="default.css">
<h1>My first CSS-only redesign</h1>
<p>I’ve read about this on a few sites but today I’m actually
  doing it: separating concerns and avoiding anything in the HTML of
  my website that is presentational.
<p>It’s awesome!
```

###Entity References
Do not use entity references.

There is no need to use entity references like &mdash;, &rdquo;, or &#x263a;, assuming the same encoding (UTF-8) is used for files and editors as well as among teams.

The only exceptions apply to characters with special meaning in HTML (like < and &) as well as control or “invisible” characters (like no-break spaces).

```HTML
<!-- Not recommended -->
The currency symbol for the Euro is &ldquo;&eur;&rdquo;.
```
```HTML
<!-- Recommended -->
The currency symbol for the Euro is “€”.
```

###Optional Tags
Omit optional tags (optional).

For file size optimization and scannability purposes, consider omitting optional tags. The HTML5 specification defines what tags can be omitted.

(This approach may require a grace period to be established as a wider guideline as it’s significantly different from what web developers are typically taught. For consistency and simplicity reasons it’s best served omitting all optional tags, not just a selection.)

```HTML
<!-- Not recommended -->
<!DOCTYPE html>
<html>
  <head>
    <title>Spending money, spending bytes</title>
  </head>
  <body>
    <p>Sic.</p>
  </body>
</html>
```
```HTML
<!-- Recommended -->
<!DOCTYPE html>
<title>Saving money, saving bytes</title>
<p>Qed.
```

###Type Attributes
Omit type attributes for style sheets and scripts.

Do not use type attributes for style sheets (unless not using CSS) and scripts (unless not using JavaScript).

Specifying type attributes in these contexts is not necessary as HTML5 implies text/css and text/javascript as defaults. This can be safely done even for older browsers.

```HTML
<!-- Not recommended -->
<link rel="stylesheet" href="//www.google.com/css/maia.css"
  type="text/css">
```
```HTML
<!-- Recommended -->
<link rel="stylesheet" href="//www.google.com/css/maia.css">
```
```HTML
<!-- Not recommended -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"
  type="text/javascript"></script>
```
```HTML
<!-- Recommended -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>
```

##HTML Formatting Rules

###General Formatting
Use a new line for every block, list, or table element, and indent every such child element.

Independent of the styling of an element (as CSS allows elements to assume a different role per `display` property), put every block, list, or table element on a new line.

Also, indent them if they are child elements of a block, list, or table element.

(If you run into issues around whitespace between list items it’s acceptable to put all `li` elements in one line. A linter is encouraged to throw a warning instead of an error.)
```HTML
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>
```
```HTML
<ul>
  <li>Moe
  <li>Larry
  <li>Curly
</ul>
```
```HTML
<table>
  <thead>
    <tr>
      <th scope="col">Income
      <th scope="col">Taxes
  <tbody>
    <tr>
      <td>$ 5.00
      <td>$ 4.50
</table>
```
###HTML Quotation Marks
When quoting attributes values, use double quotation marks.

Use double ("") rather than single quotation marks ('') around attribute values.
```HTML
<!-- Not recommended -->
<a class='maia-button maia-button-secondary'>Sign in</a>
```
```HTML
<!-- Recommended -->
<a class="maia-button maia-button-secondary">Sign in</a>
```

#CSS - Style Rules (Specific)
###CSS Validity
Use valid CSS where possible.

Unless dealing with CSS validator bugs or requiring proprietary syntax, use valid CSS code.

Use tools such as the [W3C CSS validator](http://jigsaw.w3.org/css-validator/) to test.

Using valid CSS is a measurable baseline quality attribute that allows to spot CSS code that may not have any effect and can be removed, and that ensures proper CSS usage.

###ID and Class Naming
Use meaningful or generic ID and class names.

Instead of presentational or cryptic names, always use ID and class names that reflect the purpose of the element in question, or that are otherwise generic.

Names that are specific and reflect the purpose of the element should be preferred as these are most understandable and the least likely to change.

Generic names are simply a fallback for elements that have no particular or no meaning different from their siblings. They are typically needed as “helpers.”

Using functional or generic names reduces the probability of unnecessary document or template changes.

```CSS
/* Not recommended: meaningless */
#yee-1901 {}

/* Not recommended: presentational */
.button-green {}
.clear {}
```
```CSS
/* Recommended: specific */
#gallery {}
#login {}
.video {}

/* Recommended: generic */
.aux {}
.alt {}
```

###ID and Class Name Style
Use ID and class names that are as short as possible but as long as necessary.

Try to convey what an ID or class is about while being as brief as possible.

Using ID and class names this way contributes to acceptable levels of understandability and code efficiency.
```CSS
/* Not recommended */
#navigation {}
.atr {}
```
```CSS
/* Recommended */
#nav {}
.author {}
```
###Type Selectors
Avoid qualifying ID and class names with type selectors.

Unless necessary (for example with helper classes), do not use element names in conjunction with IDs or classes.

Avoiding unnecessary ancestor selectors is useful for [performance reasons](http://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/).
```CSS
/* Not recommended */
ul#example {}
div.error {}
```
```CSS
/* Recommended */
#example {}
.error {}
```
###Horthand Properties
Use [shorthand properties](http://www.w3.org/TR/CSS21/about.html#shorthand) where possible.

CSS offers a variety of shorthand properties (like `font`) that should be used whenever possible, even in cases where only one value is explicitly set.

Using shorthand properties is useful for code efficiency and understandability.
```CSS
/* Not recommended */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
```
```CSS
/* Recommended */
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```
###0 and Units
Omit unit specification after “0” values.

Do not use units after 0 values unless they are required.
```CSS
margin: 0;
padding: 0;
```
###Leading 0s
Omit leading “0”s in values.

Do not use put 0s in front of values or lengths between -1 and 1.
```CSS
font-size: .8em;
```
###Hexadecimal Notation
Use 3 character hexadecimal notation where possible.

For color values that permit it, 3 character hexadecimal notation is shorter and more succinct.
```CSS
/* Not recommended */
color: #eebbcc;
```
```CSS
/* Recommended */
color: #ebc;
```
###Prefixes
Prefix selectors with an application-specific prefix (optional).

In large projects as well as for code that gets embedded in other projects or on external sites use prefixes (as namespaces) for ID and class names. Use short, unique identifiers followed by a dash.

Using namespaces helps preventing naming conflicts and can make maintenance easier, for example in search and replace operations.
```CSS
.adw-help {} /* AdWords */
#maia-note {} /* Maia */
```
###ID and Class Name Delimiters
Separate words in ID and class names by a hyphen.

Do not concatenate words and abbreviations in selectors by any characters (including none at all) other than hyphens, in order to improve understanding and scannability.
```CSS
/* Not recommended: does not separate the words “demo” and “image” */
.demoimage {}

/* Not recommended: uses underscore instead of hyphen */
.error_status {}
```
```CSS
/* Recommended */
#video-id {}
.ads-sample {}
```
###Hacks
Avoid user agent detection as well as CSS “hacks”—try a different approach first.

It’s tempting to address styling differences over user agent detection or special CSS filters, workarounds, and hacks. Both approaches should be considered last resort in order to achieve and maintain an efficient and manageable code base. Put another way, giving detection and hacks a free pass will hurt projects in the long run as projects tend to take the way of least resistance. That is, allowing and making it easy to use detection and hacks means using detection and hacks more frequently—and more frequently is too frequently.











