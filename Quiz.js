class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    
    //write code to change the background color here
    background("yellow");
    //write code to show a heading for showing the result of Quiz
    textSize(35)
    text("Results",350,60);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if (contestantCount != null){
      fill("blue");
      textSize(20);
      text("NOTE - Correct answer givers are highlighted in green colour",130,260)
    
    //write code to add a note here
    
    //write code to highlight contest who answered correctly
    if (contestant.answer== 2){
      fill("green");
      textSize(20);
      text(contestant.name + ":" + contestant.answer,160,290)
    }
    else{
      fill("red");
      textSize(20);
      text(contestant.name + ":" + contestant.answer,160,290)
    }
  }
  }
}

