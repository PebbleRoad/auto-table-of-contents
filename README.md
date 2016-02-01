# Auto Table of Contents (hierarchical)

[![Join the chat at https://gitter.im/PebbleRoad/auto-table-of-contents](https://badges.gitter.im/PebbleRoad/auto-table-of-contents.svg)](https://gitter.im/PebbleRoad/auto-table-of-contents?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### Demo

[http://pebbleroad.github.io/javascript-table-of-contents/](http://pebbleroad.github.io/javascript-table-of-contents/)

## What it is
Simple javascript code to use header elements on well-marked up page to automatically create a clickable table of contents.

## Why use it
If you have long content pages on your website then you need to make it easy for users to skim and scan the page. Showing a table of contents (TOC) on the page is a useful way of achieving this. Users see not only the sections on the page but also can quickly navigate to it as well.

## How to use it

1. Add toc.js javascript file in your html
2. Initialize 'toc' in the pages you want to create the table of contents

	   <script type="text/javascript" src="toc.js"></script>
	   <script type="text/javascript">

		 window.onload = function(){

			toc.init({
			  target: 'h2', 	/* Header element: h1|h2|h3|h4|h5|h6 */
			  content: 'body' 	/* Section to crawl to generate toc: .class| #id */,
			  depth: 6          /* How deep should the heading be nested */
			});

		 };

		</script>