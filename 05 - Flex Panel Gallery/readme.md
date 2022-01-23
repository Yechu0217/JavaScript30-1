## 배치 - flex

1. 각 패널을 감싸는 상위 `div`에 `display: flex`
2. 그리고 각 패널에 `flex:1`을 줘서 균등하게 화면을 차지하게 만듦
3. 패널이 세로로 정렬되도록 `flex-direction:column`으로 설정
4. 또 각 패널 안에 있는 글자들을 배치시키기 위해 패널에도 `display: flex`
5. 각 패널의 childen(글자들)이 화면 전체 크기를 나눠 갖도록 `flex: 1 0 auto`
6. children(글자들)이 가운데 정렬되도록
   `justify-content: center;`,
   ` align-items: center;`

## 글자 없앴다가 보이기 - transform: translateY

패널 안의 children은 3개의 div로 이루어져 있는데, 첫번째와 마지막 child는 처음에 없어야 하기 때문에 각각 -100%, 100% Y좌표만큼 이동시킨다.
그리고 클릭했을 때 클래스를 주어 해당 클래스에는 다시 Y좌표를 0으로 설정하여 보이게 만든다.

## transition event

transition이 끝났을 때 클래스를 주어 글자들을 보이게 한다.
`transitionend` 이벤트를 확인하면 되는데, 이때 flex가 끝나는 시점에 클래스를 주었다.

> 참고: 22년 1월 23일 기준, safari에서는 flex 이벤트를 확인할 수 없었음(고로 해당 조건문을 타지 않아서 클래스가 추가되지 않는다..)
