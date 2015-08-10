# HaoTv
Build a website using AngularJs for collecting online TV/Movie resources.

### Metronic
[Metronic] is used as the base theme of the website
![Metronic Preview](http://keenthemes.com/assets/img/itempage/banner_newupdate.jpg)

### Deploy
#### Deploy to Digital Ocean
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

### Environment
Production environment is built upon DigitalOcean Ubuntu 14.04 LAMP Server

[Metronic]:http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469
[How To Set Up Apache Virtual Hosts on Ubuntu 14.04 LTS]: https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-14-04-lts