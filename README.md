# New Project Setup

This is my current boilerplate for setting up a JS project.

It includes configuration to build packages that can be imported either with ES2015 `import` or CommonJS `require`, as well as included in the browser in a `script` tag.

It also includes basic linting and formatting, generating documentation with JSDoc, test configuration with Jest, and a simple Babel setup. There are also Git hooks for pre-commit (linting and formatting) as well as pre-push (running unit tests). These hooks can be bypassed with the Git `--no-verify` option.

The new project includes the MIT license by default, but you can change that if you want.

Also, if you're not me, you'll probably want to change the `author` info in `package.json`.

After cloning or downloading this repo, I recommend running `npm init` to customize your project's info and then `npm install` to install the necessary dev dependencies. There are no production dependencies defined.

Then you should probably replace the info in this README to describe your project.

