# array/ object는 값이 아닌 참조로 복사됨 
# copied by reference, not by value ❗️❗️

## clone array
여러가지 방법으로 다음과 같이 배열을 복사할 수 있다.
```js
const players = ['mario', 'kim', 'park']
  const team2 = players.slice() 
  const team3 = [].concat(players)
  const team4 = [...players]
  const team5 = Array.from(players)
```
## clone object
`Object.assign(target, source)` 사용.

또는 `JSON.stringify()`로 string으로 바꿨다가 `JSON.parse`로 객체로 다시 바꿔줄 수도 있음..
