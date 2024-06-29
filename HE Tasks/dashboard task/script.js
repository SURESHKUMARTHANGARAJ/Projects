// show function
function show(e) {
    event.preventDefault();
    let sdata = document.querySelectorAll(".sensitive-info");
    for (var i = 0; i < sdata.length; i++) {
        sdata[i].textContent = "+91 1234567890";
    }
};
// hide function
function hide(e) {
    event.preventDefault();
    let sdata = document.querySelectorAll(".sensitive-info");
    for (var i = 0; i < sdata.length; i++) {
        sdata[i].textContent="none";
    }
};

// table  
var data = [{
    id: 1,
    name: "Suresh",
    district: "salem",
    contact: "+91 1234567890"
},
{
    id: 2,
    name: "Shankar Ram",
    district: "salem",
    contact: "+91 1234567890"
},
{
    id: 3,
    name: "Shankar Arumugam",
    district: "Bangalore",
    contact: "+91 1234567890"
},
{
    id: 4,
    name: "Jagatheesh",
    district: "chennai",
    contact: "+91 1234567890"
},
{
    id: 5,
    name: "rajmohan",
    district: "salem",
    contact: "+91 1234567890"
},
{
    id: 6,
    name: "hariharan",
    district: "salem",
    contact: "+91 1234567890"
},
{
    id: 7,
    name: "surya kumar",
    district: "Bangalore",
    contact: "+91 1234567890"
},
{
    id: 8,
    name: "naveen kumar",
    district: "chennai",
    contact: "+91 1234567890"
},
{
    id: 9,
    name: "jeeva",
    district: "salem",
    contact: "+91 1234567890"
},
{
    id: 10,
    name: "soundar",
    district: "salem",
    contact: "+91 1234567890"
},
{
    id: 11,
    name: "Arumugam",
    district: "Bangalore",
    contact: "+91 1234567890"
},
{
    id: 12,
    name: "manikandan",
    district: "chennai",
    contact: "+91 1234567890"
}
,
{
    id: 13,
    name: "kowsik",
    district: "salem",
    contact: "+91 1234567890"
},
{
    id: 14,
    name: "manoj kumar",
    district: "Bangalore",
    contact: "+91 1234567890"
},
{
    id: 15,
    name: "sekar",
    district: "chennai",
    contact: "+91 1234567890"
},
{
    id: 16,
    name: "keerthi",
    district: "salem",
    contact: "+91 1234567890"
},
{
    id: 17,
    name: "simbu",
    district: "salem",
    contact: "+91 1234567890"
},
{
    id: 18,
    name: "vijay",
    district: "Bangalore",
    contact: "+91 1234567890"
},
{
    id: 19,
    name: "ajith",
    district: "chennai",
    contact: "+91 1234567890"
},
{
    id: 20,
    name: "Vikram",
    district: "salem",
    contact: "+91 1234567890"
},
{
    id: 21,
    name: "karthi",
    district: "Bangalore",
    contact: "+91 1234567890"
},
{
    id: 22,
    name: "vasanth",
    district: "chennai",
    contact: "+91 1234567890"
},
{
    id: 23,
    name: "amarnath",
    district: "salem",
    contact: "+91 1234567890"
},
{
    id: 24,
    name: "ajish",
    district: "chennai",
    contact: "+91 1234567890"
},
{
    id: 25,
    name: "raghupathi",
    district: "salem",
    contact: "+91 1234567890"
}
];

var originaldata=data;
// table data generating using loop 
let tablebody = document.getElementById("tablebody");

function generatetable(data,start,end){
    for (var i = start; i <=end; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${data[i].id}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].district}</td>
                        <td class="sensitive-info hide">${data[i].contact}</td>`;
        tablebody.appendChild(tr);
    }
}
generatetable(data,0,4);

function refresh(){
    document.getElementById("search").value="";
    event.preventDefault();
    tablebody.innerHTML="";
    data=originaldata;
    generatetable(data,0,4);
    disabilitycheck(0,4);   
}

var pageno=1;
function table(e){    
    event.preventDefault();
    tablebody.innerHTML="";
    var start=(event.target.value)*5-5;
    var end=(event.target.value)*5-1;
    generatetable(data,start,end);
    disabilitycheck(start,end);
    pageno=event.target.value;
}

function disabilitycheck(start,end){
    if(start==0){
        document.querySelector(".prev").classList.add("disable");
    }else{
        document.querySelector(".prev").classList.remove("disable");  
    }
    if(end>=data.length-1){
        end=data.length-1;
        document.querySelector(".next").classList.add("disable");
    }else{
        document.querySelector(".next").classList.remove("disable");  
    }
}

function prev(e){
    event.preventDefault();
    tablebody.innerHTML="";
    var pagevalue=Number(pageno)-1;
    var start=(pagevalue)*5-5;
    var end=(pagevalue)*5-1;
    generatetable(data,start,end);
    disabilitycheck(start,end);
    pageno=pagevalue;
}

function next(e){
    event.preventDefault();
    tablebody.innerHTML="";
    var pagevalue=Number(pageno)+1;
    var start=(pagevalue)*5-5;
    var end=(pagevalue)*5-1;
    disabilitycheck(start,end);
    generatetable(data,start,end);
    pageno=pagevalue;
}

function searchdata(e){
    event.preventDefault();
    let searchInput=document.getElementById("search");
    let filteredData = data;
    const searchQuery = searchInput.value.trim().toLowerCase();
    if (searchQuery !== "") {
    refresh();
    tablebody.innerHTML="";
    filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery) ||
        item.district.toLowerCase().includes(searchQuery) ||
        String(item.id).toLowerCase().includes(searchQuery)
    );
    data=filteredData;
    generatetable(data,0,4);
    disabilitycheck(0,4);
    pageno=1;
}else{
    tablebody.innerHTML="";
    data=originaldata;
    generatetable(data,0,4);
    disabilitycheck(0,4);
 } }

