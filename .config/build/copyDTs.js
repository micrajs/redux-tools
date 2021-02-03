const fg = require('fast-glob');
const { join, sep } = require('path');
const { copyFileSync } = require('fs');

const root = (...paths) => join(__dirname, '../..', ...paths);

fg.sync([root('src/*.d.ts')])
  .forEach((file) => {
    const name = file.split(sep).pop();
    if (name !== 'test.d.ts') {
      copyFileSync(file, root('.micra', name));
    }
  });
