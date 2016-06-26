#!/bin/sh
echo -e "\e[32mPreparing the build...\e[0m"
gulp build
echo -e "\e[32mCompressing images...\e[0m"
gulp images
echo -e "\e[31mCleaning io-gh-pages\e[0m"
cd io-gh-pages
rm -rf app/*
cd ..
echo -e "\e[32mcopying app files...\e[0m"
cd build/app
cp -Rv . ../../io-gh-pages/app/
echo -e "\e[32mcopying main files\e[0m"
cp ../main-io.js ../../io-gh-pages/
echo -e "\e[32mcopying images...\e[0m"
cd ..
cd images
cp -Rv . ../../io-gh-pages/images
cd ../../io-gh-pages/
echo -e "\e[32mremoving sourcemaps\e[0m"
find . -type f -name '*.js.map' -delete
echo -e "\e[32mstaging files in git\e[0m"
git add .
echo -e "\e[36m---------------------------------------------------------------\e[0m"
echo -e "\e[32mGit Status ouput\e[0m"
echo ""
git status
echo ""
echo ""
echo -e "\e[36m================================================================\e[0m"
echo "Update the barrels from system-config.ts to system-config-io.js"
echo -e "\e[36m================================================================\e[0m"
