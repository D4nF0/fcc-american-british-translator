const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

describe('Unit Tests', () => {
    describe('To British English', () => {
        it('Translate "Mangoes are my favorite fruit."', () => {
            const result = translator.toBritish("Mangoes are my favorite fruit.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "Mangoes are my favourite fruit." );
        });

        it('Translate "I ate yogurt for breakfast."', () => {
            const result = translator.toBritish("I ate yogurt for breakfast.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "I ate yoghurt for breakfast." );
        });

        it(`Translate "We had a party at my friend's condo."`, () => {
            const result = translator.toBritish("We had a party at my friend's condo.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "We had a party at my friend's flat." );
        });

        it('Translate "Can you toss this in the trashcan for me?"', () => {
            const result = translator.toBritish("Can you toss this in the trashcan for me?");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );  
            assert.equal( result[0], "Can you toss this in the bin for me?" );
        });

        it(`Translate "The parking lot was full."`, () => {
            const result = translator.toBritish("The parking lot was full.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "The car park was full." );
        });

        it(`Translate "Like a high tech Rube Goldberg machine."`, () => {
            const result = translator.toBritish("Like a high tech Rube Goldberg machine.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "Like a high tech Heath Robinson device." );
        });

        it(`Translate "To play hooky means to skip class or work."`, () => {
            const result = translator.toBritish("To play hooky means to skip class or work.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "To bunk off means to skip class or work." );
        });

        it(`Translate "No Mr. Bond, I expect you to die."`, () => {
            const result = translator.toBritish("No Mr. Bond, I expect you to die.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "No Mr Bond, I expect you to die." );
        });

        it(`Translate "Dr. Grosh will see you now"`, () => {
            const result = translator.toBritish("Dr. Grosh will see you now.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "Dr Grosh will see you now." );
        });

        it(`Translate "Lunch is at 12:15 today."`, () => {
            const result = translator.toBritish("Lunch is at 12:15 today.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "Lunch is at 12.15 today." );
        });

    });
    
    describe('To American English', () => {
        it(`Translate "We watched the footie match for a while."`, () => {
            const result = translator.toAmerican("We watched the footie match for a while.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "We watched the soccer match for a while." );
        });

        it(`Translate "Paracetamol takes up to an hour to work."`, () => {
            const result = translator.toAmerican("Paracetamol takes up to an hour to work.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "Tylenol takes up to an hour to work." );
        });

        it(`Translate "First, caramelise the onions"`, () => {
            const result = translator.toAmerican("First, caramelise the onions");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "First, caramelize the onions" );
        });

        it(`Translate " I spent the bank holiday at the funfair."`, () => {
            const result = translator.toAmerican("I spent the bank holiday at the funfair.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "I spent the public holiday at the carnival." );
        });

        it(`Translate "I had a bicky then went to the chippy."`, () => {
            const result = translator.toAmerican("I had a bicky then went to the chippy.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "I had a cookie then went to the fish-and-chip shop." );
        });

        it(`Translate "I've just got bits and bobs in my bum bag."`, () => {
            const result = translator.toAmerican("I've just got bits and bobs in my bum bag.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "I've just got odds and ends in my fanny pack." );
        });

        it(`Translate "The car boot sale at Boxted Airfield was called off."`, () => {
            const result = translator.toAmerican("The car boot sale at Boxted Airfield was called off.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "The swap meet at Boxted Airfield was called off." );
        });
     
        it(`Translate "Have you met Mrs Kalyani?"`, () => {
            const result = translator.toAmerican("Have you met Mrs Kalyani?");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "Have you met Mrs. Kalyani?" );
        });

        it(`Translate "Prof Joyner of King's College, London."`, () => {
            const result = translator.toAmerican("Prof Joyner of King's College, London.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "Prof. Joyner of King's College, London." );
        });

        it(`Translate "Tea time is usually around 4 or 4.30."`, () => {
            const result = translator.toAmerican("Tea time is usually around 4 or 4.30.");

            assert.typeOf( result[0], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.equal( result[0], "Tea time is usually around 4 or 4:30." );
        });

    });

    describe('Highlight', () => {
        it(`Highlight translation in "Mangoes are my favorite fruit."`, () => {
            const result = translator.toBritish("Mangoes are my favorite fruit.");

            assert.typeOf( result[1], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.match( result[1], /<span class="highlight">.+<\/span>/ );
        });

        it(`Highlight translation in "I ate yogurt for breakfast."`, () => {
            const result = translator.toBritish("I ate yogurt for breakfast.");

            assert.typeOf( result[1], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.match( result[1], /<span class="highlight">.+<\/span>/ );
        });

        it(`Highlight translation in "We watched the footie match for a while."`, () => {
            const result = translator.toAmerican("We watched the footie match for a while.");

            assert.typeOf( result[1], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.match( result[1], /<span class="highlight">.+<\/span>/ );
        });

        it(`Highlight translation in "Paracetamol takes up to an hour to work."`, () => {
            const result = translator.toAmerican("Paracetamol takes up to an hour to work.");

            assert.typeOf( result[1], "String" );
            assert.typeOf( result, "Array" );
            assert.equal( result.length, 2 );
            assert.match( result[1], /<span class="highlight">.+<\/span>/ );
        });

    });
});