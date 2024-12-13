// const subject=document.getElementById("subjectinput");
// const enterquestion=document.getElementById("enterquestion");
// const questionlist=document.getElementById("questionlist");
// const submit=document.getElementsByTagName("Submit");
// function addQuestion() {
//     if (enterquestion.value === "" || subjectinput.value === "") {
//         alert("You must write something in the question field.");
//     } else {
//         let li1 = document.createElement("li");
//         li1.innerHTML = `${subjectinput.value}`;

//         let li2 = document.createElement("li");
//         li2.innerHTML = `${enterquestion.value}`;

//         li1.classList.add("li");
//         li2.classList.add("li");

//         questionlist.appendChild(li1);
//         questionlist.appendChild(li2);

//         let actionsContainer = document.createElement("div");
//         actionsContainer.style.display = 'flex';
//         actionsContainer.style.alignItems = 'center';
//         let thumbs = document.createElement("span");
//         //adding thumb in container
//         thumbs.classList.add("thumbs");
//         thumbs.innerHTML = `<span class="thumb-up">&#x1F44D;</span> 
//                    <span class="thumb-down">&#x1F44E;</span>` 

//         actionsContainer.appendChild(thumbs);
//         let star = document.createElement("span");
//         star.classList.add("star");
//         star.innerHTML = `&#9733;`; // Unicode for star
//         actionsContainer.appendChild(star);
//       let li3=document.createElement('li');
//         li3.appendChild(actionsContainer);
//         li3.classList.add("li3");

//         questionlist.appendChild(li3);

//     }

//     subjectinput.value = "";
//     enterquestion.value = "";
// }

const subjectInput = document.getElementById("subjectinput");  // Make sure the id is correct
const enterquestion = document.getElementById("enterquestion");
const questionlist = document.getElementById("questionlist");
const submit = document.getElementById("submit");  // Use getElementById for a single element

function addQuestion() {
    if (enterquestion.value === "" || subjectInput.value === "") {
        alert("You must write something in the question field.");
    } else {
        // Create a container for the question and actions
        let questionContainer = document.createElement("div");
        questionContainer.classList.add("question-container");
         questionContainer.style.display = 'flex'; 
         questionContainer.style.justifyContent='space-between';
        // questionList.style.flexDirection = 'column';

        // Left side (subject and question)
        let questionContent = document.createElement("div");
        questionContent.classList.add("question-content");

        let li1 = document.createElement("li");
        li1.innerHTML = `${subjectInput.value}`;
        li1.classList.add("li");
        
        let li2 = document.createElement("li");
        li2.innerHTML = `${enterquestion.value}`;
        li2.classList.add("li");

        questionContent.appendChild(li1);
        questionContent.appendChild(li2);

        // Right side (thumbs up, thumbs down, star, time)
        let actionsContainer = document.createElement("div");
        actionsContainer.classList.add("actions-container");
        actionsContainer.style.display='flex';
        actionsContainer.style.justifyContent='space-evenly';
        
     

        let thumbsup = document.createElement("span");
        thumbsup.classList.add("thumbsup");
        thumbsup.style.fontSize = '24px';
        thumbsup.style.marginRight = '15px';
        thumbsup.style.cursor = 'pointer';
        thumbsup.innerHTML = `<span class="thumb-up">&#x1F44D;</span>`;

        actionsContainer.appendChild(thumbsup);


        
        let thumbsdown = document.createElement("span");
        thumbsdown.classList.add("thumbsdown");
        thumbsdown.style.fontSize = '24px';
        thumbsdown.style.marginRight = '15px';
        thumbsdown.style.cursor = 'pointer';
        thumbsdown.innerHTML = `<span class="thumb-down">&#x1F44E;</span>`;

        actionsContainer.appendChild(thumbsdown);

        let star = document.createElement("span");
        star.classList.add("star");
        star.style.fontSize = '24px';
        star.style.cursor = 'pointer';

        star.innerHTML = `&#9733;`; // Unicode for star
        const votesContainer = document.createElement('div');
        votesContainer.textContent = 'Votes:0';
        votesContainer.style.marginRight = '15px';
        votesContainer.style.fontSize='24px';
        actionsContainer.appendChild(votesContainer);
        actionsContainer.appendChild(star);
        function updateTotalVotes() {
            const totalVotes = parseInt(thumbUpCount.textContent) + parseInt(thumbDownCount.textContent);
            votesContainer.textContent = `Votes: ${totalVotes}`;
        }

        const thumbUpCount = document.createElement('span');
        thumbUpCount.textContent = '0';
        thumbsup.addEventListener('click', () => {
            let currentCount = parseInt(thumbUpCount.textContent);
            thumbUpCount.textContent = currentCount + 1; 
            updateTotalVotes(); 
        });
        const thumbDownCount = document.createElement('span');
        thumbDownCount.textContent = '0';
        thumbsdown.addEventListener('click', () => {
            thumbDownCount.textContent = parseInt(thumbDownCount.textContent) - 1;
            updateTotalVotes(); 
        });
        star.addEventListener('click', () => {
            if (star.style.color === "gray") {
                star.style.color = "blue"; 
            } else {
                star.style.color = "gray"; 
            }
        });
      
            // Append actions to the right of the question content
        questionContainer.appendChild(questionContent);
        questionContainer.appendChild(actionsContainer);
        questionContainer.style.border='1px solid black';

        // Append the entire question and actions container to the list
        questionlist.style.border='3px solid black';
        questionlist.appendChild(questionContainer);
    }

    // Clear inputs after adding question
    subjectInput.value = "";
    enterquestion.value = "";
}

questionlist.addEventListener("click", function (event) {
    const questionContainer = event.target.closest(".question-container");
    if (questionContainer) {
        rightpane.innerHTML = ''; 
        const questionText = questionContainer.querySelector(".question-content").innerText;

       
        const questionDetail = document.createElement("p");
        questionDetail.innerHTML = `Question: ${questionText}`;
        rightpane.appendChild(questionDetail);


        //yha form bna rhe h
        const responseForm = document.createElement("form");
  
        responseForm.innerHTML = `
            <p>  Leave a Response:</p>
            
            <input id="responseName" placeholder="Your Name" required>
            <br> <br> <br>
            <textarea id="responseComment" placeholder="Your Response" required></textarea>
            <br> <br> <br>
            <button type="submit">Submit Response</button>
        `;

        rightpane.appendChild(responseForm);
        const resolveButton = document.createElement("button");
        resolveButton.innerHTML = "Resolve";
        rightpane.appendChild(resolveButton);

        resolveButton.addEventListener("click", function () {
            questionContainer.remove();
           
        });

        responseForm.addEventListener("submit", function(event) {
                    event.preventDefault();
            const name = document.getElementById("responseName").value;
            const comment = document.getElementById("responseComment").value;

           
            const responseDisplay = document.createElement("div");
            responseDisplay.innerHTML = `${name}: ${comment}`;
            rightpane.appendChild(responseDisplay);

            
            document.getElementById("responseName").value = '';
             document.getElementById("responseComment").value = '';
        });
      
  }}  );
 

