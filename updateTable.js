//for delete button in table 
let tbody = document.getElementsByTagName("tbody")[0];
let tablerows = tbody.children;
let arrayoftr= Array.from(tablerows);
let delbtns = document.getElementsByClassName("delete");
let arrayofdel = Array.from(delbtns);
let cardTotals = document.getElementsByClassName("cardTotals");
arrayofdel.forEach(del => {
    del.addEventListener("click", function () {
        var index = arrayoftr.indexOf(del.parentElement.parentElement);
        if (index>-1) {
            arrayoftr.splice(index,1);
        }
        del.parentElement.parentElement.remove();
        localStorage.clear();
      console.log(arrayoftr);
    });
});




var myInterval = setInterval(function(){
    for (const tr of arrayoftr) {
        // let img = tr.children[1].children[0];
        // let pro = tr.children[2];
        let pri = tr.children[3];
        let qt = tr.children[4].children[0];
        let subT = tr.children[5];
    
      qt.addEventListener("change",function(){
            let qty = parseInt(qt.value);
            let p = parseInt(pri.innerText.slice(1));
            let total = parseInt(eval(qty*p));
            subT.innerText= "$"+total;
        });
    
    }
    if(arrayoftr.length!=0)
    {
        var t=0;
        for(i=0;i<arrayoftr.length;i++){
            var cardSubTotals = parseInt(arrayoftr[i].children[5].innerText.slice(1));
            t = t + cardSubTotals ;
         }
            cardTotals[0].innerText="$"+t;
            cardTotals[1].innerText="$"+t;
    }
    else if(arrayoftr.length==1){
        var cardSubTotals = arrayoftr[0].children[5].innerText;
        cardTotals[0].innerText=cardSubTotals;
        cardTotals[1].innerText=cardSubTotals;

    }
    else{
            cardTotals[0].innerText="$0";
            cardTotals[1].innerText="$0";
       }
},100);