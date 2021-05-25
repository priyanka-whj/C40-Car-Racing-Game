class Form 
{
    constructor() 
    {
    }
    display() 
    {
        var title = createElement('h2'); //create an heading element
        title.html("Car Racing Game"); //Change the HTML content
        title.position(500, 100); //Position the title on the canvas

        var input = createInput("Name"); //creates an input box to get the input from the player
        input.position(430, 200); //Position the input

        var button = createButton('Play');
        button.position(650, 200);
        button.mousePressed(function() 
        {
            input.hide();                       //hide the input box
            button.hide();                      //hide the button box
            var name = input.value();              //read the name of the player
                     
            var greeting = createElement('h3');
            greeting.html("Hello" + " " +name); //string concatenation
            greeting.position(500, 200);
        });
    }
};