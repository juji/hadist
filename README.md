# Open Hadist Search

Just getting tired of searching Hadist in the wild... i'll just make my own..

This is a hadist search webapp.

- It uses google custom search engine (now Programmable Search), so it's free.. but requires time to crawl.
- You can publicly publish the app via github
- It will publish using a custom domain name, so you should have one prepared
- You can modify the source, to use your own, as long as it has the same directory structure with the default
- The app it self is in Indonesian, and it uses Indonesian data.


## Steps to build

1. prepare a domain name for [github page](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
2. prepare [Google CSE](https://programmablesearchengine.google.com/about/) for that domain
2. Modify `.env` to suit your setup
3. `yarn && yarn build`


## Notes

- the build command works on Mac, probably also work on bash on other system (i haven't check)
- pull requests are welcome for modifications that benefits all
- a fork is recommended for those who want to modify the source for personal/organizational needs: like adding a brand, or using your own domain
