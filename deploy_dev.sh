#!/usr/bin/env bash
echo 'build...'
yarn build
echo 'upload...'
scp -P 33 -r dist root@112.124.56.117:/u01/project/blog/reblog-chache/
