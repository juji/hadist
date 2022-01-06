#!/bin/bash

yarn

# init, clean everything
rm -rf $DATA_DIR
rm -rf frontend/public

echo "downloading data"
git clone $DATA_REPO $DATA_DIR

echo "creating sitemaps"
cp -R frontend/public.stock frontend/public
yarn createSitemaps

cd frontend
echo "adding GOOGLE_CSE env vars"
echo "GOOGLE_CSE=$GOOGLE_CSE" > .env.local

yarn

echo "building initial pages"
yarn build
yarn export
touch out/.nojekyll
touch out/CNAME
echo "$APP_DOMAIN" > out/CNAME

cd ..
echo "creating pages"
yarn createPages
rm frontend/out/template.html
rm -rf frontend/public

echo "Publishing to ghpages"
yarn ghpages
