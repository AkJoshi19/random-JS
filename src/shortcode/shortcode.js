var short = require('short-uuid');
 
// Quick start with flickrBase58 format
var shortCode = short.generate(); // 73WakrfVbNJBaAmhQtEeDv


console.log(shortCode);


var decimalTranslator = short("0123456789"); // Provide a specific alphabet for translation
var cookieTranslator = short(short.constants.cookieBase90); // Use a constant for translation
 

// Generate a shortened v4 UUID
//translator.new(); // mhvXdrZT4jP5T8vBxuvm75
//translator.generate(); // An alias for new.
 
// Translate UUIDs to and from the shortened format
//translator.toUUID(shortId);// a44521d0-0fb8-4ade-8002-3385545c3318
//translator.fromUUID(regularUUID); // mhvXdrZT4jP5T8vBxuvm75
 
// Generate plain UUIDs
// - From the library without creating a translator
//short.uuid(); // fd5c084c-ff7c-4651-9a52-37096242d81c
// - Each translator provides the uuid.v4() function, too
//translator.uuid(); // 3023b0f5-ec55-4e75-9cd8-104700698052
 