# 정규식 표현

```js
const regex = new RegExp(패턴, 'gi')
```

g는 globally 하게 찾아라
i는 insensitive 한거 (lowercase, uppercase )

# fetch API

브라우저에 내장된 api
fetch()를 사용하면 프로미스를 리턴하는데,
처음 프로미스에서 리턴되는 값을 보면 blob으로, Prototype을 확인하여 여러가지를 볼 수 있다. ArrayButter(), json() 등 여기서 확인할 수 있다.

# 매치된 글자 highlight

매치된 글자만 hightlight를 주고 싶을 때, 스타일이 들어간 클래스를 태그에 넣어주면 된다.

# join()

배열을 mapping하면 요소들이 `,`로 이어지기 때문에 이를 없애주기 위해 join(" ")을 사용함
