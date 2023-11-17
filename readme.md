# step

- `npm init -y` -> `npm install express cors`->`npm install mongoose --save`->`npm install typescript --save-dev` -> `npm install dotenv --save` ->`tsc -init`
- config tsc file rootdir and outdir -> add build cmd in scripts "build":"tsc",
- create server.ts -> joto doroner connectivity seta amra ei server.ts e krbo
- create index.ts inside the config folder to use configuration,
- [typescript eslint prettier setup](https://blog.logrocket.com/linting-typescript-eslint-prettier/)
- `npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev`
- `npx eslint --init`
- `npm i ts-node-dev --save-dev` -> `tsnd --respawn ./src/server.ts` --> for relode on every save on our server.ts file no need build before production
