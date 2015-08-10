#!/bin/bash

echo "================="
echo "Check Environment"
echo "================="

export THEME_DIR_NAME="Metronic"

##### check required packages #####
if ! type "unzip" &> /dev/null; then
    echo "Could not find command unzip, please install it first, abort."
    exit 1
else
    echo "unzip - found"
fi

##### cleanup environment #####
if [ -d $THEME_DIR_NAME ]; then
    echo "Removing old install of Metronic theme ... "
    rm -r $THEME_DIR_NAME
    mkdir $THEME_DIR_NAME
fi

echo "==============="
echo "Download Themes"
echo "==============="

##### install jupiter theme #####
if [ -z "$ENVATO_USERNAME" ]; then
    echo "Fail to find evnato username in environment variable, abort."
    exit 1
fi

if [ -z "$ENVATO_API_KEY" ]; then
    echo "Fail to find evnato api key in environment variable, abort."
    exit 1
fi

if [ -z "$ENVATO_PURCHASE_CODE" ]; then
    echo "Fail to find evnato purchase code for Metronic Theme in environment variable, abort."
    exit 1
fi

# here we get the response from the Envato APIs using curl library
echo "Querying download URL for theme packages ... "
response=`curl -s "http://marketplace.envato.com/api/edge/$ENVATO_USERNAME/$ENVATO_API_KEY/download-purchase:$ENVATO_PURCHASE_CODE.json"`
if [ $? != 0 ]; then
    echo "Fail to get download URL from envota marketplace, abort."
    exit 1
fi

response_error=`echo $response | python -mjson.tool | grep -Po '(?<="error": ")[^"]*'`
if [ "$response_error" != "" ]; then
    echo "Fail to get download URL from envota marketplace, reason: $response_error"
    exit 1
fi

response_url=`echo $response | python -mjson.tool | grep -Po '(?<="download_url": ")[^"]*'`

download_file_dir="download"

if [ ! -d "$download_file_dir" ]; then
    mkdir $download_file_dir
else
    rm -r $download_file_dir/*
fi

download_file_name="metronic.zip"

echo "Downloading theme package from $response_url ... into direcotry $download_file_dir"
wget $response_url -O $download_file_dir/$download_file_name
if [ $? != 0 ]; then
    echo "Fail to download theme package from envota marketplace, abort."
    exit 1
fi

echo "=============="
echo "Install Themes"
echo "=============="

echo "Extract theme content from package file ... "
unzip $download_file_dir/$download_file_name -d $THEME_DIR_NAME
if [ $? != 0 ]; then
    echo "Fail to unzip theme package file $download_file_dir/$download_file_name, abort."
    exit 1
fi

##### finish install #####
echo "====================================================================="
echo "Install Completed!"
echo "                                                         by Hao Zhang"
echo "====================================================================="