// Painting Pets Blue (with regex)
/*
For this kata, you need to build two regex strings to paint dogs and cats blue.
Each of the given inputs will be a word of mixed case characters followed by either cat or dog.
The string will be matched and replaced by the respective expressions.

search will be used to capture the given strings. For example:

grey dog 
Fast cat
qWeRtY cat
blue dog
The other will be used to replace the first word with blue, but retaining the original animal:

grey dog   => blue dog
Fast cat   => blue cat
qWeRtY cat => blue cat
blue dog   => blue dog
*/
const search = "^[a-zA-Z]+" 

const substitute = "blue"
