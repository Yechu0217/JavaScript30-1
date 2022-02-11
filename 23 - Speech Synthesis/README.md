# `SpeechSynthesisUtterance()`
[mozilla docs](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)

`properties`

.lang\
.pitch\
.rate\
.text\
.voice\
.volume 

# toggle 함수
toggle 함수를 만들어서 voice, option, 등이 변할 때 호출하여 다시 말하기가 시작될 수 있도록 한다.\

`speechSynthesis.cancel()` 했다가 다시 `.speak()`을 호출하면되는데, `param` 을 `true` 로 기본으로 넘겨주고 나중에 stop 버튼 클릭시만 param을 `false`로 넘겨줬다.
