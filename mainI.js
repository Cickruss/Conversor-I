var unidade = ["zero", "um","dois","três","quatro","cinco","seis","sete","oito","nove"]
var dezena = ["dez","vinte",'trinta',"quarenta","cinquenta","sessenta","setenta","oitenta","noventa"]
var unidadez = ["onze","doze","treze","quatorze","quinze","dezesseis","dezessete","dezoito","dezenove"]
var centena = ["cem","duzentos","trezentos","quatrocentos","quinhentos","seiscentos","setecentos","oitocentos","novecentos",'cento']

function funcaozinha(params) {
    var dado = document.getElementById('x').value;
    var u, d, c, m, dm, cm, resp = '';
    u = dado % 10
    d = dado % 100 - u
    c = dado % 1000 - d - u
    m = dado % 10000 - c - d - u
    dm = dado % 100000 - m - c - d - u
    cm = dado % 1000000 - dm - m - c - d - u
    switch (cm) {
        case 900000:
            resp = centena[8]
            break;
        case 800000:
            resp = centena[7]
            break;
        case 700000:
            resp = centena[6]
            break;
        case 600000:
            resp = centena[5]
            break;
        case 500000:
            resp = centena[4]
            break;
        case 400000:
            resp = centena[3]
            break;
        case 300000:
            resp = centena[2]
            break;
        case 200000:
            resp = centena[1]
            break;
        case 100000:
            if (dm != 0 && m != 0) {
                resp += ' ' + centena[9]
            }
            else{
                resp += ' ' + centena[0]
            }
            break;




            
    }
    switch (dm) {
        case 90000:
            resp += ' e ' + dezena[8]
            break;
        case 80000:
            resp += ' e ' + dezena[7]
            break;
        case 70000:
            resp += ' e ' + dezena[6]
            break;
        case 60000:
            resp += ' e ' + dezena[5]
            break;
        case 50000:
            resp += ' e ' + dezena[4]
            break;
        case 40000:
            resp += ' e ' + dezena[3]
            break;
        case 30000:
            resp += ' e ' + dezena[2]
            break;
        case 20000:
            resp += ' e ' + dezena[1]
            break;
        case 10000:
            if (m == 1000) {
                resp += ' e ' + unidadez[0] + ' mil '
            }
            if (m == 2000) {
                resp += ' e ' + unidadez[1] + ' mil '
            }
            if (m == 3000) {
                resp += ' e ' + unidadez[2] + ' mil '
            }
            if (m == 4000) {
                resp += ' e ' + unidadez[3] + ' mil '
            }
            if (m == 5000) {
                resp += ' e ' + unidadez[4] + ' mil '
            }
            if (m == 6000) {
                resp += ' e ' + unidadez[5] + ' mil '
            }
            if (m == 7000) {
                resp += ' e ' + unidadez[6] + ' mil '
            }
            if (m == 8000) {
                resp += ' e ' + unidadez[7] + ' mil '
            }
            if (m == 9000) {
                resp += ' e ' + unidadez[8] + ' mil '
            }
            break;

    }
    if(dm != 10000){
    switch (m) {
        case 9000:
            resp += ' e ' + unidade[9] + ' mil'
            break;
        case 8000:
            resp += ' e ' + unidade[8] + ' mil'
            break;
        case 7000:
            resp += ' e ' + unidade[7] + ' mil'
            break;
        case 6000:
            resp += ' e ' + unidade[6] + ' mil'
            break;
        case 5000:
            resp += ' e ' + unidade[5] + ' mil'
            break;
        case 4000:
            resp += ' e ' + unidade[4] + ' mil'
            break;
        case 3000:
            resp += ' e ' + unidade[3] + ' mil'
            break;
        case 2000:
            resp += ' e ' + unidade[2] + ' mil'
            break;
        case 1000:
            resp += ' e ' + unidade[1] + ' mil'
            break;
        default:
            resp += ' mil '
        break;
    }}
    switch (c) {
        case 900:
            resp += ' ' + centena[8]
            break;
        case 800:
            resp += ' ' + centena[7]
            break;
        case 700:
            resp += ' ' + centena[6]
            break;
        case 600:
            resp += ' ' + centena[5]
            break;
        case 500:
            resp += ' ' + centena[4]
            break;
        case 400:
            resp += ' ' + centena[3]
            break;
        case 300:
            resp += ' ' + centena[2]
            break;
        case 200:
            resp += ' ' + centena[1]
            break;
        case 100:
            if (d != 0 && u != 0) {
                resp += ' ' + centena[9]
            }
            else{
                resp += ' ' + centena[0]
            }
            break;
    }
    switch (d) {
        case 90:
            resp += ' e ' + dezena[8]
            break;
        case 80:
            resp += ' e ' + dezena[7]
            break;
        case 70:
            resp += ' e ' + dezena[6]
            break;
        case 60:
            resp += ' e ' + dezena[5]
            break;
        case 50:
            resp += ' e ' + dezena[4]
            break;
        case 40:
            resp += ' e ' + dezena[3]
            break;
        case 30:
            resp += ' e ' + dezena[2]
            break;
        case 20:
            resp += ' e ' + dezena[1]
            break;
        case 10:
            if (u == 1) {
                resp += ' e ' + unidadez[0]
            }
            if (u == 2) {
                resp += ' e ' + unidadez[1]
            }
            if (u == 3) {
                resp += ' e ' + unidadez[2]
            }
            if (u == 4) {
                resp += ' e ' + unidadez[3]
            }
            if (u == 5) {
                resp += ' e ' + unidadez[4]
            }
            if (u == 6) {
                resp += ' e ' + unidadez[5]
            }
            if (u == 7) {
                resp += ' e ' + unidadez[6]
            }
            if (u == 8) {
                resp += ' e ' + unidadez[7]
            }
            if (u == 9) {
                resp += ' e ' + unidadez[8]
            }
            break;
    }
    if(d != 10){
    switch (u) {
        case 9:
            resp += ' e ' + unidade[9]
            break;
        case 8:
            resp += ' e ' + unidade[8]
            break;
        case 7:
            resp += ' e ' + unidade[7]
            break;
        case 6:
            resp += ' e ' + unidade[6]
            break;
        case 5:
            resp += ' e ' + unidade[5]
            break;
        case 4:
            resp += ' e ' + unidade[4]
            break;
        case 3:
            resp += ' e ' + unidade[3]
            break;
        case 2:
            resp += ' e ' + unidade[2]
            break;
        case 1:
            resp += ' e ' + unidade[1]
            break;
    }}
    if (dado == 1000000) {
        resp = 'um milhão 🌽'
    }
    document.getElementById('resp').innerHTML = resp;
}