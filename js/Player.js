class Player
{
    constructor()
    {
    }
    getCount() //read playerCount value from the database
    {
        var playerCountRef = db.ref('playerCount'); 
        playerCountRef.on("value", function(data){playerCount = data.val()})
    }
    updateCount(count) //update playerCount value in the database
    {
        db.ref('/').update({playerCount: count});
    }

};