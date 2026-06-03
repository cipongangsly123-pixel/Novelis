
const id=new URLSearchParams(location.search).get('id');
fetch('data/novels.json').then(r=>r.json()).then(d=>{
const n=d.find(x=>x.id==id)||d[0];
novel.innerHTML=`<h1>${n.title}</h1><p>${n.description}</p>`+
n.chapters.map((c,i)=>`<p><a href='chapter.html?id=${n.id}&c=${i}'>${c.title}</a></p>`).join('');
});
