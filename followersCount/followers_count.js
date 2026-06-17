let count = 0; //Initialize count to 0

function increaseCount(){
    count++; // Increment the count by 1
    displayCount(); // Display ther count
    checkCountValue(); // check count value and greet
   
    
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count; // Display the count in the HTML
}

function checkCountValue(){
    if (count === 10){
        alert("Your Instagram post gained 10 follower, Congratulations!");
    }
        else if (count===20){
            alert("Your Instagram post gained 20 follower, Congratulations!");

        }

    }

    function resetCount(){
        count = 0;
        displayCount();
        alert("followers has been reset");
        
    }
  