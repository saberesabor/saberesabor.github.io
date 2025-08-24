
(function(){
  const root=document.documentElement;
  const pref=localStorage.getItem("saber_theme");
  if(pref) root.setAttribute("data-theme",pref);
  const btn=document.getElementById("theme-toggle");
  if(btn){
    const setLabel=()=>{const light=root.getAttribute("data-theme")==="light";btn.textContent=light?"Modo Escuro":"Modo Claro";btn.setAttribute("aria-pressed",light)};
    setLabel();
    btn.addEventListener("click",()=>{const light=root.getAttribute("data-theme")==="light";root.setAttribute("data-theme",light?"dark":"light");localStorage.setItem("saber_theme",light?"dark":"light");setLabel();});
  }
  const drawer=document.getElementById("drawer"),openBtn=document.getElementById("open-drawer"),closeBtn=document.getElementById("close-drawer");
  if(drawer&&openBtn){const toggle=(o)=>{drawer.classList.toggle("open",o);drawer.setAttribute("aria-hidden",(!o).toString())};openBtn.addEventListener("click",()=>toggle(true));if(closeBtn) closeBtn.addEventListener("click",()=>toggle(false));drawer.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>toggle(false)));}
  const search=document.getElementById("search-input");
  if(search){search.addEventListener("input",()=>{const q=search.value.trim().toLowerCase();document.querySelectorAll(".searchable").forEach(el=>{const t=el.textContent.toLowerCase();el.classList.toggle("hidden",!t.includes(q));});});}
})();
