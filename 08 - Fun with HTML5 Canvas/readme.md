# Canvas

## HTMLCanvasElement.getContext()
캔버스에 그릴 수 있는 컨텍스트를 리턴하는 메소드

```js
const ctx = canvas.getContext(contextType)
```
contextType 다음과 같은 것들이 들어갈 수 있다.

`2d` : 2차원 rendering context \
`webgl` : 3차원 rendering context인 WebGLRenderingContext 객체를 만듦(WebGL 버전 1 브라우저에서만 가능)\
`webgl2` :  위와 동일, WebGL2RenderingContext 객체 만듦(WebGL2 버전 브라우저에서만 가능)\
`bitmaprenderer` : ImageBitmapRenderingContext를 만든다. 

## hsl
hue, saturation, lightness 
(mother-effing hsl)[https://mothereffinghsl.com]\
hue는 0 (빨강) 에서 시작해서 색이 변하여 360이 되면 다시 빨강이 됨 \
saturation 채도, %로 나타냄\
lightness 밝기, %로 나타냄

## offsetX, offsetY
마우스 이벤트에서 받을 수 있는 x,y좌표를 받아서 이를 라인으로 그리는 것이 핵심\
마지막 x,y 좌표를 마우스를 뗄 때 받아서 마지막 좌표를 기억함

이때 구조 분해 할당을 통해 더 간편하게 나타낼 수 있었다.
```js
[lastX, lastY] = [e.offsetX, e.offsetY]
```
