//YOUR CODE GOES HERE

var launchpad;
var ship;
var crewNames = ["Jenn", "Jesse", "Minnie", "Jarvis"];
var crewMembers = [];
var each;
var crewMemberTrainingCallback;

launchpad = function(ship){
  console.log("Initiating preflight procedures.  Please keep hands and feet in the ship.");
  console.log("Takeoff procedures beginning for " + ship.name);
};

function welcomeCrewMember(trainedCrewMember){
  console.log("Welcome abord, " + trainedCrewMember.name);
}

function trainCrew (names) {
  each(names, crewMemberTrainingCallback)
  return crewMembers;
};

function crewMemberTrainingCallback(name){
  crewMembers.push(trainSingleCrew(name));
}


function trainSingleCrew(name) {
  return {
    name: name
  };
};

ship = {
  name: "Serenity",
  crew: crewMembers,
  loadCrew: function() {
    each(crewMembers, crew);
    each(crew, welcomeCrewMember);
  }
};

function each(collection, callback){
  for (i = 0; i < collection.length; i++) {
    callback(collection[i])
  };
}

trainCrew(crewNames);
launchpad(ship);
console.log(crewMembers);
