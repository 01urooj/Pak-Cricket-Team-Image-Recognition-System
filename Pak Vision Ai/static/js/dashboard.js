// =======================
// Line Chart
// =======================

new Chart(document.getElementById("lineChart"),{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"Scans",

data:[5,8,7,12,10,14,18],

borderColor:"#00ff99",

backgroundColor:"rgba(0,255,153,.15)",

fill:true,

tension:.4

}]

},

options:{

responsive:true,

plugins:{

legend:{display:false}

}

}

});



// =======================
// Bar Chart
// =======================

new Chart(document.getElementById("barChart"),{

type:"bar",

data:{

labels:["Batsman","Bowler","All-rounder","Keeper"],

datasets:[{

data:[8,6,4,2],

backgroundColor:[

"#00ff99",

"#2196f3",

"#ff9800",

"#e91e63"

]

}]

},

options:{

plugins:{

legend:{display:false}

}

}

});



// =======================
// Doughnut Chart
// =======================

new Chart(document.getElementById("pieChart"),{

type:"doughnut",

data:{

labels:["Correct","Incorrect"],

datasets:[{

data:[96,4],

backgroundColor:[

"#00ff99",

"#ff4444"

]

}]

},

options:{

responsive:true

}

});


// =======================
// Image Preview
// =======================

const imageInput = document.getElementById("imageInput");

const preview = document.getElementById("previewImage");

imageInput.addEventListener("change", function(){

const file = this.files[0];

if(file){

preview.src = URL.createObjectURL(file);

preview.style.display = "block";

}

});

// =======================
// Demo Prediction
// =======================

document.querySelector(".scan-image-btn").onclick = function(){

document.getElementById("playerName").innerHTML = "Babar Azam";

document.getElementById("confidenceText").innerHTML = "Confidence : 98.4%";

document.getElementById("progressBar").style.width = "98%";

}
