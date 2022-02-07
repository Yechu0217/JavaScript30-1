# browser sync
webcam security 이슈때문에 서버랑 연결해야함 
yarn install해서 서버 시작하기(browser-sync package.json에 포함되어있음)

# 비디오 가져오기
[Using object URLs - mozilla](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#example_using_object_urls_to_display_images)
강의 내용 그대로 하면 안되고, 바뀌어서 `mediaStream` 의 경우 v`ideo.srcObject` 에 바로 할당해야함 

# 캔버스
캔버스가 비디오 사이즈와 같아야함\
`setInterval` 대신 `requestAnimationFrame`를 사용해봤는데\
`requestAnimationFrame`는 재귀적으로 호출해야 하는 것을 잊지말자.

pixels.data 에서 배열로 나오는 것들이 rgba 반복되는 배열이라서 이 값을 변형해서 필터 효과를 만들 수 있었다.
