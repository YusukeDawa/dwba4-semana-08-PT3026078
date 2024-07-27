
var al1 = {
    nome: "Kleber Polanic",
    primNota: 9.5,
    segNota: 8
};

var al2 = {
    nome: "Heitor Brandão",
    primNota: 2,
    segNota:5.5
};

var al3 = {
    nome: "Beatriz Turbiani",
    primNota: 10,
    segNota: 9.5
};

al1.multPrimNota = al1.primNota * 0.6;
al1.multSegNota = al1.segNota * 0.4;
al1.notaTotal = al1.multPrimNota + al1.multSegNota;

al2.multPrimNota = al2.primNota * 0.6;
al2.multSegNota = al2.segNota * 0.4;
al2.notaTotal = al2.multPrimNota + al2.multSegNota;

al3.multPrimNota = al3.primNota * 0.6;
al3.multSegNota = al3.segNota * 0.4;
al3.notaTotal = al3.multPrimNota + al3.multSegNota;

alert("Aluno 1:\nNome: " + al1.nome + "\nPrimeira Nota: " + al1.primNota + "\nSegunda Nota: " + al1.segNota);

alert("Aluno 1:\nNome: " + al1.nome + "\nNota Total do Aluno 1: " + al1.notaTotal);

alert("Aluno 2:\nNome: " + al2.nome + "\nPrimeira Nota: " + al2.primNota + "\nSegunda Nota: " + al2.segNota);

alert("Aluno 2:\nNome: " + al2.nome + "\nNota Total do Aluno 2: " + al2.notaTotal);

alert("Aluno 3:\nNome: " + al3.nome + "\nPrimeira Nota: " + al3.primNota + "\nSegunda Nota: " + al3.segNota);

alert("Aluno 3:\nNome: " + al3.nome + "\nNota Total do Aluno 3: " + al3.notaTotal);
