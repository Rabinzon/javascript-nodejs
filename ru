#!/bin/bash

#export SITE_HOST=http://javascript.in
#export STATIC_HOST=http://javascript.in

ASSET_VERSIONING=query NODE_LANG=ru NODE_ENV=development WATCH=1 gulp dev | bunyan -o short -l debug
