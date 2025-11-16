function tellStory(name, mood, activity) {
  console.log(`This is ${name}. ${name} is ${activity} during the day. Today ${name} because of the How much money so much music is ${mood}. The end.`)
}
let personName = prompt("What is the name of actor?");
let personMood = prompt("In what mood is the actor ?");
let personActivity = prompt("What is the role of the actor in the movie?");
tellStory(personName, personMood, personActivity);