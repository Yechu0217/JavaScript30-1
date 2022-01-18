# 01 DRUM KIT

### data-\* attribute

data 속성을 이용하면 원하는 속성을 지정해서 넣어줄 수 있다. index.html에 들어간 data-key로 keyCode 값을 넣어주었다.

### audio 태그 & currentTime

문서 내에 있는 사운드 콘텐츠를 임베드할 때 사용할 수 있다. `src`속성 , `<source>` 요소를 사용하여 오디오 소스를 넣을 수 있다.`currentTime` 속성을 지정해서 현재의 playback 시간을 지정할 수 있다.

### 스타일 제거하기

키를 누르고 나서 스타일이 바로 제거되도록 할떄 스타일이 변경되는 이벤트를 받아서 이떄 해당 스타일의 클래스가 제거되도록 할 수 있다.
`setTimeout`과 같은 이벤트는 `transition, transform`과 같이 시간이 있는 것과 같이 쓸 때 버그가 생길 수 있기 때문
