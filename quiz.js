$(document).ready(function(){
     correct = ["2009", "name", "code", "JS"];
     questions = ["Which year Nazarbayev University was founded?","The ___ attribute specifies a name for an HTML element.", "What is a system of signals or symbols for communication?", "A ___ file is a plain text file that contains JavaScript code."]
     choice_options = [["2009","2010","2011","2012"],["title","alt","name","src"],["cipher","code","pressmark","Morse code"],["JS","CSS","HTML","JASON"]]
     
     quizBox = $("#quiz-box"); // Jquery
 
     for (var i = 0; i < questions.length; i++) {
         quizBox.append ("<div class='question'>"); 
         $('.question:last').append ("<p class='d'> Q" + (i+1) + ". " + questions[i] + "</p>");
         for (var j = 0; j < choice_options[i].length; j++) {
             var option = "<label><input type='radio' name='q" + (i+1) + "' value='" + choice_options[i][j] + "'>" + choice_options[i][j] + "</label>";
             $('.question:last').append(option);
         }
     }
 
     $("button").click(function() {
         var correctCount = 0;
         for (var i = 0; i < questions.length; i++) {
             var answer = $('input[name=q' + (i+1) + ']:checked').val();
             if (answer === correct[i]) {
                 correctCount++;
             }
         }
         $("#quiz-box").append ("<h2>Result of the quiz is: " + correctCount  + " out of " + questions.length  + "</h2>");
     }); 
 });
 