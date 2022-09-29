트위터 클론코딩 
firebase 이용하여 로그인 및 회원가입 기능 추가 <- 트위터 클론코딩 목적 (인프런 참조)

firebase 프로젝트 생성<br>
![image](https://user-images.githubusercontent.com/101313551/192989232-89993bdb-46ef-44f6-828d-1b18009249f7.png)<br>

firebase 초기설정<br>
![image](https://user-images.githubusercontent.com/101313551/192989441-b3315dce-6106-4395-b6c1-efd02f0188c7.png)<br>

회원가입 진행 코드 // 조건에 맞지 않을 때는 그 즉시 return 으로 최대한 컴퓨터 일 안하게 하기<br>
![image](https://user-images.githubusercontent.com/101313551/192989706-1641d487-e17a-4127-9121-1511ff6aa75e.png)<br>


로그인 기능<br>
![image](https://user-images.githubusercontent.com/101313551/192990134-e1ade735-1a3f-43c1-8c4c-523f31784a2f.png)<br>
로그인 기능의 경우 vuex로 항상 값을 보관하고 있어야 됨. 

여기서는 router.push가 아닌 replace 로 진행 뒤로가기해도 replace 값으로 진행됨
