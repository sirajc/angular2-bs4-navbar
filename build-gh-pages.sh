#!/bin/sh
echo Cleaning io-gh-pages
cd io-gh-pages
rm -rf app/*
cd ..
echo copying app files...
cd build/app
cp -Rv . ../../io-gh-pages/app/
echo copying main files
cp ../main-io.js ../../io-gh-pages/
echo copying images...
cd ..
cd images
cp -Rv . ../../io-gh-pages/images
cd ../../io-gh-pages/
echo removing sourcemaps
find . -type f -name '*.js.map' -delete
echo staging files in git
git add .
echo "---------------------------------------------------------------"
echo "Git Status ouput"
echo ""
git status
echo ""
echo ""
echo ""
echo "================================================================"
echo "Update the barrels from system-config.ts to system-config-io.js"
echo "================================================================"
