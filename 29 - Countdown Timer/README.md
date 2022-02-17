# 타이머를 만들어보자

## 기본
`setInterval()` 를 사용하여 1초마다 원하는 함수를 호출하여 화면을 업데이트 해준다

## name attribute
```html
  <form name="customForm" id="custom">
   <input type="text" name="minutes" placeholder="Enter Minutes">
 </form>
```
이렇게 name attribute가 있는 태그는 스크립트에서 바로 접근할 수 있다.\
다음과 같이...
```js
document.customForm.addEventListener()
// 이런식으로 name으로 해당 요소에 접근하고 그 밑에있는 요소 또한 name으로 접근가능
document.customForm.minutes 
```
