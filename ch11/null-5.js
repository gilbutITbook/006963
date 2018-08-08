const {create, env} = require('sanctuary');
const S = create({checkTypes: false, env: env});

Object.getPrototypeOf(S.Just());
Object.getPrototypeOf(S.Nothing());
