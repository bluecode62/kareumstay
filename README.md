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
- 메인 홈페이지 (Home.js)
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

결제 버튼 클릭 시 결제 완료 화면 조건부 렌더링 & 예약저장 기능 (Detail.js)
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

<hr >

<h1>숙소 페이지 UI 및 컴포넌트 구조 설계</h1>

<img width="638" height="1042" alt="searchUI0102" src="https://github.com/user-attachments/assets/cfe2f284-c687-4dff-b44b-2b08d0647907" />
<img width="525" height="765" alt="SearchUI03" src="https://github.com/user-attachments/assets/f23e7609-a433-41f7-b4d7-fa5bd0a3c037" />
<img width="594" height="398" alt="ResultBar" src="https://github.com/user-attachments/assets/9a03edf7-156f-475f-98bb-3342c8ab0fc2" />
<img width="617" height="2124" alt="필터박스" src="https://github.com/user-attachments/assets/df032d06-6916-4232-8faa-b240c2fa214c" />
<img width="759" height="385" alt="숙소리스트" src="https://github.com/user-attachments/assets/5764114c-bf51-4a6d-babb-f718c2071bc3" />

Home 페이지에서 전달받은 예약 데이터(town, dateRange, guests)를
React Router의 location state를 통해 Search 페이지에서 받아
검색 조건 상태를 초기화했습니다.

Search 컴포넌트에서는 숙소 데이터를 기반으로
마을, 숙소 유형, 시설 조건에 따른 필터링 로직을 구현하고
가격순, 별점순, 리뷰순 등의 정렬 기능을 추가하여
사용자가 원하는 조건에 맞게 숙소 리스트를 조회할 수 있도록 설계했습니다.
또한 ResultBar, FilterBox, AccommodationList 등
기능 단위로 컴포넌트를 분리하여
데이터를 props로 전달하는 구조로 UI를 구성했습니다.

<hr >

<h1>map 기반 동적 리스트 렌더링 (rooms, experiences, reviews 등)</h1>
<img width="741" height="692" alt="디테일01" src="https://github.com/user-attachments/assets/21469fda-c22f-412a-8f19-3ff1b46bb2a2" />
<img width="530" height="1067" alt="디테일0203" src="https://github.com/user-attachments/assets/ab532eb4-b32e-4870-94e2-90ef04ac8380" />
<img width="620" height="591" alt="rooms" src="https://github.com/user-attachments/assets/65ed9b05-22f2-4f77-8049-e49a092b2ea8" />
<img width="639" height="1357" alt="experience0102" src="https://github.com/user-attachments/assets/6365b2a6-8493-4da7-98f5-76b3073e70c9" />
<img width="644" height="1475" alt="reviews0102" src="https://github.com/user-attachments/assets/7f5defad-ca21-45fa-a088-6eb9f3d9dd9c" />

Search 페이지에서 선택한 숙소 id와 예약 데이터(town, dateRange, guests)를
React Router의 navigate state를 통해 Detail 페이지로 전달했습니다.

Detail 페이지에서는 전달받은 id를 기반으로 숙소 데이터를 조회하고
해당 데이터를 여러 UI 컴포넌트(ImageGallery, BasicInfo, RoomList,
ExperienceList, ReviewList 등)에 props로 전달하여 페이지 구조를 구성했습니다.

객실 목록, 체험 프로그램, 리뷰 등 배열 형태의 데이터는
map()을 활용해 동적으로 렌더링하도록 구현했습니다.

사용자가 객실과 체험 프로그램을 선택하면 ReservationBox 컴포넌트에서
선택된 데이터를 관리하고 총 예약 금액을 계산하도록 설계했습니다.
또한 예약 데이터는 LocalStorage에 저장하여
사용자가 예약 정보를 유지할 수 있도록 구현했습니다.
<hr >

