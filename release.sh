yarn build
git checkout gh-pages
git checkout master assets
mv temp.html index.html
git commit -a -m "update page $(date)" 
git push origin gh-pages
git checkout master
