#!/bin/bash

# i don't know why.. but the ghpages package didn't work,
# something about open file

# gh-pages -t -d frontend/out

set -e

rm -rf /tmp/osfah || true
mv frontend/out/ /tmp/osfah/

git checkout gh-pages || git branch gh-pages && git checkout gh-pages
git pull origin gh-pages || true

ls | grep -v .git | xargs rm -rf

mv /tmp/osfah/* /tmp/osfah/.* .

git add -A
git commit -am $1

git push origin gh-pages
