# MDwiki

MDwiki is a CMS/Wiki __completely built in HTML5/Javascript and runs 100% on the client__. No special software installation or server side processing is required. Just upload the `mdwiki.html` shipped with MDwiki into the same directory as your markdown files and you are good to go!

MDwiki presents your GitHub Flavored Markdown files in a browser. MDwiki implements wiki features like navigation, styles and additional Gimmicks. But, it let you decide how to edit and store your data. Markdown files are widely accepted and supported by tools which make it very future proof. MDwiki is a great Separation Of Concerns example thereby.

Note: The website you are currently viewing is realized with MDwiki and hosted on [GitHub pages](https://pages.github.com/). The Markdown sources are located here <https://github.com/ganskef/mdwiki/tree/gh-pages>.

[gimmick:twitterfollow](timodoerr) the original developer

Features
--------

  * Built completely in Javascript/HTML5 and __does not require any local or remote installations__
  * Uses [Markdown][markdown] as its input markup language
  * Build on top of [jQuery][jQuery] and [Bootstrap3][bootstrap] to work cross-browser, with responsive layout
  * Extends Markdown with special [_Gimmicks_][gimmicks] that add rich client functions, like syntax highlighting via [prismjs][prismjs], [GitHub Gists][gists], or [Google Maps][maps] for geo data
  * Themeable through Bootstrap compatibility, supports all themes from [bootswatch](https://www.bootswatch.com)


Requirements
------------

* Webspace (or a web server that can serve static files)
* Any modern Webbrowser
* [mdwiki.html][download] file

How does it work?
-----------------

Just drop the `mdwiki.html` available from [the download page][download] along with your markdown files on a webspace somewhere. You can pass any url (relative to the `mdwiki.html` file) to mdwiki after the hashbang `#!`:

    https://www.example.com/mdwiki.html#!myfile.md

If you rename the `mdwiki.html` into `index.html`, you can omit the filename on most webservers:

    https://www.example.com/#!myfile.md

MDwiki will load a file called `index.md` from the same directory as the index.html by default, so if you use an `index.md` file as entry point, all you have to do is enter your domain name:

    https://example.com/

Note: There are lots more features over regular Markdown, check out the [quickstart tutorial][quickstart].

- - - -

Credits / Technologies
----------------------

MDwiki would not exist if it weren't for those great pieces of software:

  * [marked][marked]
  * [jQuery][jQuery]
  * [Bootstrap][bootstrap]
  * [Bootswatch][bootswatch]
  * [colorbox][colorbox]
  * [highlightjs][highlightjs]

MDwiki is created by Timo Dörr. Follow me to get updates on MDwiki! [Follow @timodoerr](https://www.twitter.com/timodoerr).

Cute kitten images provided by the great [placekitten.com] service.

  [download]: download.md
  [quickstart]: quickstart.md
  [gimmicks]: gimmicks.md

  [markdown]: https://daringfireball.net/projects/markdown/
  [jQuery]: https://www.jquery.org
  [bootstrap]: https://www.getbootstrap.com
  [bootswatch]: https://www.bootswatch.com
  [marked]: https://github.com/chjj/marked
  [colorbox]: https://www.jacklmoore.com/colorbox/
  [gists]: https://gist.github.com/
  [maps]: https://maps.google.com/
  [prismjs]: https://prismjs.com/
  [placekitten.com]: https://www.placekitten.com/

License
-------

MDwiki is licensed under [GNU GPLv3 with additional terms applied][license].

  [license]: https://github.com/Dynalon/mdwiki/blob/master/LICENSE.txt
