#!/bin/bash

yarn

# init, clean everything

echo "downloading data"
rm -rf $DATA_DIR
git clone $DATA_REPO $DATA_DIR

echo "creating index"
rm -rf frontend/lib/data.json
yarn createIndex

echo "copying data"
rm -rf frontend/lib/books
cp -R "$DATA_DIR/books" frontend/lib/books

echo "creating sitemaps"
rm -rf frontend/public
cp -R frontend/public.stock frontend/public
yarn createSitemaps

cd frontend
echo "adding env vars"
echo "GOOGLE_CSE=$GOOGLE_CSE" > .env.local
echo "DATA_REPO_URL=$DATA_REPO_URL" >> .env.local

yarn

echo "building ..."
yarn build
yarn export

touch "out/.nojekyll"
touch "out/CNAME"
echo "$APP_DOMAIN" > out/CNAME

cd ..

echo "Publishing to ghpages"
yarn ghpages
