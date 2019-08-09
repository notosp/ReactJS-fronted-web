gunakan let hindari var
Cara kerja let hampir sama dengan var, bedanya di scope. 
var adalah function scope, sedangkan let adalah block scope. ( lihat tabel diatas )
gunakan const untuk variabel yg nilainya statis atau tidak berubah


let nDepan = 'Noto';
let nBelakang = 'Setiyoputro';
let age = prompt("umur saya adalah ... ");
Salah satu perintah dasar sederhana untuk menerima data inputan yang berasal dari keyboard adalah prompt.

let hasil = nDepan + ' ' + nBelakang + ' ' + "umur saya adalaha" + ' ' + age + ' ';
using template string
let hasil = `${nDepan} ${nBelakang} umur saya ${age} tahun`;
alert(hasil); 

==========================default paramater==============================//
function welcome (user, message) 
function welcome (user = 'ajajajajaja', message ='nadbahdandana')
{
    alert(`hallo bro ${user}, ${message}`);
}
welcome ('noto', 'hiyi  hiya');


===============================arrow function ==============================//
function greeting(message){
    alert(`${message} everyone!`);
}
atas bawah sama merupakan function
let greeting = message => alert(`${message} everyone!`);

greeting('good mornig');
========================
let contoh = (title, body) => {
    if (!title || !body) {
        throw new Error('this empty')
    } else {
        return alert(`${title}, ${body}`);
    }
}
contoh('coba', 'coba')

======================desdructuring object========
let student = stud => {
    let {nama, universitas} = stud
    console.log(`${nama}, ${universitas}`);
}

student({
    nama: 'noto setiyop',
    universitas: 'amikom'
});
======================Destructuring array==================
let gorengan = ["mendoan", "bakmi", "galundeng"];
console.log(gorengan) //[0],[1], [3]

======================Restructuring==============================
var nama = 'noto';
var umur = 23;
var saya = {nama, umur, output};
var output = function () {
    console.log(`nama saya adalah ${this.nama}, dengan umur ${this.umur}`)
}
(saya.output);
====sama dengan =====
var identitas = {
    nama: 'noto',
    umur: 23,
    saya = {nama, umur, output};
    output: function () {
    console.log(`nama saya adalah ${this.nama}, dengan umur ${this.umur}`)
    }
}
 identitas.output();

 ===========spread and rest operators==========
var makanan = ['mendoan', 'roti bakar', 'manggleng', 'tahu bacem'];
var minuman = ['kopyor', 'kopi'];

var makanminum = [... makanan, ... minuman];
jadi satu array objek
console.log(makanminum);


============class dan constructor super=========

function holyday (destination, days) {
    this.destination = destination
    this.days = days
}

holyday.prototype.info =  function () {
    console.log(this.destination + "|" + this.days + "days")
}

var purwokerto = new holyday ('purwokerto', 30);
console.log(purwokerto.info())

================class ======================
class holiday {
    constructor (destination, days) {
        this.destination = destination
        this.days = days
    }
info () {
    console.log(`${this.destination}, will takes ${this.days} days`)
    }
}
// const trip = new holiday ('Katchmandu nepal', 30);
// console.log(trip.info())

class Expedition extends holiday {
    constructor (destination, days, gear) {
        super(destination, days);
        this.gear = gear;
    }

    info () {
        super.info();
        console.log(`Bring your ${this.gear.join("and your")}`)
    }
}

const tripwithGear = new Expedition ("gunung slamet", 30, [" botol", " sarung", "kompor"]);
tripwithGear.info()

