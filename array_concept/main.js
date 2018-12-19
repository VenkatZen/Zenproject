var index = [
  empone = {
    name: 'venkat',
    id: 1,
    transport: 'bike',
    city: 'madurai',
    age: 15,
    experience: 3,
    dateofjoin: new Date("2015"),
    position: 'developer',
    type:'village'
  },
  emptwo = {
    name: 'krishnan',
    id: 2,
    transport: 'car',
    city: 'chennai',
    age: 35,
    experience: 4,
    dateofjoin: new Date("2014"),
    position: 'teamleader',
    type:'metropolitan'
  },
  empthree = {
    name: 'sparrow',
    id: 3,
    transport: 'train',
    city: 'bangalore',
    age: 45,
    experience: 11,
    dateofjoin: new Date("2007"),
    position: 'projectmanager',
    type:'metropolitan'
  },
  empfour = {
    name: 'sakthi',
    id: 4,
    transport: 'bike',
    age: 20,
    experience: 5,
    position: 'teamleader',
    dateofjoin: new Date("2013"),
    city: 'madurai',
    type:'village'

  }
];

function filterExperience() {
  for (var i = 0; i < index.length; i++) {
    if (index[i].experience <= 5) {
      console.log(index[i]);
    }
  }
}

function findTransport() {
  var trans = document.getElementById('vechile').value;
  for (var i = 0; i < index.length; i++) {
    if (index[i].transport == trans) {
      console.log(index[i]);
    }
  }
}

function addingNewUser() {
  index.unshift(empfive = {
    name: 'bala',
    id: 48,
    transport: null,
    age: 19,
    experience: 2,
    dateofjoin: new Date("2016"),
    position: 'developer',
    city: 'chennai',
    type:'metropolitan'
  })
  console.log(index);
}

function ageLimit() {
  for (var i = 0; i < index.length; i++) {
    if ((index[i].age >= 25) && (index[i].age <= 45)) {
      console.log(index[i]);
    }
  }
}

function sortingByJoining() {
  var dat = new Array(4);
  for (var i = 0; i < index.length; i++) {
    dat[i] = index[i].dateofjoin.getFullYear();
  }
  dat.sort();
  for (var i = 0; i < dat.length; i++) {
    for (var j = 0; j < index.length; j++) {
      if (index[j].dateofjoin.getFullYear() == dat[i]) {
        console.log(index[j]);
      }
    }

  }
}

function selectPosition() {
  var pos = document.getElementById('position').value;
  for (var i = 0; i < index.length; i++) {
    if (index[i].position == pos) {
      console.log(index[i]);

    }
  }
}
function selectLocation() {
  var loc = document.getElementById('location').value;
  for (var i = 0; i < index.length; i++) {
    if (index[i].city == loc) {
      console.log(index[i]);
    }
  }
}

function selectUser()
{
  var user = document.getElementById('name').value;
  for (var i = 0; i < index.length; i++) {
    if (index[i].name == user) {
      console.log(index[i]);
    }
  }
}

function cityType()
{
  var city=document.getElementById('type').value;
  console.log(city=='metropolitan');

  }
