# UNIVERSITY OF YORK DESIGN PATTERNS

This repository holds the design patterns used on the [University of York's website](http://www.york.ac.uk).

## Setting up your development environment

You will need to have NodeJS (including NPM), Git, Ruby (including RubyGems) and Compass installed on your machine. On Windows, the easiest way to do this is with [Chocolatey](https://chocolatey.org/) and on Mac you can use [Homebrew](http://brew.sh/).

You'll also need a global install of Grunt (a task runner) and Bower (a package manager), which you can do by typing:

```bash
npm install -g grunt-cli
npm install -g bower
```

## Getting ready

After cloning this repository, you will need to run:

```bash
gem install hologram
npm install
```

This will load all the necessary modules for you to continue development.

Next, run `grunt bower`. This will load all the third-party JS libraries that we need from Bower into the `src/js/vendor` directory, ready to use later on.

You're now ready to start making stuff!

## Active development

To work on the front-end designs, run `grunt dev` in the terminal. This will create the active templates and start a local server, which will live reload as you code.

If you amend the markup for a component, you must update the documentation comment in the SCSS. This will keep the style guide up-to-date.

## Building for deployment

Running a `grunt build` task will create a `build` directory, which will contain the minified CSS, the uglified JS and the optimised images ready to deploy to a server.

## Building the style guide

To redeploy the style guide, run `grunt docs`. It will run a build process and then recreate the documentation using [Hologram](http://trulia.github.io/hologram/).

**TODO:** Get the `docs` task to upload the style guide to a server.

## A note about development

The `master` branch of this repository is the one we use to build our CSS and JS for front-end deployment. Most new work should be started in a new branch in Git. To set up a new branch, type:

```bash
git checkout -b "new-branch-name"
```

**TODO:** standardise branch names using slash syntax e.g. new-feature/carousel (see http://www.guyroutledge.co.uk/blog/git-branch-naming-conventions/ for details)

This will create, and switch to, a new branch in Git. Make your changes as usual, then run `git add` and `git commit -m "Your concise and descriptive commit message"`. When you come to push your changes you'll need to do a slightly different command in order to create the new branch on the remote:

```bash
git push -u origin new-branch-name
```

We will merge any signed-off branches into `master` and they will be deployed in the next build.