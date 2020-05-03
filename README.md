# Chefapi_web
Web pages and nginx configuration for Chef Conf 2020 talk.

# General Approach
The website for the demonstration uses html, javascript and css files. The intent
was to keep the site simple and concentrate on the API calls and demonstrate

# Installation
This website was installed and runs on the developers Mac. The site will be
packaged using Chef Habitat at some point. Here are the installation steps.
* Install nginx
* Install /usr/local/etc/nginx/nginx.conf from config/nginx.conf
* Create a /usr/local/etc/servers directory
* Install /usr/local/etc/nginx/servers/chefapi.conf from config/chefapi.conf
* Install the web page objects at /usr/local/var/www from the site directory
* Run the nginx command to start the application
* The safari browser was used. Firefox use fails. Accept the self signed certificate.  Access using https://localhost:8143

## Ports
* 8143 https to the website
* 

## Linting
* Use "standard" https://standardjs.com
