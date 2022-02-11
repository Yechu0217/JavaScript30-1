# offsetTop , scroll.Y
scroll event 가 일어날때 nav의 `offsetTop` 값과 `scroll.Y` 로 스크롤 포지션을 비교해서, 같을때 위에 고정되게 클래스를 주면된다.

이때, 클래스를  nav 에 줄수도 있겠지만 body에 주면 나중에 컨트롤 하기 더 쉬울 수 있다.

바디에 해당 클래스가 있을 때 nav 는 어떻게 스타일을 줄건지 css로 추가하면 된다.

# `position:fixed` issue
`position:fixed`로 바꾸면 space를 차지하지 않아서 약간 점핑하는 걸 볼 수 있다.\
fix될떄 nav 높이를 바디의 paddingTop으로 주어서 스무스하게 흘러가도록 한다.

# fix 시에 나타나는 logo
nav 가 fixed 되면 nav 옆에서 로고가 하나 더 나오는데 이 로고는 width를 가지지 않았다가 바디에 클래스가 추가되면 `max-width`를 가진다.

max-width가 0 => 300px로 바뀌어야 늘어나기 때문에 부드러운 느낌( + w/ transition)

