# 2024.05.03 

> 블로그 작성 하면서 강의 내용 정리 하고, 복습하면서 배웠던 내용들 머릿속에서 정리
- 목차 생성하고, 목차별로 정리 (목적성이 생김)
- 다른 분들 블로그 참고해보니까 내용이 길지 않음 (함축해서 작성)

const a = 10
let b = a -> 10
b += 10 -> 20
const c = a + b
-> 30

게시판을 만들어야 하는데
내가 이것도 모르고 하는데 게시판을 만들기 힘들다.

이해는 빠른데
어떻게 코드는 완성을 해 잘쓰긴 해
고민이 많고 이게 어떻게 돌아가는지 모르겠어
코드를 보면 읽기는해

완벽히 라는것.
일을 하고 있는게 아니고
완벽히 걱정을 하지 않았으면 좋겠다.

리뷰를 해드리는게 들을때는 알고 이해가 된것 같은 느낌을 받는데
이해도가 40~50까지 된상태다. 본인이 코드를 작성해서 공부하는 내용으로 50 ~ 60퍼는 채워야 한다.

CSS 가운데 정렬 하는법

자바스크립트 CRUD
블로그는 이해를 하고 쓴다기 보다는
블로그를 안쓴다는건 그 부분의 공부를 지금 뭘할지 몰라서 놓고있다.
즉 블로그에 쓰면서 공부가 됩니다.

목차 선정을 하면 어떤 내용의 키워드로 공부해야할지.
목차

함수
function
arrow
익명

패턴
쭉뒤로


클래스
CRUD
콜백

++
함수의 반환의 내용 return

직접 테스트를 해서 받은 내용으로 생각
블로그 보면서 체크를 하고

본인의 내용으로 바꿔보는거

for (let i = 0; i < array.length; i++) {
    if (i < 10) continue;
    console.log(i);
}

어느정도 알겠다.
알기위해서 쓴다.
obj["name"]
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];

    }
}
class 문법
class 어떻게 사용해야하나?

하나하나 객체로 만들어보세요
어느부분이 부족한건지
class 사용해야하겠구나?
객체로 만들었을때 문제가 뭔지
용도를 실제 게시판을 그림을 직접 그려봐야한다.
여기서 내용이 추상적으로 그리고 -> 프로그래밍적 사고로
데이터로 변경 해봐야할 부분이 어디어디 인지 확인을 해서 
CRUD 그림으로 그리고 프로그래밍적 사고로 데이터로 관리해야할 부분이 어느부분인지.
class 재사용이 되고 객체화 시켜야하는 부분이 어디인지?

종석 기현 중현 준후
서로 알려주는게 아니고
일반 함수의 내용을 공부하고 기현학생이 화살표 함수를 공부하고 중현학생이 익명함수를 공부하고 준후 학생이 실행 컨텍스트를 공부한다.

그렇군.. 제가 잡는거?
블로그 -> 깃
이미 알고있는 상태
TDD VO DTO DAO

만들때 코드 부터 하려고하면 안되고
추상적으로 구상을 1단계 하고
프로그래밍적 사고로 어떤 데이터들이 필요한지.

class BoardCreate {
    create(title, content, date, user) {
        return new list(title, content, date, user);
    }
}

class BoardDelete {

}

class BoardUpdate {

}

class List {
    title;
    content;
    date;
    user;
    like;
    constructor(title, content, date, user) {
        this.title = title;
        this.content = content;
        this.date = date;
        this.user = user;
        this.like = 0;
    }
}

객체로 다 만들어보시고
문제점이 보일수있다.
class 클래스를 사용해야하는 목적성.

추상적으로 그린 그림에서 프로그래밍적 사고로 데이터가 어떻게 필요한지


값을 입력하고 가져와야한다.

C create 생성
class Board {
    arr = [];
    constructor(createContent, BoardDelete, BoardUpdate) {
        this.createContent = createContent;
    }
    create() {
        this.arr.push(this.createContent());
    }
}

class CreateContent {
    titleInput
    contentInput
    constructor(titleInput, contentInput) {
        this.titleInput = titleInput
        this.contentInput = contentInput
    }

