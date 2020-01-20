const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);

var word_list = ["König", "Fall", "Tor", "Flur", "Genie", "Erika", "Deutschland", "Gabel", "Löwe", "Bär", "Wurm", "Schimmel", "Lösung", "Schloss", "Drachen", "Drossel", "Rücken", "Kamm", "England", "Toast", "Rock", "Koks", "Golf", "Kleeblatt", "Burg", "Pilot", "Soldat", "Mutter", "Linie", "Lehrer", "Schule", "Quelle", "Karte", "Stempel", "Chemie", "Kiwi", "Linse", "Loch", "Zeit", "Prinzessin", "Antarktis", "Mexiko", "Inca", "Hollywood", "Iris", "Brand", "Funken", "Brötchen", "Hexe", "Umzug", "Loge", "Stift", "Nagel", "Tod", "Leben", "Haupt", "Roboter", "Hund", "Zwerg", "Morgenstern", "Lippe", "Roulette", "Bank", "Platte", "Ritter", "Apfel", "Melone", "Mond", "Kater", "Verband", "Bund", "Abgabe", "Schirm", "Luxemburg", "Horst", "Blatt", "Leiter", "Strand", "Korn", "Jäger", "Bauer", "Bock", "Futter", "Stuhl", "Essen", "Koch", "Adler", "Käfer", "Zelle", "Scheibe", "Hand", "Doktor", "Ball", "Platte", "Knie", "Wein", "Kiefer", "Moskau", "Boxer", "Bau", "Nacht", "Netz", "Geschirr", "Löffel", "Zentaur", "Dinosaurier", "Loch Nesss", "Bach", "Turm", "Pass", "Mangel", "Fest", "Chor", "Watt", "Aufzug", "Mast", "Fackel", "Polizei", "Maler", "Staat", "Tanz", "Bogen", "Kreuz", "Punkt", "Kreis", "Rute", "Raute", "Demo", "Australien", "Blau", "Dietrich", "Lager", "Schotten", "Blinker", "Drucker", "Finger", "Bahn", "Moos", "Blüte", "Afrika", "Riegel", "Osten", "Krebs", "Schelle", "Siegel", "Leuchte", "Schein", "Elfenbein", "Superheld", "Jet", "Decke", "Läufer", "Bombe", "Pistole", "Botschaft", "Börse", "Alien", "Becken", "Shakespear", "Theater", "Quartett", "Auto", "Bergsteiger", "Hubschrauber", "Saturn", "Teleskop", "Olymp", "Boot", "Dame", "Römer", "Schnabeltier", "Konzert", "Feder", "Pirat", "Strasse", "Botschaft", "Ton", "Satellit", "Elf", "Schild", "Messe", "Skelett", "Mal", "Laster", "Wolkenkratzer", "Verein", "Kiel", "Feuer", "Mikroskop", "Erde", "Anwalt", "Taucher", "Gang", "Gift", "Pfeife", "Brücke", "Kapelle", "Zitrone", "Matte", "Hase", "Wirtschaft", "Gras", "Satz", "Strudel", "Fisch", "Wal", "Strauss", "Wind", "Kerze", "Riese", "Mark", "Luft", "Hahn", "Gürtel", "Schneemann", "Europa", "Bar", "Gesicht", "Geschoss", "Blüte", "Millionär", "Oper", "Tau", "Star", "Tisch", "Ladung", "Optik", "Oktopus", "Batterie", "Stock", "Bremse", "Kirche", "Grund", "Auge", "Ente", "Feige", "Fallschirm", "Stamm", "Katze", "Forscher", "Hering", "Jura", "Hotel", "Gehalt", "Zwerg", "Wald", "Peitsche", "Berliner", "Hamburger", "Inka", "Pinguin", "Krankheit", "Tafel", "Spion", "Bart", "Spinne", "Dieb", "Torte", "Hupe", "Schokolade", "Peking", "Krankenhaus", "Bande", "Geist", "Kippe", "Einhorn", "Läufer", "Glück", "Öl", "Rolle", "Papier", "Geschirr", "Ketchup", "Lakritze", "Fuchs", "Mine", "Engel", "Känguru", "Pflaster", "Wasser", "Niete", "Karotte", "Auflauf", "Dichtung", "Sekretär", "Kasino", "Winnetou", "Frankreich", "Honig", "Limousine", "Stadion", "Arm", "Laser", "Krieg", "Bär", "Da Vinci", "Pension"];
var board;
var users = {};
var board = {};
var game = {};
var guesses = 0;
var hinterBoard = [];
class team {
  constructor(color) {
    this.color = color;
    this.players = [];
    this.hinter;
    this.size = 0;
  }
  chooseHinter = function () {
    if (this.hinter != null) {
      this.players.push(this.hinter);
    }
    this.hinter = this.players[Math.floor(Math.random() * this.players.length)];

    updateHinter();
  }
  addPlayer = function (player) {
    if (this.size == 0) {
      this.hinter = player;
    }
    else {
      this.players.push(player);
    }
    this.size++;
  }
}

team = {
  red: new team("red"),
  blue: new team("blue")
}
newGame();

