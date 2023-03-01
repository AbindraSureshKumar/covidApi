var div = document.createElement("div");
div.innerHTML=`<input type="text" id="txt">
<button type="button" onclick="foo()">Search</button>
<div id="active"></div>
<div id="recovered"></div>
<div id="deaths"></div>`;
div.style.textAlign="center";
document.body.append(div);

async function foo(){
    let cc = document.getElementById("txt").value;
    let res = await fetch(`https://api.covid19api.com/total/dayone/country/${cc}`)
    let res1 = await res.json();
    console.log(res1);
    let index = res1.length -1;
    let result1 = res1[index].Active;
    let result2 = res1[index].Recovered;
    let result3 = res1[index].Deaths;
    console.log(result1);  
    console.log(result2);
    console.log(result3);
    document.getElementById("active").innerText=`Total Active Cases : ${result1}`;
    document.getElementById("recovered").innerText=`Total Recovered Cases : ${result2}`;
    document.getElementById("deaths").innerText=`Total Death Occured : ${result3}`;
}