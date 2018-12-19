var index = [{
    name: 'venkat',
    id: 1,
    transport: 'bike',
    city: 'madurai',
    age: 15,
    experience: 3,
    dateofjoin: new Date("2015"),
    position: 'developer',
    type: 'village'
  },
  {
    name: 'krishnan',
    id: 2,
    transport: 'car',
    city: 'chennai',
    age: 35,
    experience: 4,
    dateofjoin: new Date("2014"),
    position: 'teamleader',
    type: 'metropolitan'
  },
  {
    name: 'sparrow',
    id: 3,
    transport: 'train',
    city: 'bangalore',
    age: 45,
    experience: 11,
    dateofjoin: new Date("2007"),
    position: 'projectmanager',
    type: 'metropolitan'
  },
  {
    name: 'sakthi',
    id: 4,
    transport: 'bike',
    age: 20,
    experience: 5,
    position: 'teamleader',
    dateofjoin: new Date("2013"),
    city: 'madurai',
    type: 'village'

  }
];



function filterExperience() {
  const result = index.filter(index => index.experience > 5);
  console.log(result);
}

function findTransport() {
  var search = document.getElementById('transport').value;
  var resultt = index.filter(index => index.transport == search);
  console.log(resultt);
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
    type: 'metropolitan'
  })
  console.findvehicle
}

function ageLimit() {
  var result = index.filter(index => index.age > 25 && index.age < 45);
  console.log(result);
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
  var search = document.getElementById('position').value;
  var resultt = index.filter(index => index.position == search);
  console.log(resultt);
}

function selectLocation() {
  var search = document.getElementById('location').value;
  var resultt = index.filter(index => index.city == search);
  console.log(resultt);
}

function selectUser() {
  var user = document.getElementById('name').value;
  var resultt = index.filter(index => index.name == user);
  console.log(resultt);
}

function cityType() {
  var city = document.getElementById('type').value;
  console.log(city == 'metropolitan');

}