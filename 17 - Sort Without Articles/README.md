# a, the 등 빼고 sort 하기

## replace()
`strip()` 이라는 함수를 만들어서 정규식을 통해 원하는 단어가 포함됐다면 빈칸으로 바꿔주는 함수를 만들어준다.\

## sort()
기본 오름차순\
compareFn 넣지 않으면 각 요소들은 string으로 변환되어 unicode 값에 따라 정렬됨\

a,b return >0  -> b,a 
a,b return <0  -> a,b (앞이 더 작은값이어야 - 값 나오니까)
a,b return ===0 -> keep orignal order 