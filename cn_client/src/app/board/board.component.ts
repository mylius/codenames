import { Component, OnInit } from "@angular/core";
import io from "socket.io-client";
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {

  private socket: any;
  words: any[];
  redIsNext: boolean;
  winner: string;
  labels: string[];
  combinedGuesser = [];
  combinedHinter = [];
  clicked: boolean[];
  user_Data = {
    team: "",
    hinter: false,
  };
  hintIn: string;
  quantIn: string;
  hint = {
    word: String,
    quantity: Number,
  };
  hintForm = new FormGroup({
    word: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    quantity: new FormControl('', [Validators.required, Validators.maxLength(2)])
  });
  hintGiven: boolean;
  

  constructor() {

  }

  get word(){
    return this.hintForm.get('word')
  }

  get quantity(){
    return this.hintForm.get('quantity')
  }

  ngOnInit() {
    this.socket = io("http://localhost:3000")
  }

  newGame() {
    this.socket.emit("newGame")
  }

  ngAfterViewInit() {
    this.socket.on("game", game => {
      console.log(game);
      this.combinedGuesser=[];
      this.words = game.board.words;
      this.clicked = game.board.clicked;
      this.labels = game.board.labels;
      if (this.redIsNext != game.redIsNext){
        console.log("new round")
        this.hintGiven = false;
      }
      this.redIsNext = game.redIsNext;
      this.winner = game.winner;
      this.hintIn = game.hint.word;
      this.quantIn = game.hint.quantity;
      for (var i = 0; i < this.words.length; i++) {
        this.combinedGuesser.push([this.words[i], this.labels[i], this.clicked[i]]);
      }
      console.log(this.combinedGuesser)
    });
    this.socket.on("user_data", user_data => {
      this.user_Data.team = user_data.team;
      this.user_Data.hinter = user_data.hinter;
      console.log(this.user_Data);
    });
    this.socket.on("hinterBoard", hinterBoard =>{
      console.log("Hinterboard")
      console.log(hinterBoard)
      this.combinedHinter=[];
      for (var i = 0; i < hinterBoard.length; i++) {
        this.combinedHinter.push([this.words[i], hinterBoard[i]]);
      }
      console.log(this.combinedHinter)
    })

  }

  guesserDone(){
    this.socket.emit("guesserDone", true)
  }

  onSubmit() {
    var hint = {
      word: this.hintForm.value.word,
      quantity: this.hintForm.value.quantity,
    };
    this.socket.emit("sendHint", hint);
    this.hintGiven = true;
    console.log(this.hintGiven);
  }
  get player() {
    return this.redIsNext ? "red" : "blue";
  }

  get hinter() {
    return this.user_Data.hinter;
  }

  get team() {
    return this.user_Data.team;
  }


  makeMove(idx: number) {
    if ((this.user_Data.team == "red" && this.redIsNext) || (this.user_Data.team == "blue" && !this.redIsNext)) {
      this.socket.emit("move", idx);
    }
  }

}
