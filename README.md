# iBib 

Eventually[^$\dagger$], this could a web-based, book (pdf) browser à la OSX-coverflow or Calibre.

It comes from the limitations I faced with Calibre: the latter requires the user running Calibre
to own the files (books) it shows. I was looking for a "Library" app, where users would be able
to read, but not copy the files -so as to make sure no one can accuse me of distributing material
which I may not be allowed to distribute -say I own an eBook and let another user of my machine
to read it; but I don't want him to get a copy of it from me.

# TODO

The main thing would be to see if there would be an easy-enough way for letting the browser to display say a PDF and
yet deter the average/not-enough-motivated user from downloading it[^$\dagger\dagger$]. The default PDF
viewer of course allows straightfoward saving of said pdf file.

After this, basically just eyecandy.

[^$\dagger$]: This has a low, low,...low priority right now... :-)
[^$\dagger\dagger$]: Of course, if the browser "shows" something, the user already downloaded it!

Initially this project had the appropiately boring name of myLibrary... :-p. Some files may still show it.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd mylibrary`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
