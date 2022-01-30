# KONAMI CODE
> Up, Up, Down, Down, Left, Right, Left, Right, B, A. 

# `splice()`

```js
array.splice(start, deleteCount)
```
start가 음수인 경우, 배열의 끝에서부터 센다. \
아래 코드에서 secretCode로 정한 배열 길이(4)의 -1 이니까 (-5)가 start가 되고,\
이는 요소 끝에서 5번째 요소를 가리킨다.`secretCode.length-5`번째 인덱스와 같다.\
결국 0에서 시작하는 거랑 똑같음 !

deleteCount는 pressed 배열이 secretCode랑 길이가 똑같게 유지할 수 있도록 \
pressed 배열에서 secretCode 배열 길이를 빼준다. \
5개 전까지는 -값이니까 삭제되는 값이 없다가, 5개를 넘어가는 순간 앞에서 1개씩 삭제됨 

```js
pressed.splice(-secretCode.length -1, pressed.length - secretCode.length)
    
```