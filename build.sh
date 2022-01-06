#!/bin/bash

rm -rf $DATA_DIR
rm -rf frontend/pages
rm -rf frontend/public

echo "downloading data"
git clone $DATA_REPO $DATA_DIR

cp -R frontend/public.stock frontend/public
echo "creating sitemaps"
yarn createSitemaps

cd frontend
echo "adding GOOGLE_CSE env vars"
echo "GOOGLE_CSE=$GOOGLE_CSE" > .env.local

echo "building initial pages"
cp -R pages.stock pages

yarn build
yarn export
touch out/.nojekyll
touch out/CNAME
echo "$APP_DOMAIN" > out/CNAME

cd ..
echo "creating pages"
yarn createPages
rm frontend/out/template.html

yarn publish
