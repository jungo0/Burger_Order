
# Burger Order

이 프로젝트는 React.js를 사용하여 햄버거 주문 및 결제를 처리하는 웹 애플리케이션입니다. 사용자는 편리한 UI를 통해 햄버거를 주문하고, 장바구니에서 주문 내역을 확인할 수 있습니다. 

# Stack




 <img src="https://img.shields.io/badge/npm-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
 <img src="https://img.shields.io/badge/nodedotjs-339933?style=for-the-badge&logo=yarn&logoColor=white">

 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">

 <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
 <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=yarn&logoColor=white">


 <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">

 <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">


<br>

 결제 기능을 통해 주문을 완료할 수 있습니다. <br>
 프론트엔드는 `React.js`로 개발되었고, 백엔드는 `Node.js`와 `Express.js`를 사용하여 구축되었습니다. 데이터는 `MongoDB`에 저장되며, 클라이언트와 서버 간의 통신은 `RESTful API`를 통해 이루어집니다. 
 사용자 경험을 향상시키기 위해 모달 창과 상태 관리를 효율적으로 처리하였습니다.
`Context API`를 사용하여 상태를 관리하고, 컴포넌트 간의 데이터 공유를 효율적으로 구현하였습니다.

<br>

# 웹페이지 

### 메인
<img src='src/assets/shopping.gif'><img width="1813" alt="burger1" src="https://github.com/jungo0/Burger_Order/assets/81670100/dbb8cb39-2a17-4251-a895-012b47f66784">
### 장바구니 추가
<img width="1827" alt="burge2_cart" src="https://github.com/jungo0/Burger_Order/assets/81670100/bc5d9475-df26-48a6-b5f0-7f14af8f1145">
### 장바구니 모달
<img width="1440" alt="burger3" src="https://github.com/jungo0/Burger_Order/assets/81670100/36db0835-182d-49c4-ade1-a810e0dd508a">

### 결제

<img width="1350" alt="burger4" src="https://github.com/jungo0/Burger_Order/assets/81670100/ad6dd30c-5ead-4ab9-bae6-661a28be3a65">

|
# 기능

1. 햄버거 주문 및 장바구니
- 사용자는 웹 앱을 통해 다양한 햄버거를 주문할 수 있습니다.
- 주문한 햄버거는 장바구니에 자동으로 추가되며, 수량을 조절할 수 있습니다.
- 사용자는 주문한 햄버거를 장바구니에서 확인하고 결제할 수 있습니다.

2. 결제 기능
- 사용자가 장바구니에 담은 햄버거를 결제할 수 있습니다.
- 사용자는 결제 시 이름, 이메일, 주소 등의 정보를 입력할 수 있습니다.
- 결제가 완료되면 해당 주문 정보가 서버에 전송됩니다.
