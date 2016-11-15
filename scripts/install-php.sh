#!/bin/sh
echo 'Installing PHP'
mkdir bin
mkdir logs
cp php/osx/php bin/php
echo 'PHP install complete.'
echo 'Adding default .ini files'
cp php/default.php.ini bin/php.ini
echo 'Running php -v'
bin/php -v
echo 'No errors should be present'
