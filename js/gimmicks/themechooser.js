(function($) {
    'use strict';

    var themes = [
        { name: 'bootstrap', url: 'netdna.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css' },
        { name: 'cerulean', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/cerulean/bootstrap.min.css' },
        { name: 'cosmo', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/cosmo/bootstrap.min.css' },
        { name: 'cyborg', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/cyborg/bootstrap.min.css' },
        { name: 'flatly', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/flatly/bootstrap.min.css' },
        { name: 'journal', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/journal/bootstrap.min.css' },
        { name: 'lumen', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/lumen/bootstrap.min.css' },
        { name: 'paper', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/paper/bootstrap.min.css' },
        { name: 'readable', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/readable/bootstrap.min.css' },
        { name: 'sandstone', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/sandstone/bootstrap.min.css' },
        { name: 'simplex', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/simplex/bootstrap.min.css' },
        { name: 'slate', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/slate/bootstrap.min.css' },
        { name: 'spacelab', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/spacelab/bootstrap.min.css' },
        { name: 'superhero', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/superhero/bootstrap.min.css' },
        { name: 'united', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/united/bootstrap.min.css' },
        { name: 'yeti', url: 'netdna.bootstrapcdn.com/bootswatch/3.4.1/yeti/bootstrap.min.css' }
    ];
    var useChooser = false;
    var themeChooserGimmick = {
        name: 'Themes',
        version: $.md.version,
        once: function() {
            $.md.linkGimmick(this, 'themechooser', themechooser, 'skel_ready');
            $.md.linkGimmick(this, 'theme', apply_theme);

        }
    };
    $.md.registerGimmick(themeChooserGimmick);

    var log = $.md.getLogger();

    var set_theme = function(theme) {
        theme.inverse = theme.inverse || false;

        if (theme.url === undefined) {
            if (!theme.name) {
                log.error('Theme name must be given!');
                return;
            }
            var saved_theme = themes.filter(function(t) {
                return t.name === theme.name;
            })[0];
            if (!saved_theme) {
                log.error('Theme ' + name + ' not found, removing link')    ;
                return;
            }
            theme = $.extend(theme, saved_theme);
        }


        $('link[rel=stylesheet][href*="netdna.bootstrapcdn.com"]')
            .remove();

        // slim instance has no bootstrap hardcoded in
        var has_default_bootstrap_css = $('style[id*=bootstrap]').length > 0;

        if (theme.name !== 'bootstrap' || !has_default_bootstrap_css) {
            // in devel & fat version the style is inlined, remove it
            $('style[id*=bootstrap]').remove();

            $('<link rel="stylesheet" type="text/css">')
                .attr('href', $.md.prepareLink(theme.url))
                .appendTo('head');
        }
        $(
            '<style type="text/css">' +
                // override prism.css for dark themes
                "code[class*=language-],pre[class*=language-]{color:inherit;background:0 0;text-shadow:none;}" +
                ".token.entity,.token.operator,.token.url{background:inherit;}" +
                // override bootstrap.css for dark themes and with pink from prismjs
                "code{color:#DD4A68;background-color:inherit;}pre{color:inherit;background-color:inherit;}" +
                "</style>"
        ).appendTo("head");

        if (theme.inverse === true) {
            $('#md-main-navbar').removeClass ('navbar-default');
            $('#md-main-navbar').addClass ('navbar-inverse');
        } else {
            $('#md-main-navbar').addClass ('navbar-default');
            $('#md-main-navbar').removeClass ('navbar-inverse');
        }
    };

    var apply_theme = function($links, opt, text) {
        opt.name = opt.name || text;
        $links.each(function(i, link) {
            $.md.stage('postgimmick').subscribe(function(done) {
                var $link = $(link);

                // only set a theme if no theme from the chooser is selected,
                // or if the chooser isn't enabled
                if (window.localStorage.theme === undefined || !useChooser) {
                    set_theme(opt);
                }

                done();
            });
        });
        $links.remove();
    };

    var themechooser = function($links, opt, text) {

        useChooser = true;
        $.md.stage('bootstrap').subscribe(function(done) {
            restore_theme(opt);
            done();
        });

        return $links.each(function(i, e) {
            var $this = $(e);
            var $chooser = $('<a href=""></a><ul></ul>'
            );
            $chooser.eq(0).text(text);

            $.each(themes, function(i, theme) {
                var $li = $('<li></li>');
                $chooser.eq(1).append($li);
                var $a = $('<a/>')
                    .text(theme.name)
                    .attr('href', '')
                    .click(function(ev) {
                        ev.preventDefault();
                        window.localStorage.theme = theme.name;
                        window.location.reload();
                    })
                    .appendTo($li);
            });

            $chooser.eq(1).append('<li class="divider" />');
            var $li = $('<li/>');
            var $a_use_default = $('<a>Use default</a>');
            $a_use_default.click(function(ev) {
                ev.preventDefault();
                window.localStorage.removeItem('theme');
                window.location.reload();
            });
            $li.append($a_use_default);
            $chooser.eq(1).append($li);

            $chooser.eq(1).append('<li class="divider" />');
            $chooser.eq(1).append('<li><a href="http://www.bootswatch.com/3/">Powered by Bootswatch</a></li>');
            $this.replaceWith($chooser);
        });
    };

    var restore_theme = function(opt) {
        if (window.localStorage.theme) {
            opt = $.extend({ name: window.localStorage.theme }, opt);
            set_theme(opt);
        }
    };
}(jQuery));
