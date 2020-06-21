var nome = 'JC'

if (nome === 'JC') {
    console.log('Legal! Seu nome é este mesmo')
} else if (nome === 'Bombardelli') {
    console.log('Tudo bem! Você tambem serve')
} else {
    console.log('Que pena seu nome não é JC!')
}

// --------------

switch (nome) {
    case 'JC':
        console.log('Legal! Seu nome é este mesmo');
            break;
        case 'Bombardelli':
            console.log('Ah! Você tambem serve!');
            break;
        default:
            console.log('Que pena seu nome não é quem eu estou procurando')  
            break;
}
