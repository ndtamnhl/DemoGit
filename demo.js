// /////////////////////////////  1. Variable  ///////////////////////////////

// // Tên đại diện cho một giá trị, giá trị có thể thay đổi trong lúc chương trình thực thi
// // Khai báo variable có 3 cách: var, let, const
const C = fun();
function fun(){
    console.log("C");
}
// // A. var
// /// -> có scope global
{
    var demoVar = "HelloWord";
    console.log(demoVar);
}
console.log(demoVar);

/// -> có thể khai báo lại trong chương trình
var demoVar = "Hello demoVar";
console.log(demoVar);
var demoVar = "Hello demoVar2";
console.log(demoVar);
// /// -> không cần khai báo trước khi sử dụng
// console.log(demoVar2);// giá trị mặc định undefine
// var demoVar2 = "Hello demoVar2"

// // B. let
// /// -> có phạm vi (scope) local
// /// -> trong cùng scope biến được khai báo với let không được khai báo lại
// /// -> cần khai báo trước khi sử dụng
//     // let langauge = "javaScript";
//     // console.log(langauge);
//     // let langauge = "";// note: biến trùng tên trong scope

// {
//     //note: cần phải khai báo 
//     // console.log(langauage);
//     // let langauage = "javaScript";
// }

// // console.log(langauge) //note: không thể truy cập variable langauge



// // note: cần phải khai báo 
//     // console.log(langauage);
//     // let langauage = "javaScript";
// //////////// => let có thể khắc phục các vấn đề của var 




// // C. const
// // -> về cơ bản thì const không thể thay đổi giá trị trong quá trình thực thi 
// // -> khai báo const cần gán giá trị cho const 
// // -> có scope local

// // const THIS_IS_CONST;
// // const PI = 3.14;
// // console.log(PI);
// // {
// //     const CONST_IN_SCPOE = "";
// //     const CONST_IN_SCPOE = "abc";
// // }
// // console.log(CONST_IN_SCPOE);

// //////////// => lợi ích của const giữ giá trị cố định cho xuyên suốt chương trình vd: PI, LươngNV

// D. Cách đặt tên biến
// -> javaScript phân biệt chữ hoa thường 
let Hello = "";
let hello = "";
// -> bắt đầu tên variable là chữ cái, _, $,
// let _hello = "";
// let $hello = "";
// let 2hello = "";
// // -> trong tên biến có thể chứa số nhưng ko chứa ký tự đặt biệt
// let hello2 = "";
// let $$hello@ = "";  

// // E. Chuẩn đặt tên biến
// // -> Pascal Case: viết hoa các chữ cái đầu
// let ThisIsPassCalCase;
// // -> Camel Case: viết hoa các chữ cái đầu trừ chữ cái đầu tiên
// let thisIsCamelCase;
// // -> Snake Case: ngăn cách các chữ bằng _
// let this_is_snake_case;
// let This_Is_Snake_Case;
// const THIS_IS_SNAKE_CASE = 200; 

// /////////////////////////////  2. Data Type  ///////////////////////////////
// // A. Boolean
// let thisIsTrue = true;
// let thisIsFalse = false;
// // => kiểm tra biểu thức đúng sai, sử dụng cho các kỹ thuật lính canh vd tìm số chẵn
// let flag = false; 
// for(let i = 0;i<10;i++){
//     if(i%2==0){
//         flag = true;
//         console.log(`${i} = ${flag}`);
//     }
//     flag = false;
// }
// // B. NUll
// let thisIsNull = '';// đây là kiểu string   
// console.log(`data type a: ${typeof thisIsNull}`);
// // C. Undefine
// // -> tương tự như null nhưng undefine là biến chưa được gán giá trị
// let thisIsUndefine;
// console.log(`data type thisIsUndefine: ${typeof thisIsUndefine}`);
// // D. Number
// // bao gồm các số int,float dương, int,float âm,
// let num1 = 2e3;// = 2*10^3
// let num2 = 2e-3;// = 2*10^(-3)
// let thisIsInfinity = Infinity;// giá trị đại diện cho số dương cực lớn
// console.log(1/0);// Infinity
// console.log(-1/0);// -Infinity
// console.log(""/0);// NaN (Not a number) đại diện cho các phép tính không chính xác
// console.log(0/0);// NaN
// // E. string
// let thisIsString = "this is string";
// let _thisIsString = 'this is string';// phải dùng toán tử + để xuất giá trị biến trong chuỗi
// let $thisIsString = `this is
//                      stringd`; 
// console.log(` giá trị của $thisIsString: ${$thisIsString}`);
// console.log('giá trị của _thisIsString: ' + _thisIsString);


/////////////////////////////  3. Operater ///////////////////////////////

// A. Toán tử cơ bản
console.log(5 + 2); // 7
console.log(5 - 2); // 3
console.log(5 * 2); // 10
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1 (số dư)
console.log(5 ** 2); // 25 (5 lũy thừa 2)

// -> các toán tử khi sử dụng với chuỗi và số
console.log("5" + 2);//  52 (phép nối chuỗi)
console.log("5" - 2);// 3 
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5
console.log("5" % 2); // 1 (số dư)
console.log("5" ** 2); // 25 (5 lũy thừa 2)
console.log("5a" - 2);// NaN

