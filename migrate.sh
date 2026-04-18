#!/bin/bash
# run this from the root of your portfolio repo
# it reorganises your files and sets up the dev branch

set -e

echo "==> Creating folder structure..."
mkdir -p assets/images assets/pdfs css js

echo "==> Moving files..."
# Images
[ -f aayush.png ]   && git mv aayush.png   assets/images/aayush.png
[ -f favicon.png ]  && git mv favicon.png  assets/images/favicon.png

# PDFs
for f in *.pdf; do
  [ -f "$f" ] && git mv "$f" "assets/pdfs/$f"
done

# CSS & JS
[ -f style.css ]  && git mv style.css  css/style.css
[ -f script.js ]  && git mv script.js  js/script.js

echo "==> Replacing asset paths in index.html..."
# CSS link
sed -i 's|href="style.css"|href="css/style.css"|g' index.html
# JS script tag
sed -i 's|src="script.js"|src="js/script.js"|g' index.html
# Profile photo
sed -i 's|src="aayush.png"|src="assets/images/aayush.png"|g' index.html
# Favicon
sed -i 's|href="favicon.png"|href="assets/images/favicon.png"|g' index.html
# PDF links — cert links and master button
sed -i 's|href="\([^"]*\.pdf\)"|href="assets/pdfs/\1"|g' index.html

echo "==> Committing restructure on current branch..."
git add -A
git commit -m "chore: reorganise project into assets/css/js structure"

echo "==> Setting up dev branch..."
git checkout -b dev
git push -u origin dev

echo ""
echo "Done! Your repo is now structured and a dev branch has been pushed."
echo ""
echo "Next steps:"
echo "  - All future work goes on dev or feature/* branches"
echo "  - Merge to main only when ready to go live"
