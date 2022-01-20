# 03 CSS variable

## var(),  property notation

커스텀 속성 표기법인 -- 를 이용해서 커스텀 속성을 지정하고, `var()` 함수로 사용하면된다.
`:root` pseudo-class에 커스텀 속성을 표시해주는 것이 가장 좋다.
css 양이 많은 경우 값이 반복되기 마련인데 이때 커스텀 속성을 이용하여 한 곳에 값을 저장한뒤 참조하면 된다. 또 한 가지 장점은 `#fff`라는 값보다 `--main-text-color`가 더 이해하기 쉽다는 것이다.

```css
/* e.g */
h1 {
	color: var(--main-color);
}
```

## querySelctorAll

NodeList를 return 한다
Array 아님 (array 메소드 못씀)
