<?php
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "banco_siteGa4";

$conexao = new mysqli($host, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Erro na conexão: " . $conexao->connect_error);
}

$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

$sql = "INSERT INTO formulario (nome, email, mensagem) VALUES ('$nome', '$email', '$mensagem')";

if ($conexao->query($sql) === TRUE) {
    echo "Dados enviados com sucesso!";
} else {
    echo "Erro: " . $conexao->error;
}

$conexao->close();
?>
