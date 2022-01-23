### 7번 sort()

나는 바로 array에서 접근했지만 destructuring 해서 다음과 같이 할 수도 있다.

```js
const [aLast, aFirst] = a.split(', ')
const [bLast, bFirst] = b.split(', ')
```

### 8번 reduce()

reduce() 메소드 쓸때 처음에 빈 객체, 배열을 줘야할 때가 있다.
이떄 빈 객체에 현재 추가하거나 체크하려는 아이템이 없을 때 체크해줘야하는 부분을 잊지 말자
8번 문제에서는 원하는 키가 없을때 해당 key를 추가하고 초기 value 를 0으로 주었다.
...

> property = key + value

객체가 없을 때 해당 []를 사용해서 key를 추가했는데, `.`(dot notation)을 이용해서 추가하면 item이라는 키로 추가되어 item 키 하나에 카운트만 올라가게 된다. 인수로 받은 `item`이라는 이름으로 키 값이 생성되지 않고, 문자 그대로의 'item' 키 값이 생기기 때문이다.
