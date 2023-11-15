# React Native + Expo Starter Kit

Don't waste time setting up project, required libraries, linters, and development workflows. Everything you need is
included: useful libraries, automated build and submission, GitHub workflows for teamwork, automatic versionning and
changelog. Read more below.

## What's included

### Must have libraries

- [TypeScript](https://github.com/microsoft/TypeScript) support;
- [Redux](https://github.com/reduxjs/react-redux) & [Redux Toolkit](https://redux-toolkit.js.org/)
  & [Redux Persist](https://github.com/rt2zz/redux-persist#readme);
- [React Navigation](https://github.com/react-navigation/react-navigation) (safe areas already configured);
- Expo vector icons and support of SVG for custom icons;
- Configured Metro bundler for Web with hot reload;

### Useful hooks and components

- Expo notifications hook &mdash; requests permissions and returns expo push token for further usage;
- Data preloader hook &mdash; preload data before hiding Splash screen;
- Global HTTP error handler &mdash; component and middleware for catching every HTTP request error and display a message
  to end users;
- Sample slices and RTK APIs.

### Automated build and submission

Just push to the `production` branch and wait notification in 10-15 minutes that release is available for testing.

- Fully automated build and submit to app stores with [GitHub Actions](https://docs.github.com/en/actions)
  and [EAS](https://docs.expo.dev/eas/);
- Automatic build number incrementing;
- Separate flows for `production/ios` and `production/android` branches;

### Team work

Don't worry about maintaining the code style.

- [Prettier](https://github.com/prettier/prettier) for code style checks;
- [Commitlint](https://github.com/conventional-changelog/commitlint) for checking commit messages;
- [Husky](https://github.com/typicode/husky) for git hooks that check commit message and code style before commit;
- Commitlint and Prettier also start on pull request opened/reopened using GitHub Actions;
- Command for starting an app with [ngrok](https://ngrok.com/) tunnel.

### Releases & versioning

Just push to the `main` branch to create a new release, increment version and generate changelog based on commit
messages.

- [Semantic Release](https://github.com/semantic-release/semantic-release) is used for automatic versioning and
  generating release notes;
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format is used for generating new version and
  changelog;

### Project structure

`assets` - static assets\
`src` - app sources\
`src/app` - non-UI app part\
`src/app/api` - APIs\
`src/app/common` - helpers\
`src/app/interfaces` - interfaces that describe data structures\
`src/app/middlewares` - redux toolkit middlewares\
`src/app/slices` - redux toolkit slices \
`src/app/store.ts` - add your slices, reducers, middlewares here \
`src/app/theme.ts` - global theme variables like colors, sizes, component styles\
`src/components` - common app components\
`src/components/ui` - common reusable small UI components\
`src/core` - project-independent part of code that can be used in other projects\
`src/core/api` - base HTTP queries\
`src/core/hooks` - common hooks for logic reuse\
`src/core/store.ts` - redux store configuration\
`src/hooks` - common app hooks for logic reuse\
`src/screens` - one folder per screen\
`src/app.ts` - entrypoint\
`src/navigation.ts` - screens definitions

## Getting started

1. Press the **Use this template** button and create new repository or clone the repository in your console.
2. Create a project on [expo.dev](https://expo.dev)
3. Create an application in App Store Connect;
4. Create an application in Google Play Console;
5. Update `app.json` file with these values:
    - `expo.name` &mdash; your app name;
    - `expo.slug` &mdash; copy from the created expo project;
    - `expo.ios.bundleIdentifier` &mdash; change it like in App Store Connect;
    - `expo.android.package` &mdash; change it like in Google Play;
    - `expo.extra.eas.projectId` &mdash; copy from the created expo project;
6. Update `eas.json` file these values:
    - `build.base.env.EXPO_PUBLIC_BASE_URL` &mdash; this endpoint will be used for RTK base query;
    - `submit.production.ios` &mdash; fill these values for automated submissions;
7. Update `package.json` file &mdash; set name of your project;
8. Create access token for robot users in Expo console;
9. Create `EXPO_TOKEN` secret in project settings on GitHub;
10. Make first Apple build & submit manually from your console. After that Expo will generate and save all necessary
    certificates and everything will be ready for automated workflow;
    - `npm i -g eas-cli`
    - `eas login`
    - `npm run expo-build-ios`
    - `npm run expo-submit-ios`
11. Make first Android build. Follow these instructions:
    - Create service account and save json file with keys;
    - Create GitHub secret in your repository `GOOGLE_SERVICE_ACCOUNT_KEY` with base64-encoded contents of the json file;
    - Set privacy policy URL https://github.com/expo/fyi/blob/main/missing-privacy-policy.md
    - Create first expo build manually:
      - `npm run expo-build-android`
    - Download `.aab` file from the Expo console and manually make first submission https://github.com/expo/fyi/blob/main/first-android-submission.md
12. Create branches: `production/ios`, `production/android`, `production/all`
13. Check GitHub actions and you should see started workflows. 

## Roadmap

- [ ] i18n
- [ ] Fix typings for Redux Toolkit
- [ ] GraphQL base query
- [ ] What's else? Open an issue