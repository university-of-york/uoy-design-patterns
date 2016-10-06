# UNIVERSITY OF YORK DESIGN PATTERNS

This repository holds the design patterns used on the [University of York's website](http://www.york.ac.uk).

## Setting up your development environment

You will need to have NodeJS (including NPM), Git, Ruby (including RubyGems) and Compass installed on your machine. On Windows, the easiest way to do this is with [Chocolatey](https://chocolatey.org/) and on Mac you can use [Homebrew](http://brew.sh/).

You'll also need a global install of Grunt (a task runner), Bower (a package manager) and BackstopJS (a visual regression tester), which you can do by typing:

```bash
npm install -g grunt-cli
npm install -g bower
npm install -g backstopjs
```

## Getting ready

After cloning this repository, you will need to run:

```bash
npm install
```

This will load all the necessary modules for you to continue development.

Next, run `grunt bower`. This will load all the third-party JS libraries that we need from Bower into the `dev/js/vendor` directory, ready to use later on.

You're now ready to start making stuff!

## Active development

To work on the front-end designs, run `grunt dev` in the terminal. This will create the active templates and start a local server, which will live reload as you code.

## Building the documentation

Running a `grunt build` task will create a `build` directory, which will contain the minified CSS, the uglified JS, the optimised images and the HTML pages ready to deploy to a server.

## Building for live deployment

To build for live deployment, run `grunt live`. It will run a build process just with the CSS, JS and images, but no HTML.

## Custom TinyMCE styles

A minified stylesheet for TinyMCE is created as part of the build process. To create a non-minified stylesheet for upload to the CMS without running the entire build task, run `grunt tinymce` and the stylesheet will be created in `build/css/tinymce.css`.

## A note about development

The `master` branch of this repository is the one we use to build our CSS and JS for front-end deployment. Most new work should be started in a new branch in Git. To set up a new branch, type:

```bash
git checkout -b "new-branch-name"
```

There is a standardised way to name branches using slash syntax (taken from http://www.guyroutledge.co.uk/blog/git-branch-naming-conventions/). Our categories (so far) are:

* `component/` - new components, or updates to existing ones
* `module/` - new Javascript modules, or updates to existing ones
* `feature/` - adding new features to the build process
* `fix/` - changes that are to fix bugs, whether layout, Javascript or anything else
* `update/` - using a new version of e.g. FontAwesome, Grunt etc.
* `themes/` - new theme colours and variants

So for a new component you would use `component/component-name`, for new JS modules use `module/module-name`, and so on.

This will create, and switch to, a new branch in Git. Make your changes as usual, then run `git add` and `git commit -m "Your concise and descriptive commit message"`. When you come to push your changes you'll need to do a slightly different command in order to create the new branch on the remote:

```bash
git push -u origin new-branch-name
```

We will merge any signed-off branches into `master` and they will be deployed in the next release. When you create a new branch you must add a line to [release-notes.md](release-notes.md) to clarify what the new feature/fix/component does, so it can be documented for the next release. There are two _next_ releases, _next patch_ and _next minor_.