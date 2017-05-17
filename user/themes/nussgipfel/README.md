# Nussgipfel Theme

The **Nussgipfel** Theme is for [Grav CMS](http://github.com/getgrav/grav).

## Bild im Kopfbereich (header-image)

Das Theme wählt jeweils das erste Bild (alphabethisch) aus und plaziert es im
Kopfbereich der Website als Header-Bild.

## Datenschutz-Link im Footer

Im Footer befindet sich ein Link, welcher auf die URI "/datenschutz" verweist.
Der Link sowie der Titel wird von jener Seite übernommen und angezeigt.

## Blog

Das blog-Template unterstützt (noch) keine Pagination. Die Anzahl Blogartikel kann im Frontmatter limitiert werden.

## E-Mail Obfuscation

Schutz vor Spam kann mit dem Platzhalter [email] eingebaut werden. Die
einzufügende E-Mail kann im Frontmatter der Seite definiert werden:

``` yaml
---
title: Kontakt
email: martin.buser@zs-obb.ch
---
```

## Backend Admin

### Neue Nutzer hinzufügen

Benutzer erhalten ihre eigene Account-Datei im Ordner `/user/accounts`. Neue
Benutzer können in jenem Ordner angelegt werden. Das Passwort wird beim ersten
Login veschlüsselt. Alternativ kann ein User im Grav-Backend unter
`http://dev-zs-obb.local/admin/user/:username` angelegt oder editiert werden.
