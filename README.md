# docsify-sign-off-sheet 📝

A docsify plugin to add sign-off sheets to your docs

This plugin is an effort to create relevant, up to date documentation for your project. It is a simple plugin that adds a sign-off sheet to your docs. It is a simple way to ensure that your documentation is up to date and relevant.

It works by setting two items on each documentation page:

1. Review Cadence - How often the documentation should be reviewed
2. Sign-Off Sheet - A list of people who have reviewed the documentation and the respective date it is reviewed at.
3. This plugin will do its magic and create a nice display to show the up to date status of the documentation!

## What is a Sign-Off Sheet?

> A sign-off sheet is a business document that confirms two or more parties agree on the status of a project or goal. Sign-off sheets require signatures from the relevant individuals, or stakeholders, to acknowledge they have both reviewed the matter at hand and are satisfied. Organizations save sign-off sheets as proof that they have fulfilled obligations to employees, other businesses and clients.

It is inspired by the Sign-Off Sheets used by cleaners in restrooms to ensure that the restroom is clean and ready for use.

## Installation

Add the `docsify-sign-off-sheet` plugin to your `index.html` after `docsify`. The plugin is available on `jsdelivr` (below), `unpkg`, and other CDN services that auto-publish `npm packages`.

```html
<script src="https://cdn.jsdelivr.net/npm/docsify-sign-off-sheet"></script>
```

## Usage

1. Create a sign-off sheet block
   ```markdown
   <!-- sign-off-sheet:start -->
   <!-- sign-off-sheet:end -->
   ```
2. Add a sign-off cadence. This can be anywhere in the document. But adding it inside the sign-off sheet block is recommended for easy viewing and maintaining.

   ```markdown
   ...

   <!-- sign-off-cadence:1 month -->

   ...
   ```

3. Add a table inside the sign-off sheet block. This is where the sign-off sheet will be displayed. This table can be any format you want, this plugin is smart enough to figure it out. The only requirement is that there is a date in each row. The date supports natural language, so write it in any format you wish!

## Example

```markdown
<!-- sign-off-sheet:start -->

<!-- sign-off-cadence:1 month -->

This is the Sign-Off page for the documentation in this repository. Once you have read and understood the documentation, please sign-off by adding your name and date below.

| Name  | Date            |                        Notes |
| ----- | --------------- | ---------------------------: |
| Bob   | 5th Nov 1999    |             Looking all good |
| Alice | 01/31/2000      |           Looking fine by me |
| Eve   | 2001-06-16      |             Looks good to me |
| Ryo   | August 4th 2002 | Absolutely fine. Signing off |
| Ryo   | 17/08/2003      |       No issues, signing off |

<!-- sign-off-sheet:end -->
```

---

Made with ❤️
