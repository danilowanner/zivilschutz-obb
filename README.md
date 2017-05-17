# Website Zivilschutzkompanie Oberes Baselbiet

## Installation

1. Website repository von [https://github.com/danilowanner/zivilschutz-obb]() in einen Ordner im webroot des Servers klonen, beispielsweise `~/webroot/zivilschutz-obb`. **Terminal** oder **Konsole** öffnen und in den webroot Ordner navigieren:
   ```
   $ cd ~/webroot
   $ git clone https://github.com/danilowanner/zivilschutz-obb.git
   ```

2. **Plugin** und **Theme dependencies** mit der [Grav CLI application](https://learn.getgrav.org/advanced/grav-cli)  `bin/grav` installieren:
   ```
   $ cd ~/webroot/zivilschutz-obb
   $ bin/grav install
   ```

## Anleitung Theme

Weitere Informationen zur Bedienung des Nussgipfel-Themes im entsprechenden Ordner `user/themes/nussgifpel/README.md`.

# ![](https://avatars1.githubusercontent.com/u/8237355?v=2&s=50) Auszüge aus der Grav Dokumentation

Grav is a **Fast**, **Simple**, and **Flexible**, file-based Web-platform.  There is **Zero** installation required.  Just extract the ZIP archive, and you are already up and running.  It follows similar principles to other flat-file CMS platforms, but has a different design philosophy than most. Grav comes with a powerful **Package Management System** to allow for simple installation and upgrading of plugins and themes, as well as simple updating of Grav itself.

The underlying architecture of Grav is designed to use well-established and _best-in-class_ technologies to ensure that Grav is simple to use and easy to extend. Some of these key technologies include:

* [Twig Templating](http://twig.sensiolabs.org/): for powerful control of the user interface
* [Markdown](http://en.wikipedia.org/wiki/Markdown): for easy content creation
* [YAML](http://yaml.org): for simple configuration
* [Parsedown](http://parsedown.org/): for fast Markdown and Markdown Extra support
* [Doctrine Cache](http://doctrine-orm.readthedocs.io/projects/doctrine-orm/en/latest/reference/caching.html): layer for performance
* [Pimple Dependency Injection Container](http://pimple.sensiolabs.org/): for extensibility and maintainability
* [Symfony Event Dispatcher](http://symfony.com/doc/current/components/event_dispatcher/introduction.html): for plugin event handling
* [Symfony Console](http://symfony.com/doc/current/components/console/introduction.html): for CLI interface
* [Gregwar Image Library](https://github.com/Gregwar/Image): for dynamic image manipulation

## Requirements

- PHP 5.5.9 or higher. Check the [required modules list](https://learn.getgrav.org/basics/requirements#php-requirements)
- Check the [Apache](https://learn.getgrav.org/basics/requirements#apache-requirements) or [IIS](https://learn.getgrav.org/basics/requirements#iis-requirements) requirements

## Updating

To update Grav you should use the [Grav Package Manager](https://learn.getgrav.org/advanced/grav-gpm) or `GPM`:

```
$ bin/gpm selfupgrade
```

To update plugins and themes:

```
$ bin/gpm update
```

## License

See [LICENSE](LICENSE.txt)


[gitflow-model]: http://nvie.com/posts/a-successful-git-branching-model/
[gitflow-extensions]: https://github.com/nvie/gitflow
