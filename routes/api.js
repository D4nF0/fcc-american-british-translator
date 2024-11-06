'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;
      let translatedText = "";

      if( !locale || text == undefined ){
        res.send({ error: 'Required field(s) missing' });
        return;
      }

      if( text == "" ){
        res.send({ error: 'No text to translate' });
        return;
      }

      if( locale == "american-to-british" ){
        translatedText = translator.toBritish( text );
      } else if( locale == "british-to-american" ){
        translatedText = translator.toAmerican( text );
      } else {
        res.send({ error: 'Invalid value for locale field' });
        return;
      }

      if( !translatedText || translatedText == text ){
        res.send({ text, translation: "Everything looks good to me!" })
      } else {
        res.send({ text, translation: translatedText });
      }
    });
};
