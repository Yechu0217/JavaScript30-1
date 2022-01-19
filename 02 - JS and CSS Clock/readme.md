# 02 CLOCK

## transform-origin

`transform-origin`을 사용해서 transformation이 일어나는 지점(origin point)을 설정할 수 있다.

## Pseudo-elements

(오늘 다룬건 아니지만, 오늘 읽어보고 싶어서 모질라 문서를 참고하여 정리)

`pseudo-element`는 selector에 추가할 수 있는 키워드로, 선택한 요소의 특정 부분의 스타일을 바꿀 수 있다.

> `pseudo-element` 와 달리 `pusedo-classes` 는 상태에 따라 엘레먼트 스타일을 바꾸는데 사용한다.

### syntax

```css
selector::pseudo-element {
	property: value;
}
```

한 셀렉터 안에서 하나의 `pseudo-element`만 사용할 수 있다.
