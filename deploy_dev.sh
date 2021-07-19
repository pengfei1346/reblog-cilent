#!/usr/bin/env bash
echo 'build...'
yarn build
echo 'upload...'
scp -r dist root@62.234.90.11:/u01/project/blog/reblog-chache/