// -> các toán tử khi sử dụng với chuỗi và chuỗi
console.log("5" + "5");// 55
console.log("5" - "5");// 0
console.log("5" * "2"); // 10
console.log("5" / "2"); // 2.5
console.log("5" % "2"); // 1 (số dư)
console.log("5" ** "2"); // 25 (5 lũy thừa 2)
console.log("5a" - "2");// NaN

// -> trong cùng biểu thức toán tử *,/,% có độ ưu tiên cao hơn +,-
console.log(1 - 2 * 3);//-5
// -> trong cùng biểu thức các biểu thức tính toán trong ngoặc () được ưu tiên
console.log((1-2)*3);//-3


// B. Toán tử gán
let a = 1;// gán giá trị cho 1 biến
let b = 1+2+3-4*2; // gán kết quá biểu thức cho 1 biến 
console.log(b);
let x=y=z = "Hello";// gán 1 giá trị cho nhiều biến
console.log(x);// Hello
console.log(y);// Hello
console.log(z);// Hello
console.log(a+=1);// a = 2
console.log(a-=1);// a = 1
console.log(++a);// a = 2 tăng 1 đơn vị

let e = 0;
let c = ++e;// thực hiện tăng biến a trước rồi mới gán 
console.log(c);//1
console.log(e);//1
let d = e++;// thực hiện gán trước rồi mới tăng
console.log(d);//1
console.log(e);//2

/////////////////////////////  3. So Sánh  ///////////////////////////////
/////////////////////////////  5.Cấu trúc rẽ nhánh  ///////////////////////////////

// A. if, else if, else
const age = 24;
if(age < 18){
    console.log("Too young");
}else if(age > 50){
    console.log("Too old");
}else{
    console.log("OK");
}

// -> có thể chuyển đoạn code trên thành toán tử điều kiện
let result = age < 18? "Too young": age > 50? "Too old": "OK";
console.log(`result= ${result}`);

// B. switch, case
const month = 3;
switch(month){

    case 1:{
        console.log("tháng có 31 ngày");
        break;
    }
    case 3:{
        console.log("tháng có 31 ngày");
        break;// Không có từ khóa break thì các case phía sau sẽ log()
    }
    case 4:{
        console.log("tháng có 30 ngày");
        break;
    }
    case 5:{
        console.log("tháng có 31 ngày");
        break;
    }
    case "6":{
        console.log("tháng có 30 ngày");
        break;
    }
    default:{
        console.log("không tồn tại tháng");
    }
}
// có thể nhóm các Case
switch(month){
    case 1:
    case 3:
    case 5:{
        console.log("tháng có 31 ngày");
        break;
    }
    case 4:
    case "6":{
        console.log("tháng có 30 ngày");
    }
    default:{
        console.log("Không tồn tại tháng");
    }
}
// console.log(2=="2");
// console.log(2==="2");

/////////////////////////////  6. function  ///////////////////////////////
// là một chương trình con giúp thực hiện 1 công việc 
// A. Suytax
function sayHelloWord(){
    console.log("Hello Word");
}
function sayHelloName(val,parameter = "việt nam"){
    console.log(`${val} from ${parameter}`);
}   
sayHelloWord();
sayHelloName("Hello");// Hello from việt nam
sayHelloName("Hello","USA");// Hello from USA
// Return
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));

let _sum = function(a,b){
    return a+b;
}
console.log(_sum(5,6));
//
// -> Cách viết ngắn 
let exFunction = function(val){
    console.log(`xin chào ${val}`);
}
let exFunction2 = (a,b) => {
    console.log(`${a} * ${b} = ${a*b}`);
} 
let exFunction3 = exFunction;// có thể tạo biến và lưu lại biến được định nghĩa hàm trước
exFunction("Hoàng");
exFunction3("Lộc");// biến được gán có thể hoạt động như hàm được định nghĩa
exFunction2(3,4);
// -> callback
// có thể truyền 1 hàm làm parameter của hàm khác
function ask(question,handleYes, handleNo){
    const answer = confirm(question);
    if(answer){
        handleYes();
    }else{
        handleNo();
    }
}
function handleYes(){
    console.log("Bạn đã chọn YES");
}
function handleNo(){
    console.log("Bạn đã chọn NO");
}
//ask("Bạn có muốn tiếp tục chương trình",handleYes,handleNo);

/////////////////////////////  7. Object  ///////////////////////////////
// Khai báo
let myComputer = {
    type: "laptop",
    1: "SONY",
    "operating system": "Windows 7"
}
let myComputer2 = {
    type: "laptop",
    brand: "ASUS",
    "operating system": "Windows 10",
    year: 2020
}
// 
let myComputer3 = {...myComputer,...myComputer2};

