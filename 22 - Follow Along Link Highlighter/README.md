hover 시 해당 아이템의 크기에 맞게 사이즈가 조정된다.

# `Element.getBoundingClientRect()`
해당 메소드는 DOMRect 객체를 리턴하는데, 이 객체에는 element의 크기에 대한 정보와 뷰포트를 기준으로 하는 상대적 위치값이 들어있다.

그래서 원하는 아이템에 mouseenter 이벤트를 받아서, 위의 메소드를 통해 해당 요소의 width, height, top, left를 받아올 수 있다. 

스크롤을 하면 스크롤 한만큼 아이템이 적용되지 않기 때문에 top, left 값에 스크롤이 있을 수 있으니 여기에 스크롤 값을 더해주면 된다.

# transition

요소를 옮길때마다 부드럽게 전환되는 효과를 위해서 transition은 필수 