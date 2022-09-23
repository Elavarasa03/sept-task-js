// function values1() {
//     const alphas=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     const vow=['a','e','i','o','u'];
//     let result= alphas.filter((ans) => {
//     return vow.find((a)=>{ 
//         return ans.toLowerCase() === a.toLowerCase() });
// });
// document.getElementById('print').innerHTML=result;
// }

// function values2() {
//     const alphas=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     const vow=['a','e','i','o','u'];
//     let result= alphas.filter((ans) => {
//     return !vow.find((a)=>{ 
//         return ans.toLowerCase() === a.toLowerCase() });
// });
// document.getElementById('print').innerHTML=result;
// }


function search_emp() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('sk');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}