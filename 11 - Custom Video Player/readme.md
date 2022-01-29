# video player

## 풀스크린
- 숙제

비디오 클릭시 `requestFullScreen()`함수 호출하여 풀 스크린으로 볼 수 있게 만들었다.

## dataset
저번에도 썼던 dataset!\
직접 만든 data-skip이라는 속성을 이용해서 skip 값을 설정하고 이를 숫자로 변환하여 비디오 시간에 넣어준다.

## progress bar
플래그를 주어서 mousedown 이나 클릭일떄만 진행바를 움직일 수 있도록 한다.\
현재 progress bar 색상은  `flex-basis`퍼센트값을 보여주는 것이기 때문에, 클릭한 offsetX 값을 progress의 offsetWidth와 나누고, 비디오 시간을 곲하여 나온 값을 비디오 현재 시간에 넣어준다.
