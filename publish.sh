#!/bin/bash

# i don't know why.. but the ghpages package didn't work,
# something about open file

# gh-pages -t -d frontend/out

set -e

git checkout master || true

rm -rf /tmp/osfah || true
git clone "$(git config --get remote.origin.url)" /tmp/osfah

git -C /tmp/osfah checkout gh-pages || git -C /tmp/osfah branch gh-pages
git -C /tmp/osfah checkout gh-pages || true
git -C /tmp/osfah pull origin gh-pages || true

ls -A /tmp/osfah | grep -v .git | xargs -I {} rm -rf /tmp/osfah/{}
rm /tmp/osfah/.gitignore || true

if [ ! -d "frontend/out/" ]; then yarn build; fi
ls -A frontend/out | xargs -I {} mv frontend/out/{} /tmp/osfah/
rm -rf frontend/out

git -C /tmp/osfah add -A;
git -C /tmp/osfah commit -am 'publish gh-pages'
git -C /tmp/osfah push origin gh-pages

rm -rf /tmp/osfah || true
