# ExAct: A React + Express project generator
Creates a React + Express project that uses [parceljs](https://parceljs.org/) to serve React

## Usage
Install the package:
`npm i -G exact-generator`
or
`yarn global add exact-generator`

Now you can run:
`exact-generator`
This will copy the template project to your current directory. This includes a barebones express server which will serve React at `/`, provided you have run the parcel command.
`npm run parcel` or `yarn run parcel`
You can then couple this with something like [react-router](https://reactrouter.com/) to start creating a single-page application.