#!/bin/sh
yarn build
touch dist/.nojekyll
cp CNAME dist/CNAME
git subtree push --prefix dist/ origin gh-pages
