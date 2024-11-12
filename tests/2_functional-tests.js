const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
const translator = new Translator();

describe("Functional Tests", () => {
    describe("POST request - api/translate", () => {
        it("Text and locale filled in", ( done ) => {
            chai
            .request( server )
            .post( "/api/translate" )
            .send({
                text: "Mangoes are my favorite fruit.",
                locale: "american-to-british"
            })
            .then(( res ) => {
                assert.equal( res.status, 200 );
                assert.typeOf( res.body.translation, "String" );
                assert.equal( res.body.translation, translator.toBritish( "Mangoes are my favorite fruit." )[1] );

                done();
            })
            .catch(( err ) => console.log( err ));
        });

        it("Text and invalid locale filled in", ( done ) => {
            chai
            .request( server )
            .post( "/api/translate" )
            .send({
                text: "Mangoes are my favorite fruit.",
                locale: "to-british"
            })
            .then(( res ) => {
                assert.equal( res.status, 200 );
                assert.equal( res.body.error, "Invalid value for locale field" );

                done();
            })
            .catch(( err ) => console.log( err ));
        });

        it("Missing text field", ( done ) => {
            chai
            .request( server )
            .post( "/api/translate" )
            .send({
                locale: "american-to-british"
            })
            .then(( res ) => {
                assert.equal( res.status, 200 );
                assert.equal( res.body.error, "Required field(s) missing" );

                done();
            })
            .catch(( err ) => console.log( err ));
        });

        it("Missing locale field", ( done ) => {
            chai
            .request( server )
            .post( "/api/translate" )
            .send({
                text: "Mangoes are my favorite fruit.",
            })
            .then(( res ) => {
                assert.equal( res.status, 200 );
                assert.equal( res.body.error, "Required field(s) missing" );

                done();
            })
            .catch(( err ) => console.log( err ));
        });

        
        it("Empty text filled in", ( done ) => {
            chai
            .request( server )
            .post( "/api/translate" )
            .send({
                text: "",
                locale: "american-to-british"
            })
            .then(( res ) => {
                assert.equal( res.status, 200 );
                assert.equal( res.body.error, "No text to translate" );

                done();
            })
            .catch(( err ) => console.log( err ));
        });
        
        it("Text in no need of translation", ( done ) => {
            chai
            .request( server )
            .post( "/api/translate" )
            .send({
                text: "Mangoes are my favourite fruit.",
                locale: "american-to-british"
            })
            .then(( res ) => {
                assert.equal( res.status, 200 );
                assert.equal( res.body.translation, "Everything looks good to me!" );

                done();
            })
            .catch(( err ) => console.log( err ));
        });
    });

});
