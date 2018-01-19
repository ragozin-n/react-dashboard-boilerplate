## react-dashboard-boilerplate

### Content:

* [Semantic UI framework](https://react.semantic-ui.com)
* [Airbnb eslint config](https://gist.github.com/ragozin-n/93eaa0fcd3beff3e5257d1eb83fa8417) with little improvements
* [react-router](https://github.com/ReactTraining/react-router) for navigation
* [ValidatorJS](https://github.com/chriso/validator.js) for string validation
* [Redux](https://github.com/reactjs/react-redux) state container with [devtools](https://github.com/zalmoxisus/redux-devtools-extension)
* [Redux Thunk](https://github.com/gaearon/redux-thunk) for async actions
* [Axios](https://github.com/axios/axios) for all kind of HTTP requiests (you might not need firebase)
* [Firebase](https://firebase.google.com) for token-based authorization and data storing

### Usage:
```bash
git clone https://github.com/ragozin-n/react-dashboard-boilerplate.git
cd react-dashboard-boilerplate && yarn install
```
Place firebase_config.json to root directory and start develop with
```bash
yarn start
```
or build production code with
```bash
yarn build
```
