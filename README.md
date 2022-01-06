# OSFAH v0.0.1

Open Search For Al-Hadits v0.0.1

OSFAH: It sounds arabic, but it's not.. I just made that up

---

Just getting tired of searching Hadits in the wild... i'll just make my own.

This is a search app for hadits.

- It's MIT
- It uses Google custom search engine (now Programmable Search). So it's free, but requires time to crawl
- It is published via github
- It will be publish using a custom domain name, so you should have one prepared
- You can modify the data-source--to use your own, as long as it has the same directory and data structure with the default
- The app it self is in Indonesian, and it uses Indonesian data.


## Steps to build & publish

1. prepare a domain name for [github page](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
2. prepare [Google CSE](https://programmablesearchengine.google.com/about/) for that domain
3. Modify `.env` to suit your setup
4. `yarn build && yarn ghpages`

Number 4 will build and publish the app via github-page, make sure you have everything ready.

You can also check your result after build:
1. `yarn build`
2. `yarn serve`
3. go to [http://127.0.0.1:8080/](http://127.0.0.1:8080/)


## Notes

- the build command works on Mac, probably also work on bash on other systems (i haven't check)
- pull requests are welcome for modifications that benefits all
- a fork is recommended for those who want to modify the source for personal/organizational needs: like adding a brand, or using your own domain
- default data source: https://github.com/sutanlab/hadith-api
