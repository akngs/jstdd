## 자바스크립트 TDD 연습 환경

크롬 브라우저에서 TDD를 연습할 수 있는 환경.

## 파일 구성

* `index.html`: 엔트리포인트
* `test.html`: 테스트 러너
* `app.js`: 프로덕션 코드
* `app.test.js`: 테스트 코드 

## 준비하기

1. 이 저장소를 다운로드
2. 최신 버전의 크롬 브라우저 설치
3. DevTools -> Sources -> Filesystem -> "Add folder to workspace" ->
   다운로드 받은 폴더를 선택
4. 보안 알림이 뜨면 "Allow"를 선택

## TDD 연습하기

1. 현재 탭에 `test.html` 열기
2. `app.test.js`에 테스트를 작성하고 `app.js`에 프로덕션 코드 작성
3. 테스트를 실행하려면 브라우저를 새로고침

## 실습용 요구사항

* [자판기](docs/vending-machine.md)

## 참고자료

* [Mocha](https://mochajs.org/)
* [Chai - Assertion APIs](http://www.chaijs.com/api/assert/)
