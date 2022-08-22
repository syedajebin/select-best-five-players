function inputfieldvalue(inputfieldid) {
    const inputfieldselect = document.getElementById(inputfieldid);
    const inputfieldstring = inputfieldselect.value;

    const inputfieldvaluenumber = Number(inputfieldstring);



    if (inputfieldstring.length === 0) {
        alert("No Field Can not be empty");
        return 0;
    }
    else if (inputfieldvaluenumber < 0) {
        alert("Number must be greater than 0");
        return 0;
    }
    else if (isNaN(inputfieldvaluenumber) == true) {
        alert("Input must be a number");
        return 0;
    }

    else {
        return inputfieldvaluenumber;

    }

}

function SetValueById(elementId, value) {
    const SelectedTag = document.getElementById(elementId);
    SelectedTag.innerText = value;

}


const allBtn = document.querySelectorAll(".btn-common");
for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener("click", function(){
        const selectedPlayerName = allBtn[i].parentNode.children[0].innerText;

        console.log(allBtn[i].parentNode.children[0].innerText)
        const selectTag = document.getElementById("ordered-list")
        const li = document.createElement("li");

        if (selectTag.children.length === 5) {


            alert("sorry!! you have already selected 5 players")
        }
        else {
            console.log('working')
            li.innerText = selectedPlayerName;
            selectTag.appendChild(li);
            allBtn[i].disabled = true;
            if (allBtn[i].disabled == true) {
                allBtn[i].style.backgroundColor = "grey";
            }

        }
    });
}













// part
document.getElementById("calculate-cost").addEventListener("click", function () {

    const selectiontag = document.getElementById("ordered-list");
    const LengthOl = selectiontag.children.length;

    console.log("calculate-cost");
    if (LengthOl === 0) {

        alert("sorry!! you have not  select any player select at least one player.");
    }
    else {
        const PerPlayerCost = inputfieldvalue("per-player");

        let playercost = PerPlayerCost * LengthOl;
        playercost = parseFloat(playercost.toFixed(2));


        SetValueById("player-cost", playercost)
    }


});

document.getElementById("calculate-total").addEventListener("click", function (e) {
    const managerexpenses = inputfieldvalue("team-manager");
    console.log("Total cal")
    const coachexpenses = inputfieldvalue("team-coach");
    const playercost = document.getElementById("player-cost");
    const playercosttotal = Number(playercost.innerText)

    let totalCost = managerexpenses + coachexpenses + playercosttotal;
    totalCost = parseFloat(totalCost.toFixed(2));
   
    SetValueById("total-cost", totalCost);
})













