# Array.prototype

## some()

배열 중에 element 하나만 테스트를 통과해도 return true

## every()

모든 element가 테스트를 통과해야 return true

## find()

테스트에서 통과한 first element를 리턴
아무것도 못 찾으면 return undefined

## findIndex()

테스트에서 통과한 first element Index 를 리턴
없다면 return -1

## slice(start, end)

> returns a shallow copy of a portion of an array

slice(start)
slice(start, end)
원래 배열에서 start index 부터 end index 전까지 복사함

## splice()

> changes the contents of an array

splice(start)
splice(start, deleteCount, item 1 , ..)

item1 파라미터가 있을때 deleteCount는 빼면 안된다.

```js
const months = ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4, 1, 'May')
```

months 배열의 4번째 인덱스의 아이템을 1개 지우고 'May'를 넣는다. ==> ['Jan', 'Feb', 'March', 'April', 'May']
