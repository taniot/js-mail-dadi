'use strict';

const usersList = [
  'erjembo@ew.bz',
  'fut@tomihmep.cf',
  'zaj@tusef.au',
  'vu@bi.mc',
  'gesozebu@de.pn',
  'mues@zofisuc.ky',
  'apigo@tohucbak.org',
  'litiduz@dulgurgi.lb',
  'edaam@kut.pg',
  'lomafsel@tepvib.pr',
  'uma@fahi.gh',
  'cu@ohefi.org',
  'fazefuga@awses.fk',
  'mavsifco@ik.eh',
  'cezam@pu.lt',
  'mibpel@kotceiro.ac',
  'soriwa@gamdet.fj',
  'ap@nizgoumu.gi',
  'sanhi@re.dm',
  'vundemi@juku.kh',
  'visiret@big.rs',
  'os@nog.in',
  'behbow@isuig.tn',
  'bitgivob@saowpum.fj',
  'du@ru.nr',
];

// console.log(usersList);

//stato iniziale
let canAccess = false;

//esecuzione della verifica di accesso
const user = prompt('Chi sei? Inserisci la tua email.');

//scope globale

//i 0 a 24 / 25 volte
for (let i = 0; i < usersList.length; i++) {
  //scope for
  if (user === usersList[i]) {
    //scope if
    canAccess = true;
    break;
  }
}

//stato finale: messaggio
if (!canAccess) {
  console.log('Non puoi accedere');
} else {
  console.log('Puoi accedere');
}
