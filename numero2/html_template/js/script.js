var your_name = "";
var doc_name = "";
var doc_age = null;
var actual_year = 2023;
var actual_month = 10;
var month_of_birth = "";

// Tableau des mois
var month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];



function message(){
    your_name = prompt('user name : ');
    doc_name = "Bonjour " + your_name;
    return doc_name ;
}

function whatIsYourAge(){
    year_of_birth = parseInt(prompt("user year of birth : "));
    month_of_birth = prompt("what is your month of birth :");
    for (i=0; i < month.length; i++) {
        if (month[i] === month_of_birth){
             month_of_birth = parseInt(i + 1);
        }
    }
    var moi_age = actual_month - month_of_birth;
    var Age = actual_year - year_of_birth;
    doc_age = "Vous avez " + Age + " ans et " + moi_age + " mois";
    return doc_age;
}

var doc_name_call = message();
console.log(doc_name_call);
document.getElementById("print_name").innerText = doc_name_call;

var doc_age_call = whatIsYourAge();
console.log(doc_age_call);
document.getElementById('print_age').innerText = doc_age_call;


 



