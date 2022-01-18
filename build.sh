#!/bin/bash
yarn

echo "building ..."

cd frontend
yarn build
yarn export

touch "out/.nojekyll"
touch "out/CNAME"
echo "$APP_DOMAIN" > out/CNAME

cd ..
