# Interconnected - mobile client

TODO

## Table of contents

- [About this repository](#about-this-repository)
- [Setup](#setup)
- [How to trigger CD](#how-to-trigger-cd)

## About this repository

Technologies used:  
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![React-Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

Automation:  
![CD](https://github.com/Tale152/interconnected-mobile-client/actions/workflows/CD.yml/badge.svg)

Repository activities:  
![GitHub last commit](https://img.shields.io/github/last-commit/Tale152/interconnected-mobile-client)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/Tale152/interconnected-mobile-client?include_prereleases)
![GitHub Release Date](https://img.shields.io/github/release-date/Tale152/interconnected-mobile-client)
![GitHub commits since latest release (by date)](https://img.shields.io/github/commits-since/Tale152/interconnected-mobile-client/latest)

## Setup

Node  
npm install -g expo-cli (running dependency)  
npm start (running command)  
npm install -g eas-cli (building dependency) (https://docs.expo.dev/build-reference/apk/)  
eas build -p android --profile apk (building command)

## How to trigger CD

First create a new tag, including a message that sums up the notes for the new release.

```console
git tag -a v<VERSION> -m "<RELEASE NOTES>"
```

Then push the new tag to the remote repository, triggering [this](https://github.com/Tale152/interconnected-mobile-client/blob/master/.github/workflows/CD.yml) workflow, crating automatically a new [release](https://github.com/Tale152/interconnected-mobile-client/releases/latest) with the compiled APK file.

```console
git push origin --tags
```

## TODO list

- upgrade version in app.json, package.json and package-lock.json on release
- badges
- write README
- write repo description
- dependabot
