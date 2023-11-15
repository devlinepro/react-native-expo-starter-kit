# React Native + Expo Starter Kit

Don't waste time setting up projects, required libraries, linters, and development workflows.  

## What's included

- TypeScript support
- Redux
- Redux persist
- Redux toolkit
- RTK query
- Configured persistent redux store
- React navigation
- SVG support
- Configurable global error handler
- Expo notifications
- Data preloader before Splash screen is hidden
- Safe areas with react navigation
- Expo icons
- Metro bundler on web with hot reload enabled

## CI/CD

- Automated workflows with GitHub actions
- Fully automated build and submit for iOS/Android with EAS
- Automatic versioning with semantic release
- Automatic release reports with commit messages
- Conventional commits with commitlint
- GIT hooks with husky
- Prettier for code-style

## Getting started

1. Clone the repository
2. Update app.json file: expo.name, expo.slug, expo.ios.bundleIdentifier, expo.android.package, expo.extra.eas.projectId
3. Update eas.json file: build.base.env.EXPO_PUBLIC_BASE_URL, submit.production.ios
4. Update package.json file: name
5. Create EXPO_TOKEN secret
6. Create GOOGLE_SERVICE_ACCOUNT_KEY secret
7. Set main branch -- main. Or change .github/workflow files
8. Create branches: production/ios, production/android
9. Make first build and submit manually

## Roadmap

- i18n
- fix typings
- graphql base query