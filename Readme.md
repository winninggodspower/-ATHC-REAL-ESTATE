# ADHC Adeyemi-Tosin Homes and consults ltd

real estate website  
Adeyemi Tosin Homes and Consult Limited is a renowned real estate company, registered (with RC number : 1892071) and recognized by the federal republic of Nigeria. It has several branches in Nigeria with its head quarters situated at Neckta avenue, GU ake road beside shell cooperative estate.

## TECHNOLOGIES USED
- Django
- Wagtail Cms
- Tailwind Css
- Html, Css AND JavaScript

## RUN COMMAND
`python manage.py runserver` to start django development server

`npm run build-css` to start tailwind css build in watch mode


# Notes For Developers
- after the creation of any new javascript file. it should be added to the webpack configuration so that it can be minified, and your html file should link to the minified file

# Things to do before after every code change
- run collectstatic command
- pull latest changes from cpanel server
- stop and start the cpanel server
- copy the static folder to the public_html folder