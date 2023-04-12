// Regex Match Generator: Alternation
/*
Intro
In regular expression, there is a meta-character called alternation, written as |. This meta-character behaves like an OR operator that matches either of the sides.

For example: abc|123 will match either "abc" or "123". They can also match empty string.

Task
Write a function called regexMatches(regex). Given a regex pattern, return a list of all possible matches.
*/
function regexMatches(regex) {
  const str = regex.source
  return str.split("|")
}
