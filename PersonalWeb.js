const emailReceiver = 'khoirjaka@mail.com'
function submitForm() {

    let Name = document.getElementById('input-name').value
    let Email = document.getElementById('input-email').value
    let Number = document.getElementById('input-number').value
    let Subject = document.getElementById('select-subject').value
    let YourMessage = document.getElementById('input-message').value

    if(Name === ''){
        alert ('Nama harus di isi')
    }
    if(Email === ''){
        alert ('Email haris di isi')
    }
    if (Number === ''){
        alert ('Nomor harus di isi')
    }
    if(Subject === ''){
        alert  ('Subject harus di isi')
    }
    if(YourMessage === ''){
        alert ('Pesan harus di isi')
    }

    console.log(Name)
    console.log(Email)
    console.log(Number)
    console.log(Subject)
    console.log(YourMessage)


    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${Subject}&body=Hello my name ${Name}, ${YourMessage}`
    a.click()

    
}
