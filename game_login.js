function adduser(){
    player1name=document.getElementById("player_1_name input").value;

    player2name=document.getElementById("player_2_name input").value;

    localStorage.setItem("player1_name",player1name);

    localStorage.setItem("player2_name",player2name);

    window.location.replace("game_page.html")
}