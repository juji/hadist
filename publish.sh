#!/bin/bash

# i don't know why.. but the ghpages package didn't work,
# something about open file

# gh-pages -t -d frontend/out

set -e

mv frontend/out/ /tmp/osfah/

git checkout gh-pages
git pull origin gh-pages

ls | grep -v .git | xargs rm -rf

mv /tmp/osfah/* /tmp/osfah/.* .

git add -A
git commit -am $1

git push origin gh-pages
