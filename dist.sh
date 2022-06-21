#!/usr/bin/env bash

# package.json
npx clear-package-json package.json --fields repository,publishConfig,scripts,dependencies,private -o dist/package.json

# README
cp README.md dist/README.md

# README
cp LICENSE dist/LICENSE
