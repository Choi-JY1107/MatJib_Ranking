# How to Clone

1. 복사본 생성
    
    ```bash
    git clone https://github.com/Choi-JY1107/MatJib_Ranking
    ```
    
2. 폴더 이동
    
    ```bash
    cd MatJib_Ranking
    ```
    
3. 프론트는 frontend, 백엔드는 backend로 브랜치를 생성한다.
    
    ```bash
    git checkout -b frontend
    git checkout -b backend
    ```
    



# How to set Server

- 파이썬 버전 : 3.10.9
1. 가상환경 생성하기(가상환경 이름은 myvenv로 통일)
    
    ```bash
    python -m venv myvenv
    또는
    python3 -m venv myvenv
    ```
    
2. 가상환경 실행하기
    
    ```bash
    # 맥 OS
    source myvenv/bin/activate
    
    # 윈도우
    source myvenv/Scripts/activate
    ```
    
3. pip 업데이트 후 django 설치
    
    ```bash
    python -m pip install --upgrade pip
    pip install django
    ```
    
4. 패키지 일괄 설치
    
    ```bash
    cd backend
    pip install -r requirements.txt
    ```
    



# How to set React

- npm 버전 : 9.8.1
1. 패키지 일괄 설치
    
    ```bash
    cd frontend
    npm i
    ```
    
2. 페이지 빌드하기
    
    ```bash
    npm run build 또는 yarn build
    ```
    



# 연동하기 - 터미널 2개 사용

### 백엔드

```bash
cd backend
./auto_script
```

### 프론트엔드

```bash
cd frontend
npm start 또는 yarn start
```




# git push할 때 주의할 점
| "warning: LF will be replaced by CRLF in README.md." 경고문이 뜬다면
### Window
```bash
git config --global core.autocrlf true
```
### Linux, Mac OS
```bash
git config --global core.autocrlf input
```