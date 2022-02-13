# dropdown 따라오게 만들기

```css
.dropdown{
  display: block;
  opacity:1
}
```
따로 클래스를 줘야 애니메이션 효과처럼 나타낼 수 있음\
다른 프레임워크에서도 이런식으로 내부에서 돌아가는 것 

display가 block 이어야 getBoundingClientRect() 로 정보 가져올 수 있다.

## `getBoundingClientRect()`
> 상대적 위치임

## `translate()`
- translate(x,y)
- translate(2px) => translate(2px,0) 와 동일 

주의 : `,`꼭 찍자 !!

## 빠르게 hover 할때
빠르게 왔다갔다하면 trigger-enter-active 클래스가 있지도 않은데 클래스를 지우는 이벤트가 호출되고 150ms이 지나서야 trigger-enter-active 클래스가 추가되니까 이를 설정해주는 작업이 필요함\
클래스가 triger-enter-active와 trigger-enter 클래스는 함께 삭제되니까 150ms 후에도 trigger-class가 있을 때만 trigger-enter-active 클래스가 추가될 수 있도록함 