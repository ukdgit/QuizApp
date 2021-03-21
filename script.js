window.onload = function () {
    show(0);
}

let questions = [
    {
        id: 1,
        question: "java.util.Collections is a:",
        answer: "Class",
        options: [
            "Class",
            "Interface",
            "Object",
            "None of the above"
        ]
    },
    {
        id: 2,
        question: "Which of those doesn’t have an index based structure?",
        answer: "Set",
        options: [
            "List",
            "Set",
            "Map",
            "None of the above"
        ]
    },
    {
        id: 3,
        question: "Methods such as reverse, shuffle are offered in:",
        answer: "Collections",
        options: [
            "Object",
            "Collection",
            "Collections",
            "Apache Commons Collections"
        ]

    },
    {
        id: 4,
        question: "Which of those allows duplicate elements?",
        answer: "List",
        options: [
            "Set",
            "List",
            "All",
            "None of the above"
        ]

    },

    {
        id: 5,
        question: "Which allows the storage of a null key and null values ?",
        answer: "HashMap",
        options: [
            "Hashtable",
            "HashMap",
            "Both",
            "None of the above"
        ]
    }
];


function submitForm(e) {
    e.preventDefault();
    console.log("form submitted");
    let name = document.forms["welcome_form"]["name"].value;

    sessionStorage.setItem("name", name);

    location.href = "quiz.html";

}

let question_count = 0;
let point = 0;

function next() {
    
    let user_answer = document.querySelector("li.option.active").innerHTML;
    
    if (user_answer == questions[question_count].answer) {
        point += 10;
        sessionStorage.setItem("points", point);
       
    }

    if (question_count == questions.length - 1) {
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(total_time);
        location.href = "end.html";
        return;

    }
    question_count++;
    show(question_count);

}

function show(count) {
    let question = document.getElementById('questions');
    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML =
        `<h2>Q${question_count+1}. ${questions[count].question}</h2>
                <ul class="option_group">
                    <li class="option">${questions[count].options[0]}</li>
                    <li class="option">${questions[count].options[1]}</li>
                    <li class="option">${questions[count].options[2]}</li>
                    <li class="option">${questions[count].options[3]}</li>
                </ul>
    `;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        
        option[i].onclick = function () {
            document.getElementsByClassName("btn-next").disabled =false;
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}


