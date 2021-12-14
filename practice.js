

const student = [
    {
    roll : 1,
    name : 'yasin',
    age : 7,
    location : 'noakhali',
    bn : 40,
    en : 50,
    math : 60,
    rel : 80,
    ss : 90,
   },
   {
    roll : 2,
    name : 'ashraf',
    age : 9,
    location : 'mirpur',
    bn : 49,
    en : 60,
    math : 66,
    rel : 77,
    ss : 88,
   },
   {
    roll : 3,
    name : 'sayd',
    age : 8,
    location : 'noakhali',
    bn : 48,
    en : 59,
    math : 71,
    rel : 61,
    ss : 66,
   },
   {
    roll : 4,
    name : 'mahmod',
    age : 10,
    location : 'noakhali',
    bn : 30,
    en : 40,
    math : 55,
    rel : 23,
    ss : 99,
   },
   {
    roll : 5,
    name : 'tayhid',
    age : 6,
    location : 'mirpur',
    bn : 99,
    en : 66,
    math : 33,
    rel : 57,
    ss : 68,
   },
] ;

console.log(JSON.stringify(student))

let studentjson = '[{"roll":1,"name":"yasin","age":7,"location":"noakhali","bn":40,"en":50,"math":60,"rel":80,"ss":90},{"roll":2,"name":"ashraf","age":9,"location":"mirpur","bn":49,"en":60,"math":66,"rel":77,"ss":88},{"roll":3,"name":"sayd","age":8,"location":"noakhali","bn":48,"en":59,"math":71,"rel":61,"ss":66},{"roll":4,"name":"mahmod","age":10,"location":"noakhali","bn":30,"en":40,"math":55,"rel":23,"ss":99},{"roll":5,"name":"tayhid","age":6,"location":"mirpur","bn":99,"en":66,"math":33,"rel":57,"ss":68}]'


const devinfo = [

    {
        id : 1,
        name : 'abdus smad',
        age : 22,
        skills : ' MERN stack',
        locaition : 'noakhali',
        income : 2000,
    },
    {
        id : 2,
        name : 'jafor',
        age : 19,
        skills : 'Laravel',
        locaition : 'dinajpur',
        income : 300,
    },
    {
        id : 3,
        name : 'halal',
        age : 33,
        skills : 'Django',
        locaition : 'mirpur',
        income : 400,
    },
    {
        id : 4,
        name : 'roki',
        age : 34,
        skills : 'WordPress',
        locaition : 'banani',
        income : 380,
    },
    {
        id : 5,
        name : 'ikram',
        age : 45,
        skills : 'java',
        locaition : 'panthopath',
        income : 570,
    },
    {
        id : 6,
        name : 'arif',
        age : 40,
        skills : 'GoLang',
        locaition : 'noakhali',
        income : 600,
    },
    {
        id : 7,
        name : 'rubel',
        age : 44,
        skills : 'WordPress',
        locaition : 'mirpur',
        income : 580,
    },
    {
        id : 8,
        name : 'yasin',
        age : 55,
        skills : 'java',
        locaition : 'dinajpur',
        income : 670,
    },
    {
        id : 9,
        name : 'obayd',
        age : 65,
        skills : 'paython',
        locaition : 'noakhali',
        income : 800,
    }
];

console.log(JSON.stringify(devinfo));

let devinfojson = '[{"id":1,"name":"abdus smad","age":22,"skills":" MERN stack","locaition":"noakhali","income":2000},{"id":2,"name":"jafor","age":19,"skills":"Laravel","locaition":"dinajpur","income":300},{"id":3,"name":"halal","age":33,"skills":"Django","locaition":"mirpur","income":400},{"id":4,"name":"roki","age":34,"skills":"WordPress","locaition":"banani","income":380},{"id":5,"name":"ikram","age":45,"skills":"java","locaition":"panthopath","income":570},{"id":6,"name":"arif","age":40,"skills":"GoLang","locaition":"noakhali","income":600},{"id":7,"name":"rubel","age":44,"skills":"WordPress","locaition":"mirpur","income":580},{"id":8,"name":"yasin","age":55,"skills":"java","locaition":"dinajpur","income":670},{"id":9,"name":"obayd","age":65,"skills":"paython","locaition":"noakhali","income":800}]'

const member = [
    {
        name : 'Mizan',
        age : 31,
        rull : 'HR'
    },
    {
        name : 'Shawon',
        age : 17,
        rull : 'JS'
    },
    {
        name : 'Ismail',
        age : 30,
        rull : 'PHP' 
    },
    {
        name : 'Ayesha',
        age : 45,
        rull : 'Laravel' 
    },
    {
        name : 'Tanvir',
        age : 35,
        rull : 'MD'
    },
    {
        name : 'Junaid',
        age : 15,
        rull : 'CEO'
    },
    {
        name : 'Hridoy',
        age : 38,
        rull : 'AGM'
    },
    {
        name : 'Mahbub',
        age : 27,
        rull : 'Hero Mahbub'
    },
    {
        name : 'Imran',
        age : 300,
        rull : 'GM'
    },
    {
        name : 'Asraf',
        age : 34,
        rull : 'Owner'
    }

]

console.log(JSON.stringify(member));

let memberjson = '[{"name":"Mizan","age":31,"rull":"HR"},{"name":"Shawon","age":17,"rull":"JS"},{"name":"Ismail","age":30,"rull":"PHP"},{"name":"Ayesha","age":45,"rull":"Laravel"},{"name":"Tanvir","age":35,"rull":"MD"},{"name":"Junaid","age":15,"rull":"CEO"},{"name":"Hridoy","age":38,"rull":"AGM"},{"name":"Mahbub","age":27,"rull":"Hero Mahbub"},{"name":"Imran","age":300,"rull":"GM"},{"name":"Asraf","age":34,"rull":"Owner"}]'


let all = [memberjson,devinfojson,studentjson];

console.log(all);

console.log(JSON.parse(all[0]));
console.log(JSON.parse(all[1]));
console.log(JSON.parse(all[2]));

