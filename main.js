function data() {
    let l = document.querySelector('.login').value,
        p = document.querySelector('.pswd').value,
        out = document.querySelector('.out'),
        look = document.querySelector('.create-btn');
        
        look.addEventListener('click', () => {
            for(let key in user) {
                out.innerHTML += user[key]+'<br>';
            }
        })

        const user = {
            login : l,
            password : p
        }
}

document.getElementById('btn').onclick = data;