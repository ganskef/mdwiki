## Some forbidden characters - aaa&+$,/:;=?@"#{}|^~[]`\\*()%.!'bbbäöüßéèáà#ccc   ddd---eeeушёлfff

GFM anchor links of headings in MDwiki should behave like GitHub:

    #some-forbidden-characters---aaabbbäöüßéèáàccc---ddd---eeeушёлfff

Implementations:

* <https://github.com/vmg/redcarpet/blob/master/ext/redcarpet/html.c#L297>
* <https://github.com/russross/blackfriday/blob/a477dd1646916742841ed20379f941cfa6c5bb6f/block.go#L1464>