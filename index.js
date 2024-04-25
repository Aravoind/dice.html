
 var numbername1 = Math.floor(Math.random() * 6)+1;


 var name2="dice" +numbername1 + ".png";


 var name3="images/"+name2



 var image1 = document.querySelectorAll("img")[0];


 image1.setAttribute("src",name3);

 
 var numbername2 = Math.floor(Math.random() * 6)+1;


 var name4="dice" +numbername2 + ".png";


 var name5="images/"+name4



 var image2 = document.querySelectorAll("img")[1];


 image2.setAttribute("src",name5);
  
if(numbername1 < numbername2) {
  document.querySelectorAll("h1").innerhtml="player 2 won";
 }
