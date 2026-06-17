# da-eun-park.github.io one-page CV website

이 템플릿은 GitHub Pages에서 바로 사용할 수 있는 한 페이지형 개인 학술/CV 사이트입니다.

## 파일 구조

```text
index.html              # 사이트 뼈대. 보통 수정하지 않아도 됨
site-data.js            # 여기에 내용만 계속 수정하면 됨
assets/style.css        # 디자인 수정 파일
assets/main.js          # site-data.js 내용을 화면에 그려주는 파일
files/                  # CV PDF, 논문 PDF 등을 넣는 폴더
```

## 가장 중요한 파일

대부분의 수정은 `site-data.js`에서 하면 됩니다.

예를 들어 이름, 이메일, 자기소개, 연구 관심사, 학력, 연구 프로젝트를 모두 `site-data.js` 안에서 고칠 수 있습니다.

## GitHub Pages에 올리는 방법

1. GitHub에서 새 repository를 만듭니다.
2. repository 이름을 정확히 `da-eun-park.github.io`로 설정합니다.
3. 이 폴더 안의 파일들을 모두 업로드합니다.
4. repository의 `Settings` → `Pages`로 이동합니다.
5. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
6. branch는 `main`, folder는 `/root`를 선택합니다.
7. 저장하면 사이트 주소는 `https://da-eun-park.github.io/`가 됩니다.

## CV PDF 추가하기

1. PDF 파일 이름을 `Da_Eun_Park_CV.pdf`로 바꿉니다.
2. `files` 폴더 안에 넣습니다.
3. `site-data.js`의 links 부분에 이미 연결되어 있습니다.

```js
{ label: "CV PDF", url: "files/Da_Eun_Park_CV.pdf" }
```

CV PDF를 아직 올리고 싶지 않으면 url을 빈칸으로 두면 됩니다.

```js
{ label: "CV PDF", url: "" }
```

## 사진 추가하기

1. 사진 파일을 `assets/profile.jpg`로 저장합니다.
2. `site-data.js`에서 photo를 아래처럼 바꿉니다.

```js
photo: "assets/profile.jpg",
```

사진을 넣지 않으려면 빈칸 그대로 두면 됩니다.

```js
photo: "",
```

## 섹션 숨기기

필요 없는 섹션은 빈 배열로 두면 자동으로 숨겨집니다.

예:

```js
publications: [],
teaching: [],
service: [],
```

## 디자인 색 바꾸기

`assets/style.css` 맨 위의 `--accent` 값을 바꾸면 포인트 색이 바뀝니다.

```css
--accent: #5b4b8a;
```

## 권장 수정 순서

1. `site-data.js`에서 이름, 소속, 이메일 수정
2. `bio` 자기소개 수정
3. `researchInterests` 수정
4. `education` 수정
5. 필요하면 `research`, `publications`, `experience`, `honors` 추가
6. GitHub에 commit
