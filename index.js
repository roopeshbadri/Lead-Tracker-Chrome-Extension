const inputBtn=document.getElementById("input-btn")
let myLeads=[]
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
//inputEl.innerHTML=" "
inputBtn.addEventListener("click",function(){
    console.log("Button clicked")
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value=" " 
    console.log(myLeads)
})
const renderLeads=()=>{
    const li=document.createElement("li")
    const item=inputEl.value
    li.innerHTML=`
        <a target='_blank' href=${item}>
        ${item}
        </a>`
    console.log(li)
    ulEl.append(li)
}
// for(let i=0;i<myLeads.length;i++){
//     ulEl.innerHTML+="<li>"+ myLeads[i] + "</li>"
// }
