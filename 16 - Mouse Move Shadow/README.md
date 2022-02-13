# offsetX , offsetY
> read-only property, `double` floating point value.

타겟 노드의 끝에서 마우스 이벤트 지점의 x,y offset

> 원하는 타겟 노드 안에 다른 노드가 있을때, 해당 노드를 지나치면 해당 노드의 offset을 가져올 수 있기 때문에, 타겟 노드 안에 다른 노드가 있을 때는 예외처리가 필요하다. 지금 내가 타겟하는 노드인지 아닌지 확인해서 원하는 값을 줄 필요가 있다.

# text-shadow
```css

/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

/* color | offset-x | offset-y | blur-radius */
text-shadow: #fc0 1px 0 10px;

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* Use defaults for color and blur-radius */
text-shadow: 5px 10px;

/* Global values */
text-shadow: inherit;
text-shadow: initial;
text-shadow: revert;
text-shadow: unset;

```

