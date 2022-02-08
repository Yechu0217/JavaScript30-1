# geolocation 
위도 경도도 받아올 수 있지만 여기서는 속도와 동서남북을 받아와본다\
핸드폰 시뮬레이터에서 인터넷 켜서 속도와 위치를 확인할 수 있음

```js
    navigator.geolocation.watchPosition(data=> {
      
    })
```
data를 찍어보면 heading, altitude, latitude, longitude,speed 등 확인할 수 있음 