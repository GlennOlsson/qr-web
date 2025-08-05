#!/bin/bash
ROOT_DIR=$(pwd)

DOCKERFILE_PATH=$ROOT_DIR/site
DOCKER_TAG=qr-site-builder

NPM_PKG_PATH=$DOCKERFILE_PATH/qr-site

cd $DOCKERFILE_PATH

docker build -t $DOCKER_TAG .
docker run --rm -v $NPM_PKG_PATH/dist:/output $DOCKER_TAG cp -r dist /output
