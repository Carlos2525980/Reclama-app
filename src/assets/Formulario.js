




function Enviar() {

  var nome = document.getElementById('nome')
  var endereco = document.getElementById('endereco')
  var idade = document.getElementById('idade')

  var n = Number(nome.value)
  var en = Number(endereco.value)
  var ide = Number(idade.value)


  if (n == "" || en == "" || ide == "") {


    alert('Digite os dados corretamente')


  } else if (ide < 18) {


    alert('Proibido se alistar')


  } else {


    alert('Enviado')



  }



















}
