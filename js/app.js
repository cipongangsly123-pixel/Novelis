
let all=[];
fetch('data/novels.json').then(r=>r.json()).then(d=>{all=d;render(d)});
function render(arr){
document.getElementById('novels').innerHTML=arr.map(n=>
`<div class="card"><h3>${n.title}</h3><p>${n.author}</p>
<p>${n.description}</p><a href="novel.html?id=${n.id}">Baca</a></div>`).join('');
}
search.oninput=e=>render(all.filter(x=>x.title.toLowerCase().includes(e.target.value.toLowerCase())));