<h1>객실 선택 및 원데이 클래스 추가 옵션 기능 구현</h1>
<img width="492" height="211" alt="객실선택및원데이" src="https://github.com/user-attachments/assets/f2af1c88-a0b5-40f5-a81b-ee4632e514c9" /><br />
Detail 페이지에서는 객실이 선택되었을 때만 예약내역 컴포넌트가<br />
렌더링되도록 조건부 렌더링을 적용했습니다.<br />
<br />
selectedRoom 상태값이 존재할 때만 ReservationBox 컴포넌트를<br />
보여주도록 구현하여, 사용자가 객실을 먼저 선택한 후<br />
원데이 클래스와 같은 추가 옵션을 선택할 수 있도록 예약 흐름을 설계했습니다.<br />

<img width="635" height="1944" alt="예약박스010203" src="https://github.com/user-attachments/assets/bd29a432-d0d2-447c-a23d-232ffa45bcad" /><br />
ReservationBox 컴포넌트는 사용자가 선택한 객실과<br />
추가 옵션(원데이 클래스)을 기반으로 예약 정보를 관리하는 역할을 합니다.<br />
선택된 객실과 체험 프로그램 데이터를 props로 전달받아<br />
예약내역 UI를 구성하고, 총 예약 금액을 계산하여 표시하도록 구현했습니다.<br />
<br />
총 예약 금액은 선택한 객실 가격과 추가 옵션의 가격을 합산하여 계산하도록 구현했습니다.<br />
체험 프로그램은 배열 형태로 관리되기 때문에<br />
reduce() 함수를 사용해 전체 가격을 합산하도록 설계했습니다.<br />
<br />
<img width="522" height="263" alt="원데이클래스데이터" src="https://github.com/user-attachments/assets/c063baa6-8cd5-414d-ac95-eb311e4f7e0d" /><br />
<h5>원데이 클래스 데이터</h5>
<hr >

<h1>결제 버튼 클릭 시 결제 완료 화면 조건부 렌더링 & 예약저장 기능 </h1>
<img width="562" height="609" alt="결제박스01" src="https://github.com/user-attachments/assets/c999ef3c-02db-4d55-8fba-43f2241c555f" /><br />
<img width="463" height="243" alt="결제박스02" src="https://github.com/user-attachments/assets/6211ecd1-3d91-497e-a2e4-0499d62a81eb" /><br />
<img width="794" height="2110" alt="예약조회010203" src="https://github.com/user-attachments/assets/9b88b408-d73f-46f9-a235-5fb44ef92977" /><br />
<br />

📝 전체 흐름<br />
 1️⃣ 결제 확인 모달 + 결제 완료 페이지 이동 <br />
 2️⃣ 예약 데이터 LocalStorage 저장 <br />
 3️⃣ 예약내역 조회 / 삭제 / 결제 처리<br />


✏️ 결제 버튼 클릭 시 결제 확인 모달 구현<br />
: 예약내역 컴포넌트에서는 결제 버튼을 클릭하면<br />
결제 확인 모달이 나타나도록 구현했습니다.<br />
<br />
useState를 활용해 모달 상태(showConfirm)를 관리하고,<br />
사용자가 결제를 선택하면 결제 완료 페이지로 이동하도록<br />
React Router의 navigate 함수를 사용해 페이지 이동을 처리했습니다.<br />

```jsx
const [showConfirm, setShowConfirm] = useState(false);

<Pay onClick={() => setShowConfirm(true)}>결제하기</Pay>

/// 조건부 렌더링
{showConfirm && (
  <ModalOverlay>
```

✏️ 결제 완료 페이지 이동 기능 <br />
: 사용자가 결제를 확인하면 결제 완료 페이지로 이동하도록<br />
React Router의 navigate 함수를 활용해 라우팅을 구현했습니다.<br />
<br />
결제 완료 페이지에서는 결제가 정상적으로 완료되었다는<br />
메시지를 사용자에게 표시하도록 UI를 구성했습니다.<br />

```jsx
/// React Router 사용

navigate("/payment-complete");

export default function PaymentComplete()
```

