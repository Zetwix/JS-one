//function stringToArray(string){
  let res = string.split(" ");
	return res;
}

//


//let min = function(list) {
  let mn = list[0];
  for (let i = 0; i < list.length; i++) {
    if (mn > list[i]) {
      mn = list[i];
    }
  }
  return mn;
};

let max = function(list) {
  let mx = list[0];
  for (let i = 0; i < list.length; i++) {
    if (mx < list[i]) {
      mx = list[i];
    }
  }
  return mx;
};

//

//function warnTheSheep(queue) {
  if (queue[queue.length - 1] === "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    const animal = queue.reverse().indexOf("wolf");
    const result =
      "Oi! Sheep number " + animal + "! You are about to be eaten by a wolf!";
    return result;
  }
}
