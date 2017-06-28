var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function mostFollows() {
    var aux = 0;
    var popUser;
    for (var user in data) {
        if (data.hasOwnProperty(user)) {
            var element = data[user];
            if(aux < element.follows.length) {
                aux = element.follows.length;
                popUser = element;
            }
        }
    }
    console.log(popUser.name + " has more follows");
}

function mostFollowsOver30() {
    var popUser;
    var max = 0;
    for (var user in data) {
        if (data.hasOwnProperty(user)) {
            var element = data[user];
            if(max < followsOver30(element.name)) {
                max = followsOver30(element.name);
                popUser = element;
            }
        }
    }
    console.log(popUser.name + " has more follows over 30");
}

function followsOver30(name) {
    var total = 0;

    for (var user in data) {
        if (data.hasOwnProperty(user)) {
            var element = data[user];
            if(element.name === name) {
                for (var i = 0; i < element.follows.length; i++) {
                    if(data[element.follows[i]].age > 30) {
                        total++;
                    }    
                }
            }
        }
    }
    return total;
}

function mostFollowers() {
    var aux = 0;
    var max = 0;
    var popUser;
    
    for (var user in data) {
        if (data.hasOwnProperty(user)) {
            var element = data[user];
            aux = getNumberOfFollowers(element.name);
            if(aux > max) {
                max = aux;
                aux = 0;
                popUser = element;
            }
        }
    }
    console.log(popUser.name + " has more followers");
}

function mostFollowersOver30() {
    var aux = 0;
    var max = 0;
    var popUser;
    for (var user in data) {
        if (data.hasOwnProperty(user)) {
            var element = data[user];
            aux = getNumberOfFollowersOver30(element.name);
            if(aux > max) {
                max = aux;
                aux = 0;
                popUser = element;
            }
        }
    }
    console.log(popUser.name + " has more followers over 30");
}

function getNumberOfFollowers(name) {
    total = 0;
    var userCode = getUserCode(name);
    for (var user in data) {
        if (data.hasOwnProperty(user)) {
            for (var i = 0; i < data[user].follows.length; i++) {
                var follower = data[user].follows[i];
                if(follower === userCode) {
                    total++;
                }
            }
        }
    }
    return total;
}

function getNumberOfFollowersOver30(name) {
    total = 0;
    var userCode = getUserCode(name);
    for (var user in data) {
        if (data.hasOwnProperty(user)) {
            for (var i = 0; i < data[user].follows.length; i++) {
                var follower = data[user].follows[i];
                if(follower === userCode && data[user].age > 30 ) {
                    total++;
                }
            }
        }
    }
    return total;
}

function getUserCode(name) {

    for (var user in data) {
        if (data.hasOwnProperty(user) && name === data[user].name) {
            return user;
        }
    }
}

function showNetwork() {

    for (var user in data) {
        if (data.hasOwnProperty(user)) {
            var element = data[user];
            console.log(element.name + " follows: " + getFollowesName(element.follows) + "\nand is followed by: " + getFollowersName(element.name) + "\n\n");
        }
    }
}

function getFollowesName(list) {
    var usersName = [];
    
    for (var i = 0; i < list.length; i++) {
        usersName.push(data[list[i]].name);    
    }
    return usersName;
}

function getFollowersName(name) {
    
    var followersList = [];
    var userCode = getUserCode(name);
    for (var user in data) {
        if (data.hasOwnProperty(user)) {
            for (var i = 0; i < data[user].follows.length; i++) {
                var follower = data[user].follows[i];
                if(follower === userCode) {
                    followersList.push(data[user].name);
                }
            }
        }
    }
    return followersList;
}

function listWhoNotFollowsBack() {
    var followers = [];
    for (var row in data) {
        if (data.hasOwnProperty(row)) {
            var user = data[row];
            for (var i = 0; i < user.follows.length; i++) {
                if(!checkIfFollowBack(user.follows[i], row)) {
                    followers.push(data[user.follows[i]].name);
                }           
            }
            console.log(user.name + " is not followed back by: " + followers + "\n\n");
            followers = [];
        }
    }
}

function checkIfFollowBack(follows, userCode) {
    for (var i = 0; i < data[follows].follows.length; i++) {
        var element = data[follows].follows[i];
        if(userCode === element) {
            return true;
        }
    }
    return false;
}

function listReach() {
    var total = 0;
    var followers = [];
    var followersOfFollowers = [];
    for (var user in data) {
        if (data.hasOwnProperty(user)) {
            var row = data[user];
            followers = getFollowersName(row.name);
            total += followers.length;
            for (var i = 0; i < followers.length; i++) {
                followersOfFollowers = getFollowersName(followers[i]);
                total += followersOfFollowers.length;
            }
        }
        console.log(row.name + " reach is: " + total + "\n");
        total = 0;
    }
}


//mostFollows();
//console.log(getNumberOfFollowers("Bob"));
//listReach();
//mostFollowers();    
//mostFollowersOver30();
//mostFollowsOver30();
//showNetwork();
//listWhoNotFollowsBack();
listReach();