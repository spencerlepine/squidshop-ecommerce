const morgan = require('morgan');
const fs = require('fs');

module.exports = (app, config) => {
  if (config.NODE_ENV === 'production') {
    (async () => {
      await fs.promises.writeFile(`${__dirname}/access.log`, 'test', 'utf8');
    })();

    const productionLogStream = fs.createWriteStream(`${__dirname}/access.log`, { flags: 'a' });

    app.use(morgan({ stream: productionLogStream }));
  } else {
    app.use(morgan('dev'));
  }
};
