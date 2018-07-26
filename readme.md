# UNIVERSITY OF YORK DESIGN PATTERNS

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a81559c3781241548c272e75eb603c9f)](https://www.codacy.com/app/university-of-york/design-patterns?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=university-of-york/design-patterns&amp;utm_campaign=Badge_Grade)
[![Build Status](https://semaphoreci.com/api/v1/university-of-york/design-patterns/branches/dev/shields_badge.svg)](https://semaphoreci.com/university-of-york/design-patterns)

This repository holds the design patterns used on the [University of York's website](http://www.york.ac.uk).

## Setting up your development environment

You will need to have NodeJS (including NPM), Git, Ruby (including RubyGems) and Compass installed on your machine. On Windows, the easiest way to do this is with [Chocolatey](https://chocolatey.org/) and on Mac you can use [Homebrew](http://brew.sh/).

You'll also need a global install of Grunt (a task runner), Yarn (a package manager) and BackstopJS (a visual regression tester), which you can do by typing:

```bash
npm install -g grunt-cli
npm install -g yarn
npm install -g backstopjs
```

## Getting ready

After cloning this repository, you will need to run:

```bash
yarn install
```

This will load all the necessary modules for you to continue development.

You're now ready to start making stuff!

## Active development

To work on the front-end designs, run `yarn build` in the terminal. This will create the active templates and start a local server, which will live reload as you code.

## Building the documentation

Running a `yarn build` task will create a `build` directory, which will contain the minified CSS, the uglified JS, the optimised images and the HTML pages ready to deploy to a server.

## Building for release

To build a release version, you need to follow the [instructions in our development docs](https://university-of-york.github.io/guides/release-process/).

Essentially, we employ a continuous build and deployment system that takes commits to the code base, builds them and automatically deploys successfully built files to a preview or live server, depending on the commit. 

## Custom styles

Minified stylesheets for TinyMCE and Formstack are created as part of the build process.

## A note about development

The `dev` branch of this repository is the one we use to build our CSS and JS for front-end deployment. Most new work should be started in a new branch in Git. 

To set up a new branch, type:

```bash
git checkout -b "new-branch-name"
```

This will create, and switch to, a new branch in Git. Make your changes as usual, then run `git add` and `git commit -m "Your concise and descriptive commit message"`. When you come to push your changes you'll need to do a slightly different command in order to create the new branch on the remote:

```bash
git push -u origin new-branch-name
```

You can find more about our recommended branching, versioning and naming conventions in our [development docs](https://university-of-york.github.io/version-control/)

We will merge any signed-off branches into `dev` and they will be deployed in the next release. 