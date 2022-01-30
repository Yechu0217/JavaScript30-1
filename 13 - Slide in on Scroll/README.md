# transform, opacity
이미지가 옆에서 오는 느낌을 주기 위해 translateX(), opacity를 사용 

# debounce
param으로 함수를 넣어서 scroll이 너무 많이 호출되지 않도록 해주자.

# scroll 위치 
```js
function checkSlide(e){
      sliderImages.forEach(img =>{
        const slideInAt = (window.scrollY + window.innerHeight)- img.height / 2
        
        const imageBottom = img.offsetTop + img.height
        const isHalfShown = slideInAt > img.offsetTop
        const isNotScrolledPast = window.scrollY < imageBottom
        if(isHalfShown && isNotScrolledPast){
        return img.classList.add('active')
        }
        return img.classList.remove('active')
      })
    }
```
window.scrollY 로 top부터의 스크롤 위치를 가져오고, 
window.innerHeight로 브라우저 창 내부 높이를 픽셀로 가져온다.\
여기서 이미지 반쯤 왔을때의 위치를 가져오고 싶기 때문에 img.height를 2로 나눈다.\

imageBottom 값은 이미지 offsetTop 으로 top부터 이미지 위에까지의 값을 가져와서 여기에 이미지 높이를 더해서 가져올 수 있다. \
isHalfShown 값은 img.offsetTop 값보다 더 커야 이미지를 지나치게 되므로 slideInAt 이 더 클 때만 true가 되게 해준다. \
isNotScrolledPast 값은 이미지를 이미 지나쳐서 내려가버리면 scrollY 값이 imageBottom 값보다 크게 된다. 그래서 지나쳐버릴 때는 false가 되도록 해준다.\