function randomChoiceNoReplace(InArray, len) {

  var bucket = [];
  var OutArray = new Array(len).fill(null);
  var randomIndex = 0;

  for (let i in OutArray) {
    bucket.push(InArray[i]);
  }
  for (let entry in OutArray) {
    randomIndex = Math.floor(Math.random() * bucket.length);
    OutArray[entry] = bucket.splice(randomIndex, 1)[0];
  }
  return OutArray
}

function newGame() {
  labels = Array(25).fill(null);
  clicked = Array(25).fill(false);
  game.redIsNext = Math.random() < 0.5;
  game.winner = null;
  game.hint = {
    word: "",
    quantity: "",
  }
  if (game.redIsNext) {
    labelList = ["red", "red", "red", "red", "red", "red", "red", "red", "red", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "kill", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral"]
  }
  else {
    labelList = ["red", "red", "red", "red", "red", "red", "red", "red", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "kill", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral"]
  }
  board = {
    words: randomChoiceNoReplace(word_list, 25),
    labels: Array(25).fill("unkown"),
    clicked: clicked
  };
  hinterBoard =randomChoiceNoReplace(labelList, 25);
  game.board = board;
  team.red.chooseHinter();
  team.blue.chooseHinter();
}

function updateHinter() {
  for (user in users) {
    user = users[user];
    user.emit("game", game);
    if (user.data != null) {
      if (user == team[user.data.team].hinter) {
        user.data.hinter = true;
      }
      else {
        user.data.hinter = false;
      }
    }
    user.emit("user_data", user.data);
  }
}


function findKill(word) {
  return word == "kill";
}



function getAllIndexes(arr, val) {
  var indexes = [], i;
  for (i = 0; i < arr.length; i++)
    if (arr[i] === val)
      indexes.push(i);
  return indexes;
}

function checkIsClicked(indexArray) {
  var notFound = false;
  for (let value1 of indexArray) {
    if (!clicked[value1]) {
      notFound = true;
    }
  }
  return !notFound
}


function declareWinner(idx) {
  var redTiles = [];
  var blueTiles = [];
  if (hinterBoard.findIndex(findKill) == idx) {
    if (game.redIsNext) {
      game.winner = "blue"
    }
    else {
      game.winner = "red"
    }
  }

  redTiles = getAllIndexes(hinterBoard, "red");
  blueTiles = getAllIndexes(hinterBoard, "blue");
  if (checkIsClicked(redTiles)) {
    game.winner = "red"
  }
  if (checkIsClicked(blueTiles)) {
    game.winner = "blue"
  }
  return
}


function updateUser(user) {
  user.data = new Object()
  if (team.blue.size < team.red.size) {
    team.blue.addPlayer(user);
    user.data.team = "blue";
  }
  else if (team.blue.size > team.red.size) {
    team.red.addPlayer(user);
    user.data.team = "red";
  }
  else {
    if (Math.random() < 0.5) {
      user.data.team = "red";
      team.red.addPlayer(user);
    }
    else {
      user.data.team = "blue";
      team.blue.addPlayer(user);
    }
  }
  if (user == team[user.data.team].hinter) {
    user.data.hinter = true;
  }
  else {
    user.data.hinter = false;
  }
  return user;
}

Socketio.on("connection", socket => {
  users[socket.id] = socket;
  var user = users[socket.id];
  user = updateUser(user);
  user.emit("user_data", user.data);
  user.emit("game", game);
  if (user.data.hinter){
    user.emit("hinterBoard", hinterBoard)
  }
  user.on("move", idx => {
    if (!clicked[idx]) {
      game.board.clicked.splice(idx, 1, true);
      declareWinner(idx);
      game.board.labels=[];
      for (label in hinterBoard){
        if (clicked[label]==true){
          game.board.labels.push(hinterBoard[label])
        }
        else{
          game.board.labels.push("unkown")
        }
      }
      guesses ++;
      if (hinterBoard[idx] != user.data.team){
        game.redIsNext = !game.redIsNext;
        guesses =   0;
      }
      if (!game.winner && guesses == game.hint.quantity+1) {
        game.redIsNext = !game.redIsNext;
        guesses = 0;
      }
    }
    console.log(game.board.labels)
    Socketio.emit("game", game);
    for (hintgiver in users)
    if (users[hintgiver].data.hinter){
      users[hintgiver].emit("hinterBoard", hinterBoard)
    }
  })
  user.on("newGame", inGame => {
    newGame();
    user.emit("game", game);
  })
  user.on("sendHint", inHint => {
    console.log(inHint);
    game.hint = {
      word: inHint.word, 
      quantity: inHint.quantity,
    };
    for (user in users){
      users[user].emit("game", game);
    }
  })
  user.on("guesserDone", done => {
    console.log(done);
    game.redIsNext = !game.redIsNext;
    guesses = 0;
    for (user in users){
      users[user].emit("game", game);
    }
  })
  user.on("disconnect", nothing => {
    console.log("disconnected");
    userTeam = [users[socket.id].data.team];
    team[userTeam].players = team[userTeam].players.filter(function (value, index, arr) {
      return value !== user;
    });
    if (users[socket.id].data.hinter) {
      team[userTeam].hinter = null;
      team[userTeam].chooseHinter();
      for (user in team[userTeam.players]) {
        users[user].emit("user_data", users[user].data);
      }
    }
    delete user;
  })
  
});



Http.listen(3000, () => {
  console.log("Listening at: 3000 ...");
});
