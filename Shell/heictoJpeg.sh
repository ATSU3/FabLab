#!/bin/zsh

for file in `ls *.HEIC`; do
  filename=$file:t:r
  sips --setProperty format jpeg $file --out ${filename}.jpg
done