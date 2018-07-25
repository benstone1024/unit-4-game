        //psuedo coding 
        // make a game with four crystals
        // each crystal should have a random number attached to it when clicked
        // you will add the values of each crystal to total the amount given at the start of the game.
        // if player matches number of the total given they win
        // if player goes over the amount of the total then they lose.
        
        //var global
        var randomResult=0;
        var win=0;
        var lost=0;
        var prior=0
        var gameReset;
        
         
       // var gameReset= function(){

           // $(".crystals").empty();
       
       
       
        randomResult=Math.floor(Math.random()*101)+19;
        //console.log(randomResult);

      // $("#result").html("Random Result: " + randomResult);
       
        for(var i=0;i<4;i++){ 
            
            var random=Math.floor(Math.random()*11)+1;
            //console.log(random);



                // var crystal =$ ("<div>");
                 crystal.attr({"class":"crystal","data-random":random});

                 $(".crystals").append(crystal);
           } 
            $("#prior").html("score:",prior);
        
        



        //gameReset();
        
        
        
        $(document).on("click",".crystal",function(){
            
            var num = parseInt($(this).attr("data-random"));

            prior += num;

            $("previous").html("score", + prior);

            if(prior > randomResult) {

                lost++;

                $("#lost").html("You Lose" + lost);

                prior = 0;

               // gameReset();
            }

           else if(prior === randomResult){
                win++;

                $("#win").html("You Win" + win);

                prior =0;

               // gameReset();

            }

        });