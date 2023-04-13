// Chuck Norris I - Push Ups
/*
Chuck Norris loves push ups. That's just a fact. It has been said that when Chuck Norris does a push up, he isn't pushing himself up, he's pushing the world down!

Today, Chuck got home from work 10 minutes earlier than his wife. Naturally he decided to bang out some push ups. By the time she arrives home he can have smashed out at least 1000 and barely broken a sweat. He counts them in binary, because he thinks coding is cool, and because he is a massive Badass.

When his wife arrives home, she starts talking to Chuck, spoiling his count! Your job is to write a function to isolate Chuck's count, and then work out how many push ups he has done! Return your answer as a number.

Careful Chuck doesn't lose count! Even if he does, always return the highest number he counted to! If Chuck's wife has left a list of jobs for him he won't be able to do any push ups... if there is no sign of a count, simply return "CHUCK SMASH!!"

In the event someone dares to provide Chuck with something other than a string, return 'FAIL!!'

in [C++] when numbers not exists in input string then return -1 all time.

Your code should still pass in the case that the binary is mixed up with other characters - maybe Chuck has a cough... e.g.: "1ee1gf00t10h1011tr00" -> "110010101100" -> 3244.

Feel the burn!!
*/


function chuckPushUps(string) {
  const res = []
  let reg = /\b\d+\b/g
  let test;
  if ((typeof string !== "string") || !string.length) {
    return "FAIL!!"
  }
  if (string.includes(" ")) {
    while ((test = reg.exec(string)) !== null) {
      res.push(test[0])
    }
    if (!res.length) {
      return "CHUCK SMASH!!"
    }
    return res.map(el => parseInt(el, 2)).sort((a,b) => b - a)[0]
  }
  else {
    reg = /[0-1]/g
    while ((test = reg.exec(string)) !== null) {
      res.push(test[0])
    }
    if (!res.length) {
      return "CHUCK SMASH!!"
    }
    return parseInt(res.join(""), 2)
  }

}
