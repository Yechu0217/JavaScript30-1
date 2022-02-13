# event listener 
### bubbling
> when nested 
자식 div click =>부모 div click 까지 올라감

모던 브라우저에서 이벤트가 일어나면 브라우저는 capture를 함 `top-> down`

addEventListener의 3번쨰 파람으로 option 객체를 줄 수 있음

* `capture: true` - (디폴트는 false) 해당 이벤트를 capture시에 주는 것\
> 버블링될떄(down->top)가 아니라 캡쳐링될때(top-> down) 이벤트가 실행되도록 하겠다.
* `once : true` - 이벤트 실행하고 unbind itself, 딱 한번만 실행해 

* `event.stopPropagation()` - stop bubbling

event trigger 즉 bubble은 `down-> top` 으로 올라감