#!/bin/sh
echo 'Wiping install.'
rm -R bin || echo 'Did not remove the bin directory.'

rm -R logs || echo 'Did not remove the logs directory.'

rm npm-debug.log || echo 'Did not remove the npm-debug.log.'

rm -R node_modules || echo 'Did not remove node_modules directory.'

echo 'The script needs sudo permission to move the web directory.'
echo 'You may need to enter your password below.'

sudo mv web/ "web_backup_$(date +%Y_%m_%d_%H:%M:%S)/" || true

echo ''
echo 'Wipe complete.'
echo ''
echo 'If you receieved a message that a file or directory was not removed,'
echo 'it may have already been removed or you will need to delete it manually.'
