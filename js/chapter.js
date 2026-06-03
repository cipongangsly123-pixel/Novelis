
const p=new URLSearchParams(location.search);
fetch('data/novels.json').then(r=>r.json()).then(d=>{
const n=d.find(x=>x.id==p.get('id'))||d[0];
const c=n.chapters[Number(p.get('c')||0)];
chapter.innerHTML=`<h1>${c.title}</h1><p>${c.content}</p>`;
});
