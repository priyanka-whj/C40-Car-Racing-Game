class Game
{
    constructor()
    {
    }
    getState() //read the gameState from the database
    {
        var gameStateRef = db.ref('gameState'); //referring to the child node gameState
        gameStateRef.on("value", function(data){gameState = data.val()})
    }
    updateState(state) // update the gameState in the database
    {
        db.ref('/').update({gameState: state}); //'/' refers to main database inside which gameState is created
    }
    start()
    {
        if(gameState === 0)
        {
            form = new Form();
            form.display();
        }
    }
};