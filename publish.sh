#!/bin/bash

# i don't know why.. but the ghpages package didn't work,
# something about open file

# gh-pages -t -d frontend/out

set -e

git checkout master || true

if [ ! -d "frontend/out/" ]; then
  yarn build
fi

rm -rf /tmp/osfah || true
mv frontend/out/ /tmp/osfah/

rm -rf /tmp/osfah-repo || true
git clone "$(git config --get remote.origin.url)" /tmp/osfah-repo

DIR="$PWD"

cd /tmp/osfah-repo
git checkout gh-pages || git branch gh-pages
git checkout gh-pages || true
git pull origin gh-pages || true

ls -A | grep -v .git | xargs rm -rf
rm .gitignore || true

ls -A /tmp/osfah | xargs -I {} mv /tmp/osfah/{} "$PWD/"
rm -rf /tmp/osfah

git add -A; git commit -am 'publish gh-pages'

git push origin gh-pages

cd $PWD
rm -rf /tmp/osfah-repo || true
