let products = JSON.parse(localStorage.getItem("products")) || [];

function save(){
    localStorage.setItem("products",JSON.stringify(products));
    show();
}

function addProduct(){

let name=document.getElementById("name").value;
let price=document.getElementById("price").value;
let image=document.getElementById("image").value;

products.push({name,price,image});

save();

document.getElementById("name").value="";
document.getElementById("price").value="";
document.getElementById("image").value="";
}

function show(){

let html="";

products.forEach((p,index)=>{

html+=`
<tr>

<td>${p.name}</td>

<td>₹${p.price}</td>

<td>
<button onclick="removeProduct(${index})">
Delete
</button>
</td>

</tr>
`;

});

document.getElementById("list").innerHTML=html;

}

function removeProduct(i){

products.splice(i,1);

save();

}

show();
