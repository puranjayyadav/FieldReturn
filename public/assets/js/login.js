
const login = (taper, tpi)=>{
    alert(taper,tpi);
}

document.querySelector('.form').addEventListener('submit', e=>{
e.preventDefault();
const taper = document.getElementById('taper').value;
const tpi = document.getElementById('tpi').value;

login(taper,tpi)    
})