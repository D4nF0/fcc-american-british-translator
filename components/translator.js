const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const reverse = ( toReverse ) => {
    return Object.assign( 
        {},
        ...Object.entries( toReverse ).map( ([ k, v ]) => ({ [v]: k }) )
    )
}

class Translator {
    toBritish( text ){
        const dict = { ...americanOnly, ...americanToBritishSpelling };
        const titles = americanToBritishTitles;
        const timeRegex = /([1-9]|1[012]):[0-5][0-9]/g;
        const translatedText = this.translate( text, dict, titles, timeRegex, "toBritish" );
        
        if( !translatedText ){
            return text;
        }

        return translatedText;
    }

    toAmerican( text ){
        const dict = { ...britishOnly, ...reverse( americanToBritishSpelling ) };
        const titles = reverse( americanToBritishTitles );
        const timeRegex = /([1-9]|1[012]).[0-5][0-9]/g;
        const translatedText = this.translate( text, dict, titles, timeRegex, "toAmerican" );
        
        if( !translatedText ){
            return text;
        }

        return translatedText;
    }

    translate( text, dict, titles, timeRegex, locale ){
        const lowerCase = text.toLowerCase();
        const matches = {};

        Object.entries(titles).map( ([ k, v ]) => {
            if( lowerCase.includes( k ) ){
                matches[k] = v.charAt(0).toUpperCase() + v.slice(1);
            }
        });

        const wordsSpaces = Object.fromEntries(
            Object.entries(dict).filter( ([ k, v ]) => k.includes( " " ))
        );

        Object.entries(wordsSpaces).map( ([ k, v ]) => {
            if( lowerCase.includes( k ) ){
                matches[k] = v;
            }
        });

        lowerCase.match( /(\w+([-'])(\w+)?['-]?(\w+))|\w+/g ).forEach( e => {
            if( dict[e] ) matches[e] = dict[e];
        });

        const timeMatches = lowerCase.match( timeRegex );

        if( timeMatches ){
            timeMatches.map( (e) => {
                if( locale == "toBritish" ){
                    return ( matches[e] = e.replace(":", ".") );
                }
                return ( matches[e] = e.replace(".", ":") );
            });
        }

        if( Object.keys( matches ).length === 0 ) return null;

        const translatedText = this.replaceAll( text, matches );
        const highlightedTranslation = this.replaceAllWithHighlight( text, matches );

        return [ translatedText, highlightedTranslation ];
    }

    replaceAll( text, matches ){
        const regex = new RegExp( Object.keys( matches ).join("|"), "gi" );
        return text.replace( regex, ( match ) => matches[ match.toLowerCase() ] );
    }

    replaceAllWithHighlight( text, matches ){
        const regex = new RegExp( Object.keys( matches ).join("|"), "gi" );
        return text.replace( regex, ( match ) => {
            return `<span class="highlight">${
                matches[ match.toLowerCase() ]
            }</span>`
        });
    }
}

module.exports = Translator;