    create() {
        const { value: titleValue } = this.titleInput;
        const { content: contentValue } = this.contentInput;
        const list = new List(titleValue, contentValue, new Date(), "사용자");
        return list;
    }
}

const input1 = document.querySelector(".input");
const input2 = document.querySelector(".input2");
const createContent = new CreateContent(input1, input2);
const board = new Board(createContent)

const objArr = [
    { title: "제목1", content: "내용1" }
    , { title: "제목2", content: "내용2" }
    , { title: "제목3", content: "내용3" }
    , { title: "제목4", content: "내용4" }
    , { title: "제목5", content: "내용5" }
    , { title: "제목6", content: "내용5" }
    , { title: "제목7", content: "내용5" }
    , { title: "제목8", content: "내용6" }
    , { title: "제목9", content: "내용7" }
    , { title: "제목10", content: "내용8" }
]

const serchValue = "제";

const serchArr = objArr.filter((e) => {
    return e.title.indexOf(serchValue) !== -1;
})

const serchArr2 = objArr.filter((e) => {
    return (e.title.indexOf(serchValue) !== -1) || e.content.indexOf(serchValue) !== -1;
})



console.log(serchArr)
console.log(serchArr2)

-----------------------------------------------------------------------------------------------------

나의 상담 내용

목차를 정하고
목차를 정하면 공부를 해야할 목표치가 결정되고
결정된 목표치를 블로그에 쓰면서 공부가 되는것.

let a2 = 12;
let b2 = 20;
let c2 = b2;
let d2 = a2;

c2 += 40;
d2 += 30;
c2++;

a2 === 10;

값이 있거나 없거나 차이다.
parseInt 메서드가 반환값이 있는데 === 
Number 생성자
반환값이 없는 함수는 void 형을 가지고 있다.

const obj = {title : "123"};
console.log(parseInt(true))
if (obj) {
    console.log("안녕");
}

반환값은 기본이 undefined
function num2() {

}

const arr2 = [];
function push(arr, value) {
    arr[arr.length] = value;
    값을 복사 원본은 유지하고 값을 복사해서 새로운 주소를 할당 받은 겁니다.
    return [...arr];
}

const a3 = push(arr2, 1);
a3.push(2);
push(arr2, 2);
console.log(arr2);
console.log("asdfsfsd", a3)

const arr3 = [];
arr3.push(1);
console.log(arr3);

const objArr = [
    { title: "제목1", content: "내용1" }
    , { title: "제목2", content: "내용2" }
    , { title: "제목3", content: "내용3" }
    , { title: "제목3", content: "내용4" }
    , { title: "제목3", content: "내용5" }
    , { title: "제목6", content: "내용5" }
    , { title: "제목7", content: "내용5" }
    , { title: "제목8", content: "내용6" }
    , { title: "제목9", content: "내용7" }
    , { title: "제목10", content: "내용8" }
]

function filterArr() {
    const num = 10;
    for (let i = 0; i < num; i++) {
        objArr.splice(0, 1);
    }
}

매개변수로 두 개의 수를 받고 두 개의 수를 더했을 때 5가 넘으면 5를 반환
function num(a, b) {
    if ((a + b) > 5) {
        return 5
    }
}
console.log(num(prompt("첫번째 수"), prompt("두번째 수")));


function num01(num2) {
    console.log("num01")
    num2(num03)
}
function num02(num3) {
    console.log("num02")
    num3()
}
function num03(num04) {
    num04()
    console.log("num03")
}
function num04() {
    console.log("num04")
}

num01(num02);


let num2 = 20;

function fn01(num2) {
    console.log(num2);
}

fn01();

function callback(fn) {
    console.log(1);
    fn(callback3);
}

function callback2(fn) {
    console.log(2);
    fn();
}

function callback3(fn) {
    fn();
    console.log("이게 뭐임?");
}

callback(callback2);


function callback(fn) {
    fn(1, 2, 3, 4, function () {
        return 5;
    });
}

const result = callback(function (a, b, c, d, fn2) {
    return a + b + c + d + fn2();
})

console.log(result);