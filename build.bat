mkdir "src/files/fonts"
mkdir "src/files/icon"
mkdir "src/files/images"

mkdir "src/js"
mkdir "src/scss"
mkdir "src/templates"

echo head> 													src/templates/index.jade
echo 	link(href="css/main.css" rel="stylesheet")>> 		src/templates/index.jade
echo 	meta(charset="utf-8")>> 							src/templates/index.jade
echo body>> 												src/templates/index.jade

echo html,body{> 					src/scss/main.scss
echo 	width: 100%;>> 				src/scss/main.scss
echo 	height: 100%;>> 			src/scss/main.scss
echo }>> 							src/scss/main.scss

echo //FrontEnd Scripts> src/js/main.js