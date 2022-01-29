# shiftKey
체크박스 클릭시 쉬프트 키를 누르면 사이에 있는 체크박스들이 모두 체크되게 하고 싶을 때 event에서 shiftKey를 확인할 수 있다.

클릭할때마다 함수 `handleCheck`가 호출되고 이떄 lastChecked 값은 마지막 체크박스가 계속 들어간다.

체크박스가 checked이고, shiftKey 가 true이면 체크박스를 모두 도는데, 이때 이 체크박스둘 중 체크한 박스이거나 마지막으로 체크한 박스라면 `inbewteen` flag 값을 바꿔준다. 
그리고 해당 플래그가 true일때는 체크박스의 값을 모두 checked로 설정한다.