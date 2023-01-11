
//for delete button in table 
    let tbody = document.getElementsByTagName("tbody")[0];
    let tablerows = tbody.children;
    let arrayoftr= Array.from(tablerows);
    let delbtns = document.getElementsByClassName("delete");
    let arrayofdel = Array.from(delbtns);
    arrayofdel.forEach(del => {
        del.addEventListener("click", function () {
            arrayoftr.length--;
            del.parentElement.parentElement.remove();
            // removing $ sign from its price and doing calculations
            update(parseInt(del.parentElement.parentElement.children[3].innerHTML.slice(1)));
            localStorage.clear();
            alert(arrayoftr.length);
        });
    });




// to change total amount (subT) when quantity (qty) is changed
update(0);
for (const tr of arrayoftr) {
    let img = tr.children[1].children[0];
    let pro = tr.children[2];
    let pri = tr.children[3];
    let qt = tr.children[4].children[0];
    let subT = tr.children[5];

  qt.addEventListener("change",function(){
        let qty = parseInt(qt.value);
        let p = parseInt(pri.innerText.slice(1));
        let total = parseInt(eval(qty*p));
        subT.innerText= "$"+total;
        update(0);
    });

}


function saveT(t,c) {
    console.log(c);
    console.log(t);
    let cardTotals = document.getElementsByClassName("cardTotals");
    cardTotals[0].innerText="$"+eval(t);
    cardTotals[1].innerText="$"+eval(t);
    }
// for updating card total of another table as the total of it 
function update (c){
    if(arrayoftr.length!=0){
        var t=0;
        for(i=0;i<arrayoftr.length;i++){
            var cardSubTotals = parseInt(arrayoftr[i].children[5].innerText.slice(1));
            t = t + cardSubTotals ;
            }
            saveT(t,c);
            // let cardTotals = document.getElementsByClassName("cardTotals");
            // cardTotals[0].innerText="$"+eval(t-c);
            // cardTotals[1].innerText="$"+eval(t-c);
    }
    else{
        let cardTotals = document.getElementsByClassName("cardTotals");
            cardTotals[0].innerText="$0";
            cardTotals[1].innerText="$0";
    }
}
