#!/usr/bin/env sh

# abort on errors
set -e
# minify css
npx tailwindcss -o src/css/output/output.css --minify
# remove unused directory
rm -r src/css/input
# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:vibovenkat123/cv-app-maker.git main:gh-pages

cd -