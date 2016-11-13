#!/bin/sh
echo 'Downloading Drupal'
bin/php bin/drush dl drupal --drupal-project-rename=web
echo 'Download complete'
echo 'Modifying Classy base theme to work with Node.js'
cp "assets/html.html.twig" "web/core/themes/classy/templates/layout/html.html.twig"
echo 'Installing Drupal in the web directory'
cd web || exit
../bin/php ../bin/drush -y site-install --db-url='sqlite://sites/default/files/.ht.sqlite' --account-pass=password --site-name="Electron Drupal"
echo "Drupal has been installed"
../bin/php ../bin/drush status
echo 'No errors should be present'
