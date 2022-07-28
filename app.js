let user = ""
let win = 0
$("#btn-new").click(function () {
    if($("input").val().trim()){
        user = $("input").val().trim()
        $(".welcome").hide()
        $(".game-screen").show().css("display","flex")
        $("#player").text("Player: "+$("input").val())
    }else{
        $("#error").text("Please enter your name").css("color","red")
        setTimeout(()=>$("#error").text(""),2000)
    }
});

$("#player-rock").click(function () {
    gameplay("rock")
});
$("#player-paper").click(function () {
    gameplay("paper")
});
$("#player-scissors").click(function () {
    gameplay("scissors")
});

const gameplay = (player)=>{
    const comp = computerChoice()
    if (player===comp){
        $("#game-message").text("DRAW").css("color","black")
    }else if(player === "rock"){
        if (comp ==="scissors"){
            $("#game-message").text("YOU WIN").css("color","green")
            win ++
        }else if (comp ==="paper"){
            $("#game-message").text("YOU LOSE").css("color","red")
        }
    }else if(player === "paper"){
        if (comp ==="rock"){
            $("#game-message").text("YOU WIN").css("color","green")
            win ++
        }else if (comp ==="scissors"){
            $("#game-message").text("YOU LOSE").css("color","red")
        }
    }
    else if(player === "scissors"){
        if (comp ==="paper"){
            $("#game-message").text("YOU WIN").css("color","green")
            win ++
        }else if (comp ==="rock"){
            $("#game-message").text("YOU LOSE").css("color","red")
        }
    }
    $("#win").text("Total wins: " + win)
}

const computerChoice = ()=>{
    let rand = Math.floor(Math.random()*3+1)
    if (rand===1){
        $(".computer-select").attr("src","/image/rock.png")
        return "rock"
    }else if(rand===2){
        $(".computer-select").attr("src","/image/paper.png")
        return "paper"
    }else {
        $(".computer-select").attr("src","/image/scissors.png")
        return "scissors"
    }
}