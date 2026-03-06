# ☕ 카름스테이 리액트 사이트 (개인)
: React 기반으로 제작한 숙소 예약 서비스 웹사이트입니다.
컴포넌트 구조를 기반으로 페이지를 구성하고 React Router를 활용해
페이지 간 이동을 구현했습니다. 또한 useState와 map을 활용한
동적 리스트 렌더링, 객실 및 추가 옵션 선택 기능, 결제 완료 화면
조건부 렌더링 등 사용자 인터랙션 중심의 UI 기능을 구현했습니다.

## 🛠 사용 기술
- Commponent-styled
- Router
- Hooks
- LocalStorage API
  
## 📂 페이지 구성
- 메인 홈페이지 (Home.js/TownIntro.js/TourIntro.js/Notice.js/ReservationPage.js/Login.js/)
- 숙소 리스트 페이지 (Search.js)
- 숙소 상세 디테일 페이지 (Detail.js)

## ✨ 주요 기능
마을숙소 리스트, 예약일정 조회 등 구현 (Home.js/Search.js/ReservationPage.js)
- useState를 활용해 예약 상태를 관리하고 UI에 반영
<br />
숙소 페이지 UI 및 컴포넌트 구조 설계 (Search.js)
- 숙소 카드 컴포넌트를 분리하여 재사용 가능한 구조로 설계
- props를 활용해 숙소 정보 데이터를 전달
<br />
map 기반 동적 리스트 렌더링 (rooms, experiences, reviews 등) (Detail.js)
- map()을 활용해 컴포넌트를 반복 렌더링하여 데이터 기반 UI 구성
<br />
객실 선택 및 원데이 클래스 추가 옵션 기능 구현 (Detail.js)
- 객실 및 추가 옵션 선택 시 useState로 선택 상태를 관리
- 선택된 옵션에 따라 가격 및 UI가 동적으로 변경
<br />
결제 버튼 클릭 시 결제 완료 화면 조건부 렌더링 처리 (Detail.js)
- React의 조건부 렌더링을 활용해 결제 프로세스를 구현
- 결제 버튼 클릭 시 상태값을 변경하여 결제 완료 화면을 표시
<br />



