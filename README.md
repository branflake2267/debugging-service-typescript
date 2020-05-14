# Debugging a backend service written with TypeScript
This is a simple backend service project template written with TypeScript. 

[![Debugging Video Tutorial](https://img.youtube.com/vi/cjTZT5S3MrY/0.jpg)](https://www.youtube.com/watch?v=cjTZT5S3MrY)


## Project Configuration
| Setting | Value |
| --- | --- |
| Purpose | Backend service |
| Language | TypeScript |
| Architecture | npm/node |
| IDE | Visual Studio Code |
| License | GPL v3 |
| Tutorial | [Youtube Tutorial](https://www.youtube.com/watch?v=cjTZT5S3MrY) |


## Build

* Run `npm install`
* Run `npm run build`
* The source is output to the `./dist` directory.



## Debugging

### Debug with Visual Studio Code
VS Code can run the service which allows for execution breakpoints, stack tracing, variable inspection and stack analysis. 

* Open VSCode and go to the launchers and run `Launch Service`.

### Debug with npm
npm can execute the service, but start with building it first.

* Run `npm run build`
* Run `npm run service`
