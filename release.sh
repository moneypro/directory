yarn build
git checkout gh-pages
mv temp.html index.html
git commit -a -m "update page $(date)" 
git push origin gh-pages
git checkout master