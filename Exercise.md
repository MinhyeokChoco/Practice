# 배열에 Number 타입의 랜덤한 6가지의 수를 담고 최댓값을 출력하라고 했을 때 식은 ?

```ts
let a = []; // 넣을 빈 배열 생성
let b = 0; // 최댓값 넣을 변수 생성
for(let i = 0; i < 6; i++) {
    a[i] = parseInt(Math.random() * 100)
}
for(let i = 0; i < a.length; i++) {
    if (a[i] > b) {
        b = a[i];
    }
}
return b;
```