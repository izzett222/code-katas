// Regex Series: Match All Except X
/*
Regex is a powerful tool. You can easily match any word with /\w+/. But what if you want to exclude certain words?

Task
Write a regex pattern that will match any word except code and war, but still match words that are formed with them (e.g., codewars, barcode, beware, warfare, warm). This also means you can match codecode or warwar. Matches and non-matches should be case-insensitive.

For the purpose of this kata, a word is a combination of one or more word characters ([A-Za-z0-9_]). Which means, if a word contains non-word characters (e.g., t#!ree), your pattern should match them separately (e.g., ["t", "ree"]).

Your pattern will be tested as:
*/
const regex = /\b(?!(code\b|war\b))\w+?\b/g
