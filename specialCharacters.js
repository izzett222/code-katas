// [Code Golf] Regex Series: Match All Special Charactes (ASCII)
/*
Task
Write a regex pattern that matches all special characters in ASCII. Seems easy? Well, you have to do it in 25 characters or less. There are 33 special characters in total, so goodluck trying to hardcode it ;)

Notes
For the purpose of this kata, special characters are printable non-alphanumeric characters. This exclude spaces and other whitespace charactes.

The special characters you have to match are those within the standard ASCII (charcode 0-127).

Precisely, these ones:

!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~
Input
The strings will consist of a single character in the charcode range of 0-255. In other words, you might get a symbol that is outside the standard ASCII, and you should not match them.
*/

re=/(?=[\W_])[\x21-\x7E]/
