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

숙소 페이지 UI 및 컴포넌트 구조 설계 (Search.js)
- 숙소 카드 컴포넌트를 분리하여 재사용 가능한 구조로 설계
- props를 활용해 숙소 정보 데이터를 전달

map 기반 동적 리스트 렌더링 (rooms, experiences, reviews 등) (Detail.js)
- map()을 활용해 컴포넌트를 반복 렌더링하여 데이터 기반 UI 구성

객실 선택 및 원데이 클래스 추가 옵션 기능 구현 (Detail.js)
- 객실 및 추가 옵션 선택 시 useState로 선택 상태를 관리
- 선택된 옵션에 따라 가격 및 UI가 동적으로 변경

결제 버튼 클릭 시 결제 완료 화면 조건부 렌더링 처리 (Detail.js)
- React의 조건부 렌더링을 활용해 결제 프로세스를 구현
- 결제 버튼 클릭 시 상태값을 변경하여 결제 완료 화면을 표시


<hr >

<h1>마을숙소 리스트, 예약일정 조회 등 구현</h1>

<img width="557" height="678" alt="숙소데이터01" src="https://github.com/user-attachments/assets/0698ea11-9a8d-4ce2-ab36-18d0df3e2d6b" />
<img width="477" height="330" alt="main03" src="https://github.com/user-attachments/assets/86befe8f-f09b-48bb-a0f1-39bf55af366a" />
<img width="675" height="488" alt="main04" src="https://github.com/user-attachments/assets/c44848bd-c2c9-485b-a326-a1508d92f28a" />
<img width="585" height="511" alt="main05" src="https://github.com/user-attachments/assets/99032851-a5a2-484a-b70a-f0e9321090f6" />

Home 컴포넌트에서 마을(town), 예약 날짜(dateRange), 인원 수(guests)
상태를 useState로 관리하고 ReservationBar 컴포넌트에 props로 전달했습니다.

ReservationBar에서는 전달받은 상태를 기반으로 마을 선택 드롭다운,
날짜 선택 캘린더, 인원 수 증감 기능을 구현하여 예약 조건을
설정할 수 있도록 구성했습니다.

검색 버튼 클릭 시 handleSearch 함수가 실행되며,
입력된 예약 정보를 React Router의 navigate state로 전달하여
Search 페이지에서 해당 조건을 기반으로 숙소 리스트를
조회하도록 구현했습니다.

또한 useEffect와 useRef를 활용해 드롭다운 및 캘린더
외부 클릭 시 자동으로 닫히도록 인터랙션을 처리했습니다.