// Truy cập các thuộc tính
console.log(`type myComputer ${myComputer.type}`);
console.log(`os myComputer ${myComputer["operating system"]}`);// toán tử [] được sử dụng khi key của object chứa khoảng trắng 
console.log(myComputer3);
// Cập nhật giá trị cho object
myComputer3.brand = "Ubuntu";
console.log(myComputer3);
// Thêm thuộc tính cho object
myComputer3.status = "shut dow";
console.log(myComputer3);
// xóa thuộc tính cho object
delete myComputer3.status;
console.log(myComputer3);

// Tạo Object
function makeComputer(type,brand,os){
    return{
        type,
        brand,
        os
    }
}
let myComputer4 = makeComputer("laptop","ASUS","Windows 10");
myComputer4.status = "shut dows";
console.log(myComputer4);
// Kiểm tra thuộc tính tồn tại
console.log("type" in myComputer4);
// Duyệt các thuộc tính của object
for(let index in myComputer4){
    console.log(`${index}: ${myComputer4[index]}`);
}

// Bài tập
function point(x,y){
    return {
        x,
        y
    }
}
let makePoint = point(2,3);
makePoint["z index"] = 100;
let resultPonit = function(object){
    let result = 0;
    for(let index in object){
        result += object[index];
    }
    return result;
}
makePoint.x = 1;
delete makePoint.y;
console.log(makePoint);
console.log(resultPonit(makePoint));


// Phương thức trong object
let user = {
    name: "Alex",
    age: 28,
    sayHello(){
        console.log(`Hello ${this.name}`);
    }
};
user.sayHello();
user._sayHello = function(){
    console.log("Thêm _sayHello");
}
user._sayHello();

//console.log(0.1+0.2 === 0.3);
/////////////////////////////  8. Array  ///////////////////////////////
// Khởi Tạo
//let arr = [1,"string",{},null];// phần tử arr thuộc nhiều kiểu data
let arr2 = new Array();
//console.log(` Các phần tử arr= ${arr}`);// in toàn bộ giá trị trong arr


// console.log(` phần tử cuối arr= ${arrExample.pop()}`);
// console.log(arrExample);

// console.log(` Thêm các phần tử vào cuối arr ${arrExample.push(5,6)}`);
// console.log(arrExample);


// console.log(` Phần tử đầu tiên của arr= ${arrExample.shift()}`);
// console.log(arrExample);

// console.log(` Phần tử đầu tiên của arr= ${arrExample.unshift(-1,0)}`);
// console.log(arrExample);

// console.log(` Độ dài arr= ${arr.length}`);// xem số lượng phần tử mảng

let arrExample = [1,2,3,4];
let arrExample2 = [4,5,6,7];

let arrExample3 = arrExample.concat(arrExample2);
console.log(arrExample);
console.log(arrExample2);
console.log(arrExample3);

// let arrExample4 = [1,2,3,3,4,3];
// console.log(arrExample4);
// let functionFilter = arrExample4.filter(function(index){

//     return arrExample4[arrExample4.indexOf(index)] !== index; 
// })
// console.log(functionFilter);
//console.log(arr);

let arr = [1,2,3,4,5];
for(let index of arr){
    if(index==3){
        break;
    }
    console.log(index);
}
for(let index=0;index<arr.length;index++){
    if(arr[index]==3){
        break;
    }
    console.log(arr[index]);
}



// console.log(str[0]);
// console.log(str[str.length-1]);

// for(let a of str){
//     console.log(a);
// }

// console.log(str.indexOf("js"));
// console.log(str.indexOf("a"));
// console.log(str.indexOf("a",3));// tham số thứ 2 bắt đầu vt tìm kiếm
// console.log(str.indexOf("JS"));


// console.log(str.lastIndexOf("a"));// tương tự như indexOf nhưng tìm kiếm ngược
// console.log(str.includes("js"));// trả về true/ false
// console.log(str.includes("js",9));// tham số thứ 2 bắt đầu vt tìm

// console.log(str.slice(2,4));// start/end
// console.log(str.slice(2));// không có tham số end
// console.log(str.slice(-3,-1));//lấy ngược giá trị chuỗi


// Với substring không nhận tham số âm
let str = "I am a js dev";
console.log(str.substring(2,4));
console.log(str.substring(2));
console.log(str.substring(4,2));


// Dùng loop for in
// let p2 ={}
// for(let i in p1){
//     p2[i] = p1[i];
// }
// console.log(`p2[x] = ${p2.x}`);
// console.log(`p2[y] = ${p2.y}`);

// Dùng Object.assign(dest, [obj1, obj2, obj3])
let p1 ={
    x: 1,
    y: 2,
}
let p2 ={
    x: 2,
    y: 3,
    z: 4,
}
let pResult ={};
Object.assign(pResult,p1,p2);
console.log(pResult);


let point1 = {
    x: 1,
    y: 2,
    metadata: {
      type: "point",
    },
  };
// chuyển object về dạng JSON
let jsonPoint1 = JSON.stringify(point1);
console.log(jsonPoint1); // {"x":1,"y":2,"metadata":{"type":"point"}}
  
// parse JSON lại thành object mới
let point2 = JSON.parse(jsonPoint1);
console.log(point2.metadata.type); // point
  
point2.metadata.type = "CHANGED";
console.log(point2.metadata.type); // CHANGED
console.log(point1.metadata.type); // point
