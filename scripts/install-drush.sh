#!/bin/sh
echo 'Installing Drush'
bin/php -r "readfile('https://s3.amazonaws.com/files.drush.org/drush.phar');" > drush
mv drush bin/drush
echo 'Drush install complete.'
echo 'Adding default .ini files.'
cp php/default.drush.ini bin/drush.ini
echo 'Running drush core-status'
bin/php bin/drush core-status
echo 'No errors should be present'
