const inputBtn=document.getElementById("save-btn")
let myLeads=[]
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn=document.getElementById("delete-btn")
console.log(leadsFromLocalStorage)
//ulEl.innerHTML+="<li>" + leadsFromLocalStorage + "</li>"
//console.log(JSON.parse("myLeads"))
//inputEl.innerHTML=" "
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    renderLeads()
})
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads()
}
function renderLeads(){
    // const li=document.createElement("li")
    // const item=inputEl.value
    // li.innerHTML=`
    //     <a target='_blank' href=${item}>
    //     ${item}
    //     </a>`
    // console.log(li)
    let listItems=" "
    for(let i=0;i<myLeads.length;i++){
        listItems+=`<li><a target='_blank' href='${myLeads[i]}'>  ${myLeads[i]} </a></li>`
    }
    ulEl.innerHTML=listItems
    //ulEl.append(li)
}
inputBtn.addEventListener("click",function(){
    console.log("Button clicked")
    myLeads.push(inputEl.value)
    inputEl.value=" " 
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myLeads"))
})

// for(let i=0;i<myLeads.length;i++){
//     ulEl.innerHTML+="<li>"+ myLeads[i] + "</li>"
// }
