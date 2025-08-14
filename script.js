function generateCode() {
    const secret = 'SECRET_KEY'; // Substitua pela chave secreta do usuário
    const code = otplib.authenticator.generate(secret);
    document.getElementById("result").innerText = `Código: ${code}`;
}
