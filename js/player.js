class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
        
        this.rank = null ;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCountRef = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    getPlayerAtEnd(){
        database.ref('playerAtEnd').on("value",(data)=>{
            this.rank = data.val();
        })
    }

    
    // debug the below code 
      static updatePlayerAtEnd(rank){
        database.ref("/").update({
            playerAtEnd : rank
        })
    }



    
}
