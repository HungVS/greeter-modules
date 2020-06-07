# NPM package publishment: 
## Register: 
Access [this](https://www.npmjs.com/signup) to proceed the action.
## Verify email address: 
You must log in to the registered email address and verify it through the email sent by **npm**.
## Login to npm using terminal: 
1. **npm login**: Proceed the login action.
2. **npm whoami**: Check login.
# Technology notes: 
## Create **.gitignore**: 
Run this command: **echo node_modules > .gitignore**.
## Set up test environment:  
1. **npm install --save-dev jest**: Install **Jest** modules.
2. **npm i @types/jest**: Install definition files of **Jest** modules.
3. **npm i ts-jest**: Install compiler for **TS version** of **Jest**. 
4. **npm install typescript**: Install **TypeScript** to support **TS Jest**. 
5. Config **jest.config.js**.
## Remove Git cache: 
* **git rm --cached -r [\<directory>]**: Remove the specified directory from **Git staging area**. 
* E.g. **git rm --cached -r node_modules dist types**, **git rm --cached -r -f .**.
## Define version for modules: 
* **npm version [\<version>]**.