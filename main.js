function data() {
    let l = document.querySelector('.login').value,
        p = document.querySelector('.pswd').value,
        out = document.querySelector('.out'),
        login = document.createElement('li'),
        password = document.createElement('li'),
        look = document.querySelector('.create-btn');

        const user = {
            login : `login - ${l}`,
            password : `password -${p}`
        }

        look.addEventListener('click', () => {
            for(let key in user) {
                out.innerHTML += user[key] + '<br>';
            }        
        })
}

document.getElementById('btn').onclick = data;
