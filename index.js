function logar() {

 const email = document.getElementById("email").value
 const senha = document.getElementById("senha").value

   if(email == "admin@gmail.com" && senha == "adminprincipal"){
    alert("Administrador logado com sucesso !");
    location.href = "produtos.html"
    location.href = "cadastro.html"
    location.href = "cliente.html"
    location.href = "conta.html"
    location.href = "admin.html"
    location.href = "vendas.html"
     location.href = "iphone8.html"
     location.href = "iphone13.html"
   }
   else {
    alert("Usuário ou senha incorreta !")
   }
}