# HaoTv
[![wercker status](https://app.wercker.com/status/a21ebedfad0c675440adf27e1131bd88/s "wercker status")](https://app.wercker.com/project/bykey/a21ebedfad0c675440adf27e1131bd88)
[![Coverage Status](https://coveralls.io/repos/zhanghaowx/HaoTv/badge.svg?branch=master&service=github)](https://coveralls.io/github/zhanghaowx/HaoTv?branch=master)

Build a website using AngularJs for collecting online TV/Movie resources.

### Theme
[Metronic] is used as the base theme of the website
![Metronic Preview](http://keenthemes.com/assets/img/itempage/banner_newupdate.jpg)

### IDE
[Bracket] by Adobe is recommended. Here is a list of plugins I use:
* Beautify
* Brackets Icons
* Extract for Brackets (Preview)
* File Tree Exclude
* Markdown Preview
* Reasonable Comments
* Standard Code Style
* Whitespace Normalizer

### Unit Test and Integration Test
##### run karma test and watch for file changes
```
npm test
```
##### single run of all unit test
```
npm run test-single-run
```
##### run integration test
```
npm start
npm run protractor
```

### Deploy

**Manually** deploy to Digital Ocean

1. Login your account and create a new droplet.
 * Under "Select Image", choose "Applications -> LAMP on 14.04", or similar options if not available.

2. Install git and clone the repository into /var/www
 ```
cd /var/www
sudo apt-get install git
git clone https://github.com/zhanghaowx/HaoTv.git
 ```

3. Run installation scripts and follow on screen instructions
 ```
export ENVATO_USERNAME=<Your Envato Username>
export ENVATO_API_KEY=<Your Envato API Key>
export ENVATO_PURCHASE_CODE=<Your Purchase Code for Metronic Theme>
chmod +x install.sh && ./install.sh
 ```
4. Follow [How To Set Up Apache Virtual Hosts on Ubuntu 14.04 LTS] to finish websiate setup.

**Automatically** deployment by [wercker]

1. Choose one successful build, select *Deploy to -> Deploy Target*

### Environment
Production environment is built upon DigitalOcean Ubuntu 14.04 LAMP Server

[wercker]:https://app.wercker.com/#applications/55c81b587ed0b2ec760611e0
[Bracket]:http://brackets.io
[Metronic]:http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469
[How To Set Up Apache Virtual Hosts on Ubuntu 14.04 LTS]: https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-14-04-lts
