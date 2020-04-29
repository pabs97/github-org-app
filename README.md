This web app allows you to search for repos within a github org, and then see recent commits for the repo.
This app requires the caching server found here
It needs to run with https://github.com/pabs97/github-org-api
Follow the set up instructions there first.

## Setup
1. This app requires the caching server found here
It needs to run with https://github.com/pabs97/github-org-api
Follow the set up instructions there first.
2. Clone this repo 
```
git clone git@github.com:pabs97/github-org-app.git
```
3. Install it 
```
npm i
```
4. Start
```
npm start
```

## Usage
1. In the browser, visit http://localhost:3000/repos
2. In the search bar, type in a __valid__ org name such as "Netflix" and click Search
3. (Optional) sort the results using the radio buttons
4. Click on one of the resulting repos to see recent commits, this will take you to another view
5. In the list of recent commits, you can click on the commit hash to see more info externally (github.com)



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## TODO
- [x] better state management, to remember what repos you were on before
- [ ] more unit tests
- [x] sorting not working
tooltips: hover
- [x] responsive ui changes between desktop and mobile
- [ ] sometimes there is no render between pages, can be overcome by refreshing
- [ ] add a loading message while search is running
- [ ] sass config file
