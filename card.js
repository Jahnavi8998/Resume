(function () {
  function loadJson(file,callback) {
var rawFile=new XMLHttpRequest();
rawFile.overrideMimeType("application/json");
rawFile.open("GET",file,true);
rawFile.onreadystatechange = function () {
  if (rawFile.readyState === 4 & rawFile.status == "200") {
    callback(rawFile.responseText);

  }
}
rawFile.send(null);
  }
  loadJson("data.json",function (text){
    var data=JSON.parse(text);
    console.log(data);
    pro(data.profile)
  });
  function pro(Pro) {
    var mainDiv=document.querySelector(".mainDiv");
    for (var i in Pro){
    var card=document.createElement("div");
    card.classList.add("cards");
    mainDiv.appendChild(card)
    var image=document.createElement("img");
    image.src="image/images.png";
    card.appendChild(image);
    var h1=document.createElement("h1");
    h1.textContent=Pro[i].name;
    card.appendChild(h1);
    var h3=document.createElement("h3");
    h3.textContent=Pro[i].comname;
    card.appendChild(h3);
    var h5=document.createElement("h5");
    h5.textContent=Pro[i].number;
    card.appendChild(h5);
    var h5=document.createElement("h5");
    h5.textContent=Pro[i].mail;
    card.appendChild(h5);
    var a=document.createElement("a");
    a.textContent="View Resume";
    a.href="resume.html";
    card.appendChild(a);
  }
  }
})();
