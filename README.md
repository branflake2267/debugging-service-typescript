# Debugging a backend service written with TypeScript
This is one way to debug a simple backend service written with TypeScript. 

## Youtube Tutorial


## Configuration
| Setting | Value |
| --- | --- |
| Purpose | Backend service |
| Language | TypeScript |
| IDE | Visual Studio Code |
| Architecture | npm/node |


## Build

* Run `npm run build`


## Debugging

### Debug with Visual Studio Code
VS Code can run the service which allows for execution breakpoints, stack tracing, variable inspection and stack analysis. 

* Open VSCode and go to the launchers and run `Launch Service`.


### Debug with npm
npm can execute the service, but start with building it first.

* Run `npm run build`
* Run `npm run service`