✏️ 예약 정보 저장 기능<br />
: 예약 정보를 저장할 수 있도록<br />
객실 정보, 체험 프로그램, 지역, 날짜, 인원, 총 금액 등의 데이터를<br />
객체 형태로 구성한 후 LocalStorage에 저장하도록 구현했습니다.<br />
<br />
이를 통해 사용자가 페이지를 이동하거나 새로고침을 하더라도<br />
예약 정보를 유지할 수 있도록 했습니다.<br />

```jsx
/// 브라우저 저장소 활용
localStorage.setItem("reservation", JSON.stringify(reservationData));
```

✏️ 예약내역 조회 기능 구현<br />
: 예약내역 페이지에서는 useEffect를 활용해<br />
LocalStorage에 저장된 예약 데이터를 불러오도록 구현했습니다.<br />
<br />
저장된 데이터가 존재할 경우 예약 정보를 화면에 표시하고,<br />
데이터가 없는 경우에는 "예약 내역이 없습니다"라는<br />
예외 메시지를 표시하도록 처리했습니다.<br />

```jsx
/// 데이터 불러오기 
useEffect(() => {
  const saved = localStorage.getItem("reservation");
```

✏️ 예약 삭제 기능<br />
: 예약 취소 기능을 구현하기 위해<br />
LocalStorage에 저장된 예약 데이터를 삭제하고<br />
화면 상태를 초기화하도록 처리했습니다.<br />

```jsx
/// 데이터 상태 동기화
localStorage.removeItem("reservation");
setReservation(null);
```
<br />
예약 기능에서는 사용자가 선택한 객실과 체험 프로그램을<br />
기반으로 예약 데이터를 생성하고 LocalStorage에 저장할 수 있도록 구현했습니다.<br />
<br />
예약내역 페이지에서는 저장된 데이터를 불러와<br />
예약 정보를 조회할 수 있도록 했으며,<br />
예약 취소 시 LocalStorage 데이터를 삭제하도록 처리했습니다.<br />
<br />

결제 버튼을 클릭하면 결제 확인 모달이 나타나고,<br />
사용자가 결제를 확인하면 결제 완료 페이지로 이동하는<br />
예약 및 결제 흐름을 구현했습니다.<br />


트러블 슈팅🚀<br />
<br />
1️⃣ 체크인 날짜만 클릭하면 캘린더가 바로 닫히는 현상<br />
<br />
: 리액트 DayPicker로 숙박일정을 선택할 때 체크인만 클릭하면 캘린더가 바로 닫히는 문제가 있었습니다.<br />
처음에는 CSS 문제라고 생각하고 디버깅했지만, 원인을 찾지 못했습니다. 이후 dateRange 초기값이 없어서 발생하는 문제일 수 있다고 판단하고,<br />
초기값을 null 또는 적절한 범위로 설정하고, onSelect에서 from과 to가 모두 선택되었을 때만 캘린더가 닫히도록 수정했습니다.<br />
그 결과 체크인만 선택해도 캘린더가 유지되고, 체크인·체크아웃 범위가 모두 선택되었을 때만 자동으로 닫히도록 정상 동작하게 되었습니다.<br />

2️⃣ 메인 페이지(home.js)에서 선택한 숙박일정이 Search 페이지에서 유지되지 않는 문제<br />
<br />
: Home 페이지에서 선택한 마을, 숙박일정, 인원수를 Search 페이지로 전달했지만, 페이지가 렌더링되면 해당 값들이 유지되지 않고 초기 상태로 돌아가는 문제가 있었습니다.<br />
React Router로 페이지 이동 시 state를 통해 데이터를 전달하고 있었지만, Search 컴포넌트의 useState 초기값에 해당 값을 반영하지 않아 렌더링 시 상태가 초기화되고 있었습니다.<br />
그래서 상태가 계속 유지시킬 수 있게 location 상태이상을 사용하면 Home페이지에서의 데이터를 그대로 받아올 수 있게 되어 해결되었습니다.<br />




📍 Git Page 링크: https://bluecode62.github.io/kareumstay/
