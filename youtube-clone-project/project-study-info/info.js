/*
// ------------------------------- Youtube-clone-project -------------------------------


// ------------------------------- #1 INTRODUCTION -------------------------------

// ** NodeJS: 브라우저 밖에서 돌아가는(쓸 수 있는) 자바스크립트
// 90년대 자바스크립트는 브라우저에서만 사용됐었는데 웹사이트와 좀 더 상호작용 할 수 있도록 만들었음. Ryan Dahl은 NodeJS를 만들어서 자바스크립트를 웹 말고도 다른 곳에서도 사용하고자 하였고 구글 크롬에서 자바스크립트를 꺼내서 NodeJS를 사용할 수 있게 됌. 전에는 자바스크립트와 다른 것으로 김치전처럼 HTML, CSS, 브라우저와 섞여서 만들었는데 자바스크립트를 브라우저에서 분리해서 NodeJS를 만듬. NodeJS를 만들고 난 후, 브라우저에서 Python, Java, C처럼 프로그래밍 언어로 만드니깐 백엔드를 만들 수 있고, 파일 이름을 바꿔서 스크립트도 만들 수 있고, 이미지 처리 등을 할 수 있게 되었고 다른 프로그래밍 언어들처럼 쓸 수 있게 됌. NodeJS는 브라우저 바깥에서 쓸 수 있는 자바스크립트이다. VSCode에서 node 명령어를 치면 console.log("hi') 처럼 다양한 명령어를 구글 크롬 콘솔에서 사용하듯이 가능하다. NodeJS 덕분에 React Reactive도 사용하고 Electron도 사용할 수 있게 됌. -> chromium과 NodeJS 덕분이다. VSCode는 HTML, CSS, Javascript, Electron등으로 만들어짐. React Native로는 JS와 ReactJS를 사용해서 안드로이드, iOS 앱을 만들 수 있게 되었다. NodeJS 덕분에 ReactJS 같은 것도 쓸 수 있게 되었다. NodeJS가 자바스크립트로 컴파일 해주기 때문이다.


// NPM
// npm 은 자바스크립트 프로그래밍 언어를 위한 패키지 관리자이다.
// 자바스크립트 런타임 환경 Node.js의 기본 패키지 관리자이다.
// https://www.npmjs.com/

// node -v: node 버전 확인
// npm - v: npm 버전 확인

// ------------------------------- //#1 INTRODUCTION -------------------------------


// ------------------------------- #2 SET UP -------------------------------

// # 2.0
// 프로젝트 폴더에 package.json 파일을 생성해서 시작한다.
// json은 파일에 정보를 저장하는 방식 중 하나이다.
// 작성법은 다음과 같다.
// {
// "이름" : "내용"
// }
// Json은 키값을 항상 가지는 것이 해시와 비슷해 보인다.
// 다음은 git init 명령어를 입력한다.
// github에서 새 repository를 만든 후 경로를 복사한뒤 터미널에 git remote and origin '경로' 를 입력한다.
// 이제 git과 연결될 것이고, git은 파일의 변화를 감지하는 프로그램을 의미한다.
// 이후 npm init을 터미널에 입력한다.
// npm init은 package.json의 작성을 도와준다.
// main은 프로젝트의 대표파일을 의미한다.

// # 2.1 Installing Express
// (1) node js파일명 --> 이 방법으로도 js파일을 실행시킬 수 있다
// (2) 이번 프로젝트에서는 package.json으로 실행 해 줄것이다
// (3) package.json 안에 main --> 내가 만들고 배포한 package를 다른 사람들이 설치하면 main을 사용한다(이번 프로젝트에서는 필요없음)
// (4) package.json 안에 scripts를 만들어 준다
// (5) scripts 는 실행하고 싶을 것을 말한다 즉, scripts안에 실행할 것을 적어준다
// ex) scripts={
// "start": "node index.js" // 이름은 자유롭게 지어줄 수 있다
// }
// (6) 그 후 npm run start 로 실행시킬 수 있다(start란 변수 이름으로) // package.json이 존재하는 폴더 한정
// (7) npm install express 로 Express 패키지를 다운로드 받는다
// (8) node_modules, package-lock.json 파일이 생성된다
// (9) node_modules 에는 npm으로 설치한 모든 패키지가 저장된다
// (10) express 는 혼자 작동되지 않기에 다른 패키지가 필요하다
// (11) node_modules 안에 express 안에 존재하는 package.json안에 dependencies는 express가 작동되기위해 필요한 패키지들을 나타낸다
// (12) express를 설치하는데 의존하고 있는 패키지가 있기 때문에 npm i express를 하면 그것들도 함께 설치된다
// (13) npm i express 를 했을 때 npm 이 알아서 dependencies에 express를 추가해준다

// # 2.2
// package.json에는 author, license, bugs 같은 정보도 존재하지만, 우리 프로젝트를 동작시킬 때 필요한 모듈들이 어떤 건지를 정보를 담고 있다. npm이 package.json을 보고 필요한 걸 설치할테니깐 좋은 기능이다.
// 왜냐하면 만약 팀으로 nodeJS를 사용하거나 컴퓨터를 사용한다면 node_modules을 github에 넣을 필요가 없다. 
// node_modeuls 폴더를 보낼 필요 없이 dependencies를 알려주면 되는데, 그러면 npm i만 세팅해서 node_modules가 자동적으로 다운 받아짐으로 package.json만 있으면 npm i을 하면 되니깐 필요한 정보는 dependencies내에 있으므로 pakcage.json이 얼마나 중요한 지 알 수 있는데 방금처럼 모듈들을 설치하면 된다.
// package-lock.json은 패키지들을 안전하게 관리해주는데 패키지가 수정 됐는지 해시값으로 체크해주면서 안전함으로 말그래도 잠겨 있는데 만약 프로젝트가 package.json으로 작동하는데 package.json으로 express을 쓴다면 pakcage.json, package-lock.json, index.js를 주고서 npm i를 하면 그 사람도 똑같은 버전의 모듈을 설치한다고 생각하면 된다.
// 코드가 획실하게 동작한 다는 뜻으로 fresh라는 패키지의 0.5.2 버전을 설치한다고 해보면, 말 그래도 딱 그 버전이 설치되면서 debug, encodeurl, statuses도 딱 그 버전으로 설치되면서 관리할 필요가 없어진다.npm이 알아서 처리해주기 때문이다.
// dependencies가 있기 때문에 npm i하면 알아서 dependencies에 해당 모듈을 설치하면서 node_modules 폴더가 굳이 github에 필요없으므로 .gitignore를 설정해서 /node_modules를 넣어주자. 
// package.json이 열려있고 뭔가 수정을 했는데 저장을 하지 않은 상태에서 npm i express를 수정하면 npm이 package.json의 dependencies를 수정하는데 저장을 안해씩 때문에 버전이 충돌하면서 npm install 할 때는 package.json을 꼭 닫고 실행해야 한다. npm이 자동으로 package.json을 수정한다. 
// 지금은 dependencies가 프로젝트를 구동시키는 데 필요한 모듈들이란 것만 잘 기억하면 된다. 다른 사람들한테 node_modules 폴더를 보낼 필요가 없다. 그냥 이 파일만 가지고 'npm i'을 하면 npm이 dependencies에 있는 모든 것들을 설치해준다. 

// #2.3
// NodeJS에서 필요한 babel설치
// npm install --save-dev @babel/core
// npm install @babel/preset-env --save-dev

// babel.config.json파일 생성
// ```
// {
// "presets": ["@babel/preset-env"]
// }
// ```
// https://babeljs.io/setup#installation

// @babel/preset-env
// @babel/preset-env는 환경에 필요한 구문 변환을 세부적으로 관리할 필요 없이 최신 JavaScript를 사용할 수 있게 해주는 스마트한 preset입니다.
// https://babeljs.io/docs/en/babel-preset-env

// devDependencies나 그냥 dependencies나 node_modules에 설치된다는 점은 모두 같다.
// 의미적으로 구분하는 차이만 있다.
// dependencies는 프로젝트에 필요한 package라는 것을 알려준다.
// devDependencies는 개발 상의 이점을 위한 package라는 것을 알려준다.


// #2.4
// * nodemon 패키지를 설치하여 실시간으로 수정된 사항을 확인 할 수 있다.
//   "dev": "nodemon --exec babel-node src/server.js" -->  nodemon --exec 를 사용하여 실시간으로 변경된 사항을 확인 할수 있다.



// ------------------------------- //#2 SET UP -------------------------------


// ------------------------------- ##3 INTRODUCTION TO EXPRESS -------------------------------

// *서버 만들기* --> 서버(현재 서버 만든거는 로컬 컴퓨터)와 DB는 다른것!!

// #3.0
// import express from "express"; <-- express를 import하여 선언 해준다
// const app = express(); <-- express()으로 만들어준다
// app.listen() <-- callback 함수가 있음 port 넘버를 설정하며, 서버가 실행 됬을때 실행되는 함수를 넣어준다.
//  - ex) app.listen(4000, handleListening);
// *port --> 윈도우의 문이나 창문 같은 역할
//  - port = 4000 사용하는거는 백엔드 관습, 숫자가 높아질수록 사용하지 않는 포트가 많아짐

// #3.1
// Cannot GET / --> / 이거는 '페이지'를 말하는거 ex) google.com === google.com/
// GET = HTTP method (get this page) 
// http는 서버와 소통하는 방식이다
// 브라우저는 나를 대신해서 웹사이트를 request(요청)하고, 페이지를 가져다 주는것
// - '/'는 root를 의미한다.
// - get은 http method다.
// - http는 우리가 서버와 소통하는 방식이다.
// - http request는 말하자면 웹사이트에 접속하고 서버에 정보를 보내는 방법이다.
// - 웹사이트를 접속할 떄 브라우저가 나를 데려오는게 아니다 브라우저가 나를 대신하여 웹사이트를 request하고 페이지를 가져다 주는 것이다.
// - 즉 get은 페이지를 가져오란 뜻이다.

// #3.2
// const app = express();
//  --> express() 선언하고 다음 그 밑으로 코드를 작성해야함
// * request --> 브라우저가 get request를 보내는거(get request네는 route가 있음) / 유저가 뭔가를 요청하거나, 보내거나, 네게 무슨 행동을 한다, 누군가가 무언가를 달라고 하는것, 사용자가 요청하는거에 대한 정보, 서버에서 데이터를 가져오고자 요청 하는거
// app.get(1."/",2.() => ) --> 1. "/" (root page로 get request를 보냄), 2. 함수를 호출 하는건데 function()이 꼭 들어가야함.

// #3.3
// app.get("/",() => ) ---> "/" > route 라고 함
// route는 아래와 같이 이벤트 호출하는 인자를 갖고 있으며, 함수를 호출 해서 사용한다고 생각하면 된다.
//  - const handleClick = (event) => {};
//  - button.addEventListener("click",handleClick)

// * express에서는 아래와 같이 인자값이 존재한다. ex) const handleClick = (req, res) => {} / req,res 인자 명은 다르게 사용 가능, 
//  * 꼭 인자값 2개를 넣어서 사용 해야 한다. *
//  - 첫번째는 : request(req) object --> 브라우저가 request(요청) 하는거
//  - 두번째는 : response(res) object --> 개발자가 response(응답) 해주는거
// ex) handleClick({...},{...}) 풀어 쓰면은 --> handleClick(request object, response object)가 들어간다

// 브라우저가 request(요청) 하고서, 끝내는 방법 중에는 res.end(), res.send()를 사용하여 마무리 지을수 있음.
// * const handleClick = (req, res) => res.end(); --> {} 없는 한줄 사용은 return이 내포되어 있어, return이 없어도 가능하다.
// ex) const handleClick = (req, res) => {
//   1. return res.end();  --> end는 바로종료
//   2. return res.send("I still love you");  --> send는 추가하고 종료
//   3. return res.send("<h1>love you</h1>>");  
//  }

// const handleHome = (req,res) => {
//   return res.send("I still love you")
// };

// const handleProtected = (req,res) => {
//   return res.send("Welcome to the private lounge.")
// };

// ex)
// - app.use(logger);
// - app.use("/",rootRouter)
// - app.get("/", handleHome);
// - app.get("/protected",handleProtected);


// #3.5
// middleware --> 중간에 있는 소프트웨어 / request & response 사이에 있는것 / use(""), get("") 함수에서 사용 가능
//  - (req, res, next) 함수 3개 필요 *next 함수를 사용함(middleware가 아닌 마지막 함수는 next() 함수 사용x)
//  - 다음 함수로 넘기는 함수
// middleware = controller
//  - ex) const handleClick = (req, res, next) --> next라는 함수가 있는데, 함수가 끝나고 *꼭* next() 함수를 실행해주는거다. 
//  - ex) app.get("/", next가 실행할 함수들, handleHome)
// middleware 

// #3.6
// app.use() = *global middleware를 만들수 있게 해줌, *어느 URL에서도 작동할수 있음
//  - ex) app.use()
//  - use() --> get() 순서대로 해야 함
//  - use()인 middleware를 사용하면 모든 route(페이지)에서 실행됨
// * ex) middleware 를 직접 만든거

// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`)
//   next();
// }

// const privateMiddleware = (req, res, next) =>{
//   const url = req.url;
//   if(url === "/protected"){
//     return res.send("<h1>Not Allowed</h1>");
//   }
//   next();
// }

// app.use(logger);
// app.use(privateMiddleware)


// # 3.11
// * npm i morgan / morgan = middleware / morgan 이 더 정교하다 -->
//   - morgan("dev") - GET, Path, Status code, 응답시간을 콘솔 로그로 보여준다.
// * morgan(" ") --> combined, common, dev, short, tiny 설정하는 함수값에 따라 출력 되는 로그 값이 다름.
// morgan 패키지는 node.js 서버로 구성된 웹 환경에서 HTTP request 로그를 관리하기 위한 미들웨어이다.
// - morgan은 node.js용 request logger middleware다.
// - morgan 함수는 middleware 를 return 해준다.
// - morgan 함수를 불러오면 5개의 옵션이 있다.
// - morgan은 우리가 만든 logger 함수보다 정교하다. (GET, path, status code, 등 모든 정보를 갖고 있다.)


// ------------------------------- //#3 INTRODUCTION TO EXPRESS -------------------------------


// ------------------------------- #4 ROUTERS -------------------------------

// # 4.0
// *router --> 미니 어플리케이션
// router = handler나 url을 좀 더 관리하기 쉽게 해주는 기능
//  - 작업중인 주체를 기반으로 URL을 그룹화해준다.
//  - ex) /users/edit, /users/delete etc ...
//  - /videos/edit, /videos/delete etc...
//  라우터를 만들기 전에 플랜을 적어두고, 가장 좋은 방법은 직접 만들어보고 프로젝트에 적용해보는거, 어떤 종류의 데이터를  이용할것인가 ex) Wetube -> 유저, 동영상 두개의 데이터

// # Wetube Reloaded --> 라우터

// - 글로벌 라우터 -
// / -> Home
// /join -> join
// /login -> login
// /search -> search
// - 글로벌 라우터 -

// /users/edit -> Edit user
// /users/delete -> Delete user

// /videos/watch -> Watch Video
// /videos/edit -> Edit Video
// /videos/delete -> Delete Video
// /videos/comments -> Comment on a video
// /videos/comments/delete -> Delete A Comment of a Video

// Router
// 모든 Express 애플리케이션에는 앱 라우터가 내장되어 있습니다.
// 라우터는 미들웨어 자체처럼 작동하므로 app.use()에 대한 인수로 또는 다른 라우터의 use() 메서드에 대한 인수로 사용할 수 있습니다.
// 최상위 익스프레스 객체에는 새로운 라우터 객체를 생성하는 Router() 메서드가 있습니다.
// https://expressjs.com/ko/4x/api.html#router

// # 4.2 ~ 4.3
// *각 라우터 js에서 다른 js에 변수,함수,객체,원시 등을 넘겨주기 위해서는 export를 한다

// * export default 함수명; --> 사용하여 넘겨준다
//  - 모듈에서 하나의 값만 export한다면 default 키워드를 사용할 수 있다.
//  - default 키워드를 사용하는 경우 하나의 값을 export 한다
//  - export default로 모듈을 내보낸다면 export한 이름과 상관없이 원하는 이름으로 import가 가능하다.

// * export
// 한 모듈 안에 여러 가지를 export하는 경우에는 export
// * 변수, 함수, 클래스를 하나의 객체로 구성하여 export
//   - export {name, sayHello, Person};
//   - export const name = ""; 

// * import시 모듈이 export한 이름으로 import해야 한다. (함수명과 동일하게 사용 해야함)
//  - const name = ""; --> name 이라는 함수명과 import 하는 함수명이 동일해야 하며, {} 안에 객체로 넣어줘야함
//  - import {name, sayHello, Person} from './test.js'
//  - import * as test from './test.js'
//  - import {name as myName, sayHello(), Person} from './test.js'

// - import {name, sayHello, Person} from './test.js' 여기서 . <-- 하나 찍는 이유
// * 상대 경로 (Relative Path):
// .: 현재 디렉토리
// ..: 부모 디렉토리
// 예시: ./module.js, ../module.js
// 상대 경로를 사용하면 현재 파일의 위치를 기준으로 다른 파일을 가져올 수 있습니다. 예를 들어, 현재 파일과 동일한 디렉토리에 있는 module.js 파일을 가져오려면 다음과 같이 작성합니다:

// # 4.7
// ex) userRouter.get("/:id", seeUser);
// : --> 파라미터라고 한다.
// * url 안에 변수를 포함시킬 수 있게 해준다.
// 변수 url를 만들거면은 필수로 ' : '<-- 가 들억가 줘야 한다.
// /:id --> url에 변수값을 넣어 줄 수 있게 해준다
// id --> 변수명
// : --> /:id id가 변수라고 인식하게 해줌
// express는 리퀘스트 오브젝트에 이 파라미터를 보내준다.

// ex)
// videoRouter.get("/upload", upload) <--- **
// videoRouter.get("/:id", see)
// videoRouter.get("/:id/edit", edit)
// * 여기서 /upload를 위에 쓴 이유
//   respond 를 받아올때 /:id 의 변수 중 하나라고 인식하기 때문이다

// # 4.8
// express 라우팅 --> ex) (/ab*cd) --> ab 와 cd 사이에 아무거나 들어와 도 된다.
// * 정규식 --> 문자열로부터 특정 정보를 추출해내는 방법, 정규식은 모든 프로그래밍 언어에 존재
// * --> 아무거나 포함
// ? --> 선택사항 ()? - 괄호안에 있는 내용을 선택해서 넣어도 되고 안넣어도 되고
// + --> ab+c 라고 하면 abc, abbc, abbbc 등 b 를 여러개 가능

// ex) 숫자만 url에 들어간 주소에만 함수 실행하고 싶을때
// videoRouter.get("/upload", upload)
// videoRouter.get("/:id(\\d+)", see)
// videoRouter.get("/:id(\\d+)/edit", edit)
// videoRouter.get("/:id(\\d+)/delete", deleteVideo)
// (\\d+) --> 하나 이상의 연속된 숫자를 찾아서 캡처 그룹으로 묶는 정규식
// ** 
// **** :id(\\d+) --> id를 붙인 이유는 이름을 붙이기 위해서 (컨트롤러에서 필요)
// req.params.id --> 이런식으로 이름을 붙여서 사용 하기 위해

// Routing
// https://expressjs.com/ko/guide/routing.html

// 정규표현식 테스트 사이트
// https://www.regexpal.com

// \w+: 모든 문자, 숫자 선택
// \d+: 모든 숫자 선택


// ------------------------------- //#4 ROUTERS -------------------------------



// ------------------------------- #5 TEMPLATES -------------------------------


// # 5.1
// ** Pug **
// Pug는 Haml의 영향을 많이 받은, Node.js 및 브라우저용 JavaScript로 구현된 고성능 템플릿 엔진입니다. Pug는 이전에 "Jade"로 알려졌습니다. 그러나 "Jade"가 등록상표임이 밝혀져 이름을 변경했습니다.
// npm i pug
// https://www.npmjs.com/package/pug

// Express와 함께 템플리트 엔진을 사용
// Express가 템플리트를 렌더링하려면 다음과 같은 애플리케이션 설정이 필요합니다.
// views, 템플리트가 있는 디렉토리. 예: app.set('views', './views')
// * view engine, 사용할 템플리트 엔진. 예: app.set('view engine', 'pug')
// https://expressjs.com/ko/guide/using-template-engines.html

// Application Settings (Express어플리케이션 설정)
// https://expressjs.com/ko/4x/api.html#app.use

// 헤더에서 Express를 없애는 방법:
// app.disable('x-powered-by');

// console.log(process.cwd()) --> process.cwd() 현재 작업중인 디렉토리를 콘솔로그로 출력해줌
// * 현재 디렉토리가 파일 위치와 다른 이유는 node.js를 실행하는 package.json위치를 기준으로 잡고 있어서 코딩 하는 파일 위치와 다른 것
// app.set("view engine", "pug"); --> pug 템플리트 설정
// app.set("views", process.cwd() + "/src/views"); --> 템플리트 경로 설정
// res.render("watch"); --> render 속성으로 ("파일명") 파일명과 동일한 이름으로 넣어준다.

// # 5.2
// 랜더하는 파일명은 소문자여야 하고, 띄어쓰기를 사용하지 않는다!
// pug 파일에서 자바스크립트를  #{} (변수 사용)를 사용하여 사용할 수 있다. ex) #{new Date().getFullYear()}
// * 속성에는 #{}를 사용할 수 없다. 속성에는 `${}` 백틱을 사용해야 한다
// 자바스크립트 코드는 유저가 보기전에 평범한 텍스트로 변환된다 그게 '렌더링' 이라고 한다.
// include --> 다른 파일을 포함 시킬수 있다.

// # 5.3
// inheritance --> 상속 개념으로 베이스를 만들어준다. 레이아웃, html 등의 베이스라고 한다.
//  ex) layout.pug / base.pug 
// * extends(확장) --> ex) extends base.pug
// * block --> 템플릿의 창문, 문 같은거, 무언가를 집어 넣을수 있는 공간

// ex) block content --> 블럭을 넣을 곳에 'block content' 라고 작성한다.(content 변수는 다르게 써도 무방)

//     block content
//      h1 watch video  --> 이렇게 2줄로 작업하여 수정한다
// 속성인 () 괄호 안에 선언한다
// ex) link(rel="stylesheet" href="https://unpkg.com/mvp.css")

// # 5.4
// pug를 렌더링해주는건 controller!
// render("")는 2개의 argument를 받는다. --> ex) render("home",{pageTitle: "Home", potato: "tomato"})
//  1. 하나는 view --> "home"
//  2. 다른 하나는 템플릿에 보낼 변수! --> {pageTitle: "Home"}
// ** 템플릿에 변수를 생성하는법 #{} --> ex) title #{pageTitle} | Wetube 

// # 5.6
// MVP CSS --> 기본 style 잡아줌
//  - link(rel="stylesheet" href="https://unpkg.com/mvp.css")


// # 5.7
// * =변수명 --> 이렇게 적는 이유는 하나의 텍스트를 변수로 보여줌(다른 텍스트와 섞지 않음)
// ex) h1=pageTitle , h1 #{pageTitle} 이거 두개는 같지만 #{} 붙이는거는 다른 텍스트와 섞어서 사용할 수 있음 
// * 객체 리터럴 축약속성(es6) --> 객체를 정의할 때 속성의 이름과 변수의 이름이 같으면, 속성 값을 할당할 때 name: name 대신 name으로 축약할 수 있습니다.
// ex) 변수명:변수명 === 변수 같음
// ES5 방식)
// const person1 = {
//   name: name,
//   age: age
// };

// // ES6 방식 (축약 속성 사용)
// const person2 = {
//   name,
//   age
// };

// * Conditionals (조건문)
// if fakeUser.loggedIn
// li
//   a(href="/logout") Log out 
// else
// li 
//   a(href="/login") Login


// # 5.8
// * Iteration (반복문) --> '아이템' 변수를 지정, '아이템들 변수' 객체를 변수로 선언한 변수명
//  --> each '아이템(단수)' in '아이템들 변수(복수) --> list 여야 한다.(Array 배열)'
//       li='아이템'
// --> * pug 에서는 each 문에서 if문 처럼 else를 사용할수 있다. *
// each 문의 리스트(배열)값이 빈값 이거나 length가 0 이면 else를 실행 시킴

// ex)
// const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
// return res.render("home", {pageTitle:"home",videos})
//     ES5 <-- videos:videos === videos --> ES6(축약 속성 사용)
// return res.render("home", {pageTitle:"home",videos:videos})

//    ul
//      each video in videos
//        ll=video


// ex)
// const videos = [
//  {
//    title: "hello"
//  },
//  {
//    title: "video #2"
//  },
// ];  
// return res.render("home", {pageTitle:"home",videos})

//    ul
//      each video in videos
//        ll=video.title
//      else
//        Sorry nothing found.


// # 5.9
// * mixin --> 데이터를 받을 수 있는 partial, mixin은 똑똑한 partial 이다.
// * mixin 에서는 +mixin변수명(인자값) 이렇게 선언할수 있다.
// * mixin을 파일을 다시 include 해서 연결 시켜줘야 한다.
//   - ex) include mixins/video

// - ex)
//  each potato in videos
//    +video(potato)

// ------------------------------- //#5 TEMPLATES -------------------------------




// ------------------------------- #6 MONGODB AND MONGOOSE -------------------------------

// # 6.0
// #{}는 텍스트에 사용하며 속성에는 사용할수 없음, 속성에서 사용할려면 `${}` 백틱을 사용해야 함.
// const id = req.params.id; === const { id } = req.params; --> ES6 문법

// # 6.1
// URL
// * url 설정 제일앞에 / 가있으면 절대경로(absolute), 없으면 상대경로(relative)로 현재 url에서 뒤에 주소가 붙는다.
//  현재 나의 url - localhost:4000/videos
//  - a(href="/edit") ---> localhost:4000/edit
//  - a(href="edit") ---> localhost:4000/videos/edit
//  - a(href=`${video.id}/edit`) ---> localhost:4000/videos/1/edit

// # 6.2
// form - action="" 속성 (데이터를 전송을 위한 값), (기본값은 현재 url)
//  - action은 너가 가게될 서버 주소이다. 그 값은 url이 된다.
//  - 너의 서버가 가져야 하는 url, url 값
//  - 값 작성시 지정된 url로 값이 들어감
// form - method="" 속성  (기본 GET)
//  - 서버로 전송하는 방법을 지정해주는 속성
//  - GET, POST 두개의 속성 값이 있음
//  - GET --> 파라미터가 주소창에 나오는 방식(눈으로 확인 가능)
//    --> input 등 name 값도 같이 url에 입력 되어짐
//    ex) input name="nameTitle" -> url : 액션 값?nameTitle=인풋의 밸류값
//  - POST --> HTTP 프로토콜의 body에 파라미터가 넘어가는 방식(눈에 보이지 않아 보안성이 유지됨)
//    --> 파일을 보내거나, database에 있는 값을 바꾸는 값을 보낼때 사용.
//    --> 로그인, 회원가입, 글 작성, 파일 업로드 페이지 등에 주로 사용됨.

// # 6.3
// router에서 get(),post()를 두줄이 아닌 한줄로 사용하기 위한 방법 --> route() 사용
// ex) 두개
//  - 변수명.route("url 주소").get(함수명).post(함수명);
// redirect() --> 브라우저가 redirect(자동으로 이동) 하도록 하는것

// get - 접근
// post - 전송
// redirect - 다시보내다
// parameter - 매개변수
// express는 form으로 보낸 데이터를 읽지못함

// ** req.body
//  - req.body에는 form을 통해 submit된 데이터의 키-값 을 쌍으로 포함합니다.
//  - 기본적으로는 undefined이며 express.json() 또는 express.urlencoded()와 같은 바디 파싱 미들웨어를 사용할 때 값을 받아옵니다.
//  - input에 name 속성 값이 없으면 req.body 데이터를 받아오지 못함.
//  - input의 name 값이 title 일 경우에 --> req.body.title 또는 { title } = req.body 라고 선언 가능
// routes를 사용하기 전에 middleware를 사용해야 함
// middleware -> form 을 해석하고 -> 자바스크립트로 변형 시켜 사용 할수 있게 되는거
// ex)
//  - app.use(express.urlencoded({extended: true}))
//    --> express application가 form의 value들을 이해할 수 있도록 하고, 자바스크립트로 변형 시켜줌

// # 6.7
// MongoDB --> document-based(문서 기반)
// MongoDB 다운로드 사이트
// https://docs.mongodb.com/manual/installation


// # 6.8
// Mongoose --> node.js와 MongoDB를 이어주는 다리
//  - 터미널에서 mongod 명령어 입력하여 설치가 잘되어 있는지 확인
//  - mongodb 실행방법 
//    터미널 -> brew services start mongodb-community@7.0 -> mongod -> mongosh
// Event 차이점
// * on --> 여러번 계속 실행시킬 수 있다. (클릭 이벤트 같은 거)
// * once --> 오로지 한번만 실행 됨.
//
// 페이지에서 생성, 편집, 읽기, 삭제 하는 방식윽 CRUD 라고 한다
// C - Create(생성)
// R - Read(읽기)
// U - Update(수정)
// D - Delete(삭제)

// # 6.10
// * mongoDB에서는 _ID를 자동으로 생성해준다! --> mongoose에서 _ID를 string으로 변환해서 id를 만들어줌
// * Schema --> 정의 할때 자동으로 '_id' 생성 되어짐
// * model의 형태를 정의 할때 Schema(데이터베이스의 구조와 제약조건에 관해 전반적인 명세를 기술한 것)라고 한다.
//  - 개체의 특성을 나타내는 속성(Attribute)과, 속성들의 집합으로 이루어진 개체(Entity), 그리고 개체 사이에 존재하는 관계(Relation)에 대한 정의를 포함하여, 이들이 지켜야 할 제약 조건을 기술한 것.
//  - 물리적인 장치로부터 논리적인 데이터 베이스 레코드(data base record)를 매핑(mapping)하는 데 사용되는 정의 정보를 말한다. 즉 쿠키틀 이라고 보면 될거같네요..!

// ex)
//   - 데이터의 형식과 형태가 어떻게 구성 될지 잡아주는거, 테이터의 형식을 정의
// const videoSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   createdAt: Date,
//   hashtags: [{ type : String}],
//   meta: {
//     views :Number,
//     rating :Number,
//   },
// })
//   - model 이름과, 테이터의 형태인 schema를 설정
// const Video = mongoose.model("Video", videoSchema);
// ==> 여기서 "Video" <- 이거는 DB에 저장할 객체 이름을 정하는것
// * String.split() ---> split() 단어를 지정된것으로 지정할시 단어 별로 배열을 만들어 낸다.
// ex) genres.split(",") 일시에 , 를 기준으로 단어를 끊어 배열로 지정함.

// # 6.11 ~ 12
// --- Mongoose 6.0 버전 이상에서는 Model.find() 함수가 더 이상 콜백 함수를 지원하지 않습니다. ---
//  database 는 javascript 밖에 존재하기 때문에 여러가지 상황이 발생할 수 있어, 기다림이 필요함
//  * mongoose의 model에 find()는 두가지 사용 방식이 있다.
//      - callback 함수, promise
//  * callback --> 무언가가 발생하고 난 다음 호출 되는 function
//  ex) app.listen(PORT, handleListening); --> PORT 변수가 실행되고, handleListening 함수 호출
//  * find(); --> mongoose에서 검색 함수
//    - find({},) --> {} 중괄회안에 값이 비어 있으면 모든 형식을 찾는다는 뜻
//    - find({},(err,document) => {}) --> (err,document) err,document를 수신하는 function이 생기는데 안에 값은
//      이름은 바꿔도 상관 없음 > (error,videos)
//    ex) 
//    const 이벤트 함수명 = { consol.log(error), console.log(document) }
//    * find({},(err,document) => {}) = find({}, 이벤트 함수명) 두개는 같다
//    req,res 보다 늦게 실행 됨

// # 6.13
// mongoDB 와 상호 작용 하기 위해 사용 --> callback(이제 사용x) / async, await 
// * promise --> callback 함수와 다르게 실행 순서에 영향을 주지 않는다.
// * async, await 
// try 실행 오류 시에 --> catch 실행
// } catch(error) {
    return res.render("server-error", {error})
   } -->  처럼 error 메세지를 받을 수 있음.

// callback function 의 장점은 에러들을 바로 볼 수 있다는것
// 하지만 js의 단점은 기다리는 기능이 없어서 아무리 위에서 아래로 읽어도 database에서 불러오는 시간이 있어서 순서가 꼬인다 그래서 callback function을 썼었다.
// 하지만 await,async가 생기면서 달라졌다!!

// * await는 database에게 결과값을 받을때까지 js가 기다리게 해줄 수 있다..!!
// * await,async의 장점은 매우 직관점이라는것 즉 js 가 어디서 어떻게 기다리는지 알 수 있다
// * await는 규칙상 function이 async 상태일때만 안에서 사용 가능!
// 하지만 callback function과 달리 promise방식은 error 가 어디서 오는지 명확하지가 않다
// 그래서 try catch 방법을 쓴다
// 말그대로 try 안에 있는 코드를 실행해보고 오류가 생기면 catch 안에 코드가 실행되는구조

// 핵심 코드
// video.find({}, (error, videos) => {
//  if(error){
//    return res.render("server-error")
//  }
//    return res.render("home")
// });

// ===same thing

** promise **
// export const home = async (req, res) => {
//  try {
//    const videos = await video.find({});
//    return res.render("home", { pageTitle: "Home", videos });
//  } catch {
//    return res.render("server-error");
//  }
// };

// # 6.14
// 1. return의 역할 : 본질적인 return의 역할보다는 function을 마무리짓는 역할로 사용되고 있음.
//  - 이러한 경우 return이 없어도 정상적으로 동작하지만 실수를 방지하기 위해 return을 사용
// 2. render한 것은 다시 render할 수 없음
//  - redirect(), sendStatus(), end() 등등 포함 (express에서 오류 발생)

// # 6.15
// map() --> 배열을 변환하거나 매핑할 때 유용하게 사용.
// - map() 메서드는 배열의 각 요소에 대해 주어진 함수를 실행하고 그 결과를 모아서 새 배열을 반환합니다.
// - 변환 함수는 각 요소에 대해 실행되며, 해당 요소를 수정하여 새로운 값을 반환합니다.
// - map() 메서드는 기존 배열을 변경하지 않고 새 배열을 생성합니다.
// - ES6의 화살표 함수를 사용하면 코드를 더 간결하게 작성할 수 있습니다.
// ex) map((word) => `#{$word}`) --> #word 로 생성하여 반환함


// # 6.16
// 데이터 형태에 맞게 입력이 되지 않으면, 그 부분이 실행 되지 않음 ex) number -> 스트링 타입 넣으면 실행 x

// ** 데이터베이스에 저장 하는 방법 2가지
  1. Javascript object를 만들고 object를 database에 저장하는거

    const video = new Video({
      title,
      description,
      createdAt: Date.now(),
      hashtags: hashtags.split(",").map((word) => `#${word}`),
      meta: {
        views: 0,
        rating: 0,
      },
    });
    await video.save();
  // * save()는 promise를 return 해준다. (save 작업이 끝날때 기다려 준다)

  2. create를 사용하여 save를 안하고 손쉽게 database에 저장 가능

    await Video.create({
      title,
      description,
      createdAt: Date.now(),
      hashtags: hashtags.split(",").map((word) => `#${word}`),
      meta: {
        views: 0,
        rating: 0,
      },
    });

// MongoDB의 collection이름이 Video가 아닌 videos인 이유 (터미널에서 확인시 )
// * mongosh 실행 후 - show dbs(wetube 데이터 저장된걸 확인할 수 있음) > use wetube > show collections(document 들의 묶음) > db.dropDatabase() --> 데이터 선택 후 삭제 가능

// 1. 몽고 사용하기
// > mongo

// 2. 내가 가진 db 보기
// > show dbs

// 3. 현재 사용 중인 db 확인
// > db

// 4. 사용할 db 선택하기
// > use dbName
// (현재 수업에서는 `use wetube`)

// 5. db 컬렉션 보기
// > show collections

// 6. db 컬렉션 안에 documents 보기
// > db.collectionName.find()
// (현재 수업에서는 `db.videos.find()`)

// 7. db 컬렉션 안에 documents 내용 모두 제거하기
// > db.collectionName.remove({})
// (현재 수업에서는 `db.videos.remove({})`)

// Mongoose는 자동으로 모델을 찾고, 해당 모델의 이름을 따서 소문자+뒤에 s(복수형)을 붙여 컬렉션을 생성합니다.
// Tank 모델은 -> 컬렉션에 저장될 때, tanks로 저장됩니다.

// Document.prototype.save()
// https://mongoosejs.com/docs/api.html#document_Document-save

// Model.create()
// 하나 이상의 문서를 데이터베이스에 저장하기 위한 손쉬운 방법입니다.
// MyModel.create(docs)는 문서의 모든 문서에 대해 새로운 MyModel(doc).save()를 수행합니다.
// create()을 하게 되면 save()를 생략할 수 있습니다.
// create()이 다음 미들웨어인 save()를 트리거하기 때문입니다.
// https://mongoosejs.com/docs/api.html#model_Model.create

// Collection: Document들을 담고 있는 묶음

// # 6.17
// try와 catch는 항상 같이 쓸것(참 실행 & 오류 실행), 같이 사용하지 않을시 오류가 있으면 무한 로딩이 걸림.
// default: () 를 설정함으로써 기본값설정이 가능하다. (required: true 일 경우 값이 비면은 Error 이지만 default 할 경우 괜찮음)
// required: true 를 설정함으로써 필수로 작성해야하는 칸을 설정해줄수 있다

// # 6.18
// 항상 강조하는것 데이터 타입을 구체화해서 적어라
// 더 구체화 할수록 mongoose가 우릴 도와준다!

// schema에서 string 타입
// trim = 문자열 양 빈공간을 없애준다
// minlength , maxlength -> form과 database측면 둘다 해줘야한다
//  --> 사용자, 보안을 위해서(사용자 개발자 모드에서 삭제하여 비정상적으로 사용하는 걸 방지)

// # 6.19
// 정규식 연습할 수 있는 사이트 
// - https://regex101.com/
// 정규식에 대한 MDN의 공식 문서 
// - https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions

// 몽고DB Document
//  - 몽고DB는 ObjectID를 24바이트 16진 문자열 표현으로 반환한다.
// https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html
// https://docs.mongodb.com/manual/reference/method/ObjectId/

// 십육진법 (Hexadecimal)
//  - 십육진법은 십육을 밑으로 하는 기수법이다. 보통 0부터 9까지의 수와 A에서 F까지의 로마 문자를 사용하고, 이때 대소문자는 구별하지 않는다.
// Hexadecimal: 0~9까지의 숫자와 A-F까지의 알파벳이 조합된 string

// findOne
//  - 해당 조건과 일치하는 document를 찾는다.
//  - _id로 찾는 경우에는 findById()를 사용할 것을 권장
//  - findById(id)는 거의* findOne({ _id: id })과 동일합니다.
// https://mongoosejs.com/docs/api.html#model_Model.findOne

// findById
//  - 일치하는 ID를 찾아내는 기능
// https://mongoosejs.com/docs/api.html#model_Model.findById

// # 6.20
// * 에러를 먼저 체크하여 코딩 해주어(if문) 나머지 코드는 에러 걱정 할 필요가 없으므로. (return 하는게 중요)
// join()으로 배열을 문자열로 통합

// # 6.21
// * startWith() --> 어떤 특정 문자열로 시작하는지 확인 하는 함수
// #이 중복되어도 하나로 변환시키고 싶을때
// word.startsWith("#") ? `#${word.replace(/#/g, "")}` : `#${word}`
// /#에 /g 라는 글로벌 정규식을 추가하면 ####okokok 일 때, 자동으로 #을 전부 없애주고, 하나의 #만 남기게 할 수 있다.
// ex) hashtags: hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`))

// # 6.22
// Edit 하는 방법 2가지 (첫번째 방법이 간결하고 쉬움)
// await video.findByIdAndUpdate() --> findByIdAndUpdate()는 업데이트 하고자 하는 id를 찾고, 업데이트 할 내용을 적는다. (인자가 2개 필요)
// 1. ex) 
//  await Video.findByIdAndUpdate(id, {
//    title,
//    description,
//    hashtags: hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`)),
//  });

// 2. ex) 
//  video.title = title;
//  video.description = description;
//  video.hashtags = hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`)),
//  await video.save();

// node 모듈 mongoose를 활용해서 데이터를 생성하면,
// _id를 자동으로 생성
// 이 자동 생성된 _id에 접근할 때는 신기하게
// ._id와 .id로 모두 접근이 가능
// console.log(data.id);
// console.log(data._id);
// console.log(typeof(data.id)); -> string
// console.log(typeof(data._id)); -> object
// .id로 조회하면 string이 나오고, ._id로 조회하면 object가 반환

// exists() / 존재하다 --> mongoose에서 사용하는 함수로 오브젝트가 존재하는지 확인 하는 필터로 값이 있을 경우 true를 반환 한다, 어떤 property도 필터가 가능하다
ex) Video.exists({ _id: id }), Video.exists({ hello: "title" }) 존재할 경우 true 반환

// # 6.23
//  Mongoose - pre() 함수 --> ex) 변수명.pre("save", function(){ })
//   - 특정 이벤트가 발생하기 전에 실행되는 미들웨어를 정의하는 데 사용됩니다.
//   - 역할: 특정 이벤트가 발생하기 전에 미리 지정된 함수를 실행.
//   - 사용되는 이벤트: save, validate, remove, update, findOneAndUpdate, 등.
//  middleware는 무조건 model이 생성되기 전에 만들어야 한다
//  mongoose의 middleware에서 this키워드는 저장하고자 하는 문서를 가리킴
//  middleware에서 해시태그 관리 구현
// ex)
//   videoSchema.pre("save", async function () {
//     this.hashtags = this.hashtags[0]
//       .split(",")
//       .map((word) => (word.startsWith("#") ? word : `#${word}`));
//   });
//  const Video = mongoose.model("Video", videoSchema);

// # 6.24
// export 와 default export 같이 할 경우 import하는 방법
//  - ex) import Video, { exportName } from "../models/Video";
// 1. findByIdAndUpdate()에서는 save 훅업이 발생하지 않음 => 다른 방법을 알아보자
// 2. Video.js에 function을 만들어서 관리하기 => 이것도 괜찮음 근데 다른것도 알아보자
// 3. static을 사용하면 import 없이도 Model.function()형태로 사용이 가능함 => super cool
// ex)
//  videoSchema.static("formatHashtags", function(hashtags){
//    return hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`))
//  });
//  const Video = mongoose.model("Video", videoSchema);

// hashtags: Video.formatHashtags(hashtags),

// # 6.25
// findByIdAndDelete(id)는 findOneAndDelete({_id:id})의 줄임말
// * Model.findOneAndDelete()
// Model.findOneAndRemove()
// 이 둘은 정말 약간의 차이가 있는데 대부분의 상황에서 타당한 이유가 없는 한 delete를 사용하라고 되어 있음.

// # 6.26
// model.sort({ }) --> 정렬하고싶은 기준 : desc(내림차순) , asc(오름차순)
// 정렬 순서를 설정합니다. 
// ex) const videos = await Video.find({}).sort({ createdAt: "desc" });

// 라우터로 지정한 :id -> req.params
// pug파일에서 input으로 받은 내용 -> req.body (form이 POST일 때)
// pug파일에서 input으로 받은 url내용 -> req.query (form이 GET일 때)
// * req.query
//  - 라우트 안에 query string parameter를 포함하고 있는 객체로, URL에서 데이터를 가져올 때 주로 사용한다.
// 예) ?keyword="food" => {keyword: "food"}
// query parse가 비활성화로 설정되면 빈 객체 {}이고, 그렇지 않으면 구성된 query parse의 결과입니다.

// # 6.27

// videos title을 검색할때 keyword가 포함된것들을 regex operator를 통해 검색해 줄 수 있다.
// (regex = regular expression의 약자)
// const { keyword } = req.query;

// $regex: new RegExp(keyword, "i") -> keyword가 포함된 것들을 검색.
// $regex: new RegExp(`^${keyword}`, "i") -> keyword로 시작되는 것들을 검색(keyword 앞에 ^이 붙으면 - 시작점)
// $regex: new RegExp(`${keyword}$`, "i") -> keyword로 끝나는 것들을 검색(keyword 뒤에 $이 붙으면 - 끝점)
// (여기서 "i" = Welcome,welcome 둘다 같게 해주는것 즉 lowercase,uppercase의 구분을 없게 해주는것)
// ( mongoose가 아닌 mongoDB가 해주는 기능이다)

// Model.find()
// documents를 찾습니다. (findOne과 다르게 전체 document를 찾습니다.)
// Mongoose는 명령이 전송되기 전에 모델의 스키마와 일치하도록 필터를 캐스팅합니다.
// https://mongoosejs.com/docs/api.html#model_Model.find

// 정규표현식
// https://www.regexpal.com

// 몽고DB regex ($regex)
// 몽고DB에서 정규표현식을 사용하기 위해 사용하는 키워드
// 쿼리의 패턴 일치 문자열에 대한 정규식 기능을 제공합니다.
// https://docs.mongodb.com/manual/reference/operator/query/regex

// RegExp mdn
// RegExp 생성자는 패턴을 사용해 텍스트를 판별할 때 사용합니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp

// RegExp 사용 방법
// RegExp 객체는 리터럴 표기법과 생성자로써 생성할 수 있습니다.
// 리터럴 표기법의 매개변수는 두 빗금으로 감싸야 하며 따옴표를 사용하지 않습니다.
// 생성자 함수의 매개변수는 빗금으로 감싸지 않으나 따옴표를 사용합니다.

// /ab+c/i 를 아래 RegExp 생성자를 이용해서 만들 수 있습니다.
// new RegExp(/ab+c/, 'i') // 리터럴 표기법
// new RegExp('ab+c', 'i') // 생성자 함수


// ------------------------------- //#6 MONGODB AND MONGOOSE -------------------------------




// ------------------------------- #7 USER AUTHENTICATION -------------------------------

// # 7.1
// User.js --> Schema 에서 타입 형태 정의에 unique: true;
// unique: true --> 해달 Schema 필드에서의 고유값으로 데이터가 중복되지 않도록 한다.
// ex) email: { type: String, required: true, unique: true }
// ALT + SHIFT + I --> 선택된 영역에 커서 추가
// * password --> 암화하 하는걸 password hashing(해싱) 이라고 한다.

// # 7.2
// * hash 함수
//  1. 동일한 입력값(input)에 대한 동일한 출력값(output)을 갖고 있음(입력값이 바뀌지 않으면 출력값도 바꾸지 않는다는 소리)
      ex) 비밀번호: 12345 -> 해시함수 -> 4qwf9i4ke93k20ek ---> 입력값에 맞춰 동일한 출력값이 나옴(암호화)
    2. 입력값이 아주 살짝만 바뀌어도 출력값은 어마하게 바뀜
    3. 항상 같은 방향, 일방향으로만 움직임.
// * 레인보우 테이블로 해쉬 함수의 비밀번호를 알아 낼수 있지만, salt 라는 랜덤 텍스트인데 유저가 아이디를 만들게 되면은 패스워드 + salt(랜덤 텍스트)와 해쉬 함수화 하여 보안을 할수 있게 만듬.
// 해싱 = DB에 비밀번호를 저장할때 랜덤한 값으로 저장시켜주는걸 의미.
// 단방향 함수, (무조건 비밀번호 => 해싱 값 (NO! 해싱값 -> 비밀번호))
// 입력값 = 출력값 항상 같을 경우 이거를 deterministic function(결정적 함수) 라고 함.

// * bcrypt
// 암호를 해시하는 데 도움이 되는 라이브러리입니다.
// npm i bcrypt
// https://www.npmjs.com/package/bcrypt

// bcrypt.hash(password what we write, saltRounds, function(err,hash) { } <- 콜백 함수);
// ex) this.password = await bcrypt.hash(this.password, 5);
// saltRounds ---> password를 더 예측하기 어렵게 해싱 해서 출력값을 더 랜덤하게 바꿔줌.

// # 7.3
// - 계정의 중복생성을 방지하자
// - model의 exist 함수를 이용하여 중복여부 파악 가능
// - $or 함수 이용하면 둘중 하나 선택 가능
// $or --> 함수안에 조건에 맞는게 하나라도 만족할시에 반환한다.
// ex) const exists = await User.exists({ $or:[{ username }, { email }] })

// # 7.4
// * status code(상태 코드)
// https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C

//  - 200(OK): 서버가 요청을 제대로 처리했다는 뜻이다. 이는 주로 서버가 요청한 페이지를 제공했다는 의미로 쓰인다.(2 로 시작하는 상세 코드는 ok로 통함) --> ok 일 경우 브라우저에 히스토리가 남음
//  - 400(Bad Request): 서버가 요청의 구문을 인식하지 못할 때 발생한다. 클라이언트 측에서 문제가 있을 때 주로 발생한다.
//  - 404(Not Found): 서버가 요청한 페이지를 찾을 수 없을 때 발생한다. 서버에 존재하지 않는 페이지에 대한 요청이 있을 경우 서버는 이 코드를 제공한다.
// ex) res.status(400).render()
// response에 대한 HTTP 상태를 설정합니다. (status를 설정한다.)

// # 7.6
// 해싱한 password를 알아낼 필요는 없다 유저가 입력한 값이 해싱됐을때 db의 해싱된 password와 일치하는지 비교하면될뿐!
// *compare() - bcrypt.compare(user password, database password)
// ex) const ok = await bcrypt.compare(password, user.password);


// # 7.7
// 세션 - 브라우저와 백엔드 사이의 memory, history 같은거
// router 앞에 설정 해줘야 한다.
// 세션 설정시 브라우저가 알아서 백엔드로 쿠키를 보내도록 됨

// - 사이트를 들어오는 모두의 세션 ID를 기억함
// - express는 알아서 그 브라우저를 위한 session id를 만들고
// - 브라우저에게 보내줌 (자동)

// - 브라우저는 쿠키에 그 session id를 저장하고
// - express에서도 세션을 세션 DB에 저장

// - DB에 있는 id === Cookies에 있는 id
// app.use(
//   session({
//     secret: "Hello!",
//     resave: true,
//     saveUninitialized: true,
//   })
// )

// - *사이트를 들어오는 세션 ID를 콘솔로 나타냄*
// app.use((req, res, next) => {
//   req.sessionStore.all((error, sessions) => {
//     console.log(sessions);
//     next();
//   });
// }) ;

// * express-session
// Express용 세션 미들웨어
// 세션 데이터는 쿠키 자체에 저장되지 않고 세션 ID에만 저장됩니다. 세션 데이터는 서버(메모리) 측에 저장됩니다.
// npm i express-session
// https://www.npmjs.com/package/express-session

// - 기본적으로 서버와 유저의 연결은 stateless(무상태)한 성질을 띈다.(wifi가 쭉 연결되어 있는것과 다르게 주고 받으면 연결이 끊킴 그러한 상태를 stateless)
// - 이러한 연결 특성으로 인해 매번 연결시 유저는 새로이 서버에 자신을 확인 받아야 함
// - 만약 증표(증거)가 있다면 다시 연결시 유저에 대한 확인이 쉬워짐
// - 쿠기가 증표 역활을 함. 유저는 서버 연결시 서버에게 증표를 건네받음(쿠키는 유저가 보관)
// - 서버는 session으로 해당 증표를 가진 유저의 기록을 저장해둠
// - 유저가 증표(쿠키)를 가지고 오면 서버는 저장되어 있는 session을 통해 유저를 쉽게 확인

// 서버와 클라이언트가 상호작용한다. -> 서버가 클라이언트(브라우저)에게 쿠키를 준다. -> Session에 그 쿠키와 관련된 정보가 저장된다.

// 클라이언트가 req한다. -> 클라이언트가 쿠키를 보인다. -> 서버는 Session을 이용해 신원을 확인한다. -> 서버가 클라이언트를 식별한다.


// # 7.8

// 세션은 express가 세션을 메모리에 저장하고 있어, 서버를 재시작할때 마다 세션이 사라짐.
// 세션은 모든 브라우저가 똑같은 세션을 가지고 있지 않음(각기 다른 세션을 갖고 있음)
// 세션 보이기
// ex)
    app.get("/add-one",(req, res, next) => {
      return res.send(`${req.session.id}`)
    })
// express가 브라우저를 위한 세션 ID를 만듬(express에서도 세션을 세션 DB에 저장함) -> 서버가 세션id를 브라우저에 넘김 -> 브라우저의 쿠키에 세션 id 담고 있음 -> 쿠키에 저장한 세션 id를 브라우저가 모든 URL에(현재 있는 사이트 주소) 요청과 함께 보냄 -> 서버가 세션 id를 읽고 누구인지 알 수 있음.(어떤 브라우저인지 알 수 있음)

// 세션은 서버측에서 제공해주는 데이터,
// 쿠키는 클라이언트측에서 저장하고 사용하는 데이터

// 세션은 서버측에서 제공해주는 데이터, 쿠키는 클라이언트측에서 저장하고 사용하는 데이터
// req.sessionStore() 사용했을때 한번은 undefined가 나온 이유가 세션은 서버에서 만들어줘야 하는데 클라이언트가 첫 요청때 세션을 가지고있을리 없으니 undefined이 나온거고 그 이후 요청부턴 첫번째 요청때 세션을 만들어서 넘겨줬으니 클라이언트가 해당 값을 쿠키에 저장하고 매 요청때마다 서버에게 전달
// 세션은 서버가 만들어서 제공해주다보니 서버가 재부팅되면 초기화 된다. (그래서 DB에 저장해서 관리를 한다는 소리. 실 운영에선 서버가 꺼지는 일은 없으니깐.)
// 세션의 값은 서버가 만들어주는 고유값이다보니 해당 값을 기준으로 클라이언트에서 요청한 건에 대해 유저를 특정지을 수 있다
// 서버가 세션을 생성한 기점은 middleware로 express-session을 추가했을때부터 생성됨.

// # 7.9

// * 아래 처럼 선언시에 세션에 정보를 추가하는것
//  - req.session.loggedIn = true;
//  - req.session.user = user;

// # 7.10
// *res 안에는 locals 속성이 있음.
// express가 pug와 서로 locals에 공유 할 수 있도록 설정되어 있음.(모드 pug template에서 사용 가능, 글로벌, *미들웨어를 라우터에 적용 했을때 한해서*)
// ex)
//  - express 에서는 res.locals.sexy = "sexy"
//  - pub 에서는 #{sexy} 라고만 작성 하면은 변수가 적용됨

// # 7.11
// 1. backend browser가 소통하는 방식
// backend와 browser는 session ID를 저장하는데
// browser는 cookie라는 것에 저장을 하고 다닌다 그래서 browser가 backend에 요청할때는 cookie를 보내고 backend에서 session ID의 유무를 확인한후 응답을 해주는 방식

// 2. 로그인 하는 방법
// req.session을 통해 session(object로 이루어져있음)에 접근이 가능하다
// loggedIn = true , user = user(앞서 변수로 선언한) 를 넣어줌으로 res.local으로 접근해서 가져올 수가 있다!

-----

// # 7.12
// Express Session
// 쿠키에는 세션 데이터가 아닌 세션 ID에만 저장됩니다. 세션 데이터는 서버 측에 저장됩니다. 하지만 기본 서버 측 세션 저장소인 MemoryStore는 production 환경용으로 설계되지 않았습니다.
// https://www.npmjs.com/package/express-session

// Compatible Session Stores (호환가능한 세션 스토어)
// https://www.npmjs.com/package/express-session#compatible-session-stores

// connect-mongo
// Typescript로 작성된 Connect 및 Express용 MongoDB 세션 저장소.
// *npm i connect-mongo - 설치
// https://www.npmjs.com/package/connect-mongo

// store: MongoStore.create({mongoUrl:"mongodb://127.0.0.1:27017/wetube"}), <-- 추가로 인해 쿠키에 session id가 등록됨

// -세션을 db에 저장하기 위해 session store에 저장한다.
// -connect mongo 이용
// -mongo db의 url을 가지고 있는 configuration object를 만들어야 한다.
// -session middleware에는 store란 option이 있다.
// -MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/wetube" })

// # 7.13
// 쿠키를 구성하는 요소
// * resave : 모든 request마다 세션의 변경사항이 있든 없든 세션을 다시 저장한다.
//  - true:
// + 스토어에서 세션 만료일자를 업데이트 해주는 기능이 따로 없으면 true로 설정하여 매 request마다 세션을 업데이트 해주게 한다.
//  - false:
// + 변경사항이 없음에도 세션을 저장하면 비효율적이므로 동작 효율을 높이기 위해 사용한다.
// + 각각 다른 변경사항을 요구하는 두 가지 request를 동시에 처리할때 세션을 저장하는 과정에서 충돌이 발생할 수 있는데 이를 방지하기위해 사용한다.

// * saveUninitialized : uninitialized 상태인 세션을 저장한다. 여기서 uninitialized 상태인 세션이란 request 때 생성된 이후로 아무런 작업이 가해지지않는 초기상태의 세션을 말한다.
//  - true:
// + 클라이언트들이 서버에 방문한 총 횟수를 알고자 할때 사용한다.
//  - false:
// + uninitialized 상태인 세션을 강제로 저장하면 내용도 없는 빈 세션이 스토리지에 계속 쌓일수 있다. 이를 방지, 저장공간을 아끼기 위해 사용한다.(수정 된 걸 확인하면 세션 저장)
// ex)  req.session.loggedIn = true;  <-- 로그인 시에 세션 저장으로 인해 수정 됨
        req.session.user = user;


// # 7.14
// store --> 링크 보호 필수

// Set-Cookie
// Set-Cookie HTTP 응답 헤더는 서버에서 사용자 브라우저에 쿠키를 전송하기 위해 사용됩니다.
// https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Set-Cookie

// 쿠키에 설정가능한 옵션
// Domain
// 쿠키가 적용되어야 하는 호스트를 지정.

// Expires
// HTTP 타임스템프로 기록된 쿠키의 최대 생존 시간(수명).

// Max-Age
// 쿠키가 만료될 때 까지의 시간 (밀리세컨드: 1/1000초)

// secret
// 이것은 세션 ID 쿠키에 서명하는 데 사용되는 비밀입니다.
// https://www.npmjs.com/package/express-session

// COOKIE_SECRET에 넣을 랜덤 문자열 생성 사이트
// https://randomkeygen.com/

// Environment File (환경변수 만들기)
// 1. .env 파일 만들기
// 2. env 파일을 .gitignore에 추가하기. (git에 업로드 하지 않기 위해)
// 3. .env 파일에 대문자로(관습적) 환경변수를 만들고 = 다음에 원하는 내용 쓰기 (string 이면 “”안에 쓰기) (eg. COOKIE_SECRET=“hello”)
// ex) DB_URL=mongodb://127.0.0.1:27017/wetube  --> "" 없이
// 4. js 코드에서 비밀로 해야하는 string을 precess.env.[환경변수이름]으로 바꾸기
// ex) process.env.COKIE_SECRET

COOKIE_SECRET=dgdfgdfgdfg445654546dsadasd
DB_URL=mongodb://127.0.0.1:27017/wetube


// # 7.15
// process.env.(환경변수) 읽어보자!
// 1. npm i dotenv
// 2. 가능한 한 가장 먼저 사용하기 require("dotenv").config()
//    --> require("dotenv").config(); 함수 먼저 사용 해야지 env 변수를 사용할 수 있음
// 2-1)사용할 모든 파일에 require("dotenv").config() 붙이기
// 2-2)require("dotenv").config()로는 import 되는 파일에는 적용이 되지 않기 때문에
//     --> import "dotenv/config" 로 함수명을 변환 후 init.js에 넣어주기
// (why init.js? -> dev를 실행하면 init.js가 제일 먼저 실행되기 때문)

*****
// # 7.16
https://github.com/settings/apps

http://localhost:4000/users/github/callback

https://github.com/login/oauth/authorize  --> 깃허브 로그인(오류)
https://github.com/login/oauth/authorize?client_id=입력값 --> 내 서버로 로그인 연결
https://github.com/login/oauth/authorize?client_id=입력값&allow_signup=false --> 로그인만 가능하게, 회원가입 x


// Authorizing OAuth Apps
// 다른 사용자가 OAuth 앱을 승인하도록 할 수 있습니다.
// GitHub의 OAuth 구현은 웹 브라우저에 대한 액세스 권한이 없는 앱에 대한 표준 인증 코드 부여 유형 및 OAuth 2.0 장치 인증 부여를 지원합니다.

// Web application flow
// 웹 애플리케이션 흐름: 브라우저에서 실행되는 표준 OAuth 앱에 대해 사용자에게 권한을 부여하는 데 사용됩니다.
// 앱 사용자에게 권한을 부여하는 웹 애플리케이션 흐름은 다음과 같습니다.
// 1. 로그인하려는 사이트에서 유저의 GitHub identity를 request하기 위해 유저를 GitHub 페이지로 리다이렉트시킵니다.
// 2. 유저는 리다이렉트된 GitHub에서 승인을 하고, GitHub에 의해 다시 로그인하려는 사이트로 리다이렉트됩니다.
// 3. 로그인 하려는 사이트는 유저의 액세스 토큰을 통해 API에 접근합니다.
// https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps

// 깃허브 OAuth Apps Setting
// GitHub API를 사용하기 위해 등록한 애플리케이션입니다.
// https://github.com/settings/developers

// Scopes for OAuth Apps (OAuth 앱의 범위)
// https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps

// Creating an OAuth App (OAuth앱 만들기)
// https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app


// # 7.17
// scope = 유저에게서 얼마나 많이 정보를 읽어내고 어떤 정보를 가져올 것에 대한것\
// 여러 정보들은 우리가 선택해서 볼 수 있게 할 수 있다.

// Scopes for OAuth Apps
// OAuth 앱은 초기 리디렉션에서 범위를 요청할 수 있습니다.
// '%20'을 사용하여 공백으로 구분하여 여러 범위를 지정할 수 있습니다.
// // 사용 예시
// --> https://github.com/login/oauth/authorize?client_id=...&scope=user%20repo_deployment

// https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps

// URLSearchParams
// URLSearchParams 인터페이스는 URL의 쿼리 문자열에 대해 작업할 수 있는 유틸리티 메서드를 정의합니다.
// https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams

// URLSearchParams.toString()
// toString() 은 URLSearchParams 인터페이스의 메소드로서, URL에서 사용할 수 있는 쿼리 문자열을 리턴합니다.
// https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams/toString



// # 7.18
// 1. fetch('url')로 다른 서버를 통해 데이터를 가져 올 수있다(GET 요청을 보내는것).
// 데이터를 받아오는거지만 보낼려면 따로 method를 기입 해줘야 한다.
   ex)
    fetch(`/api/videos/${id}/view`, {
      method: "POST",
    });

// fetch()는 JavaScript에서 네트워크 요청을 쉽게 만들 수 있는 메서드입니다.
   주로 HTTP 요청을 보내고, 응답을 받아 처리하는 데 사용됩니다.
   fetch()는 Promise를 반환하므로 비동기적으로 작업을 처리할 수 있습니다.
// 하지만, res.body 에 담겨있는 날것의 url로는 제대로 된 객체를 받아올 수 없다.

// 2.때문에 중간에 .json 함수가 response의 스트림을 가져와 끝까지 읽고, res.body의 텍스트를 promise의 형태로 반환한다.

// 3. 다른 서버에서 데이터를 object 형식으로 받아온다.
// ex){"coord":{"lon":139.01,"lat":35.02},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":285.514,"pressure":1013.75,"humidity":100,"temp_min":285.514,"temp_max":285.514,"sea_level":1023.22,"grnd_level":1013.75},"wind":{"speed":5.52,"deg":311},"clouds":{"all":0},"dt":1485792967,"sys":{"message":0.0025,"country":"JP","sunrise":1485726240,"sunset":1485763863},"id":1907296,"name":"Tawarano","cod":200}

// [2022.01.24] HTTP headers (fetch의 header의 역할)
// HTTP headers는 는 클라이언트와 서버가 request(or response)로 부가적인 정보를 전송할 수 있도록 해줍니다

// Accept
// 돌려줄 데이터 타입에 대해 서버에게 알려주는 역할을 합니다
// MIME 타입입니다
// (MIME type이란 웹에서 사용되는 확장자라고 생각하시면 되며
// type/subtype으로 구성되어 있습니다)

// Authorization
// 보호된 리소스에 대한 접근을 허용하여 서버로 User agent를 인증하는 자격증명을 보내는 역할을 합니다


// # 7.19
// Error [ERR_REQUIRE_ESM]: require() of ES Module 오류 발생 시 두 가지 방법 중 하나로 해결할 수 있습니다.

// 1. node-fetch 3버전이 아닌 2버전으로 다운그레이드된 버전을 설치해서 해결할 수 있습니다.
// npm i node-fetch@2.6.1 (강의와 같은 버전)
// https://www.npmjs.com/package/node-fetch

// 2. cross-fetch 사용 (CommonJS, ES6 모듈, Typescript등에서도 사용가능)
// node-fetch대신 사용할 수 있는 cross-fetch 패키지를 통해 해결할 수 있습니다. node-fetch와 사용법은 동일합니다.
// Node, 브라우저 및 React Native용 범용 WHATWG Fetch API.
// npm i cross-fetch
// ```
// import fetch from 'cross-fetch';

// fetch(...)
// ```
// https://www.npmjs.com/package/cross-fetch

// node-fetch 버전3 문제
// v3의 node-fetch는 ESM 전용 모듈입니다. require()로 가져올 수 없습니다. ESM으로 전환할 수 없는 경우 CommonJS와 호환되는 v2를 사용하십시오.
// 중요한 버그 수정은 v2에 대해 계속 게시됩니다.

// Use the access token to access the API
// 액세스 토큰을 사용하면 유저를 대신해 API에 요청할 수 있습니다.
// ```
// Authorization: token OAUTH-TOKEN
// GET https://api.github.com/user
// ```
// https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#3-use-the-access-token-to-access-the-api

*****

// # 7.20
// Github REST API (User)
// 사용자 API를 사용하면 인증된 사용자에 대한 공개 및 비공개 정보를 얻을 수 있습니다.
// https://docs.github.com/en/rest/reference/users

// Get the authenticated user
// 인증된 사용자가 기본 인증 또는 사용자 범위의 OAuth를 통해 인증되면 응답에 공개 및 비공개 프로필 정보가 나열됩니다. 인증된 사용자가 사용자 범위 없이 OAuth를 통해 인증된 경우 응답에는 공개 프로필 정보만 나열됩니다.

// Add an email address for the authenticated user
// https://docs.github.com/en/rest/reference/users#add-an-email-address-for-the-authenticated-user

// List public email addresses for the authenticated user
// 인증된 사용자의 공개 이메일 주소 나열
// https://docs.github.com/en/rest/reference/users#list-public-email-addresses-for-the-authenticated-user


// # 7.21



// # 7.22
// Session.destroy(callback)
// --> 세션을 파괴하고 req.session 속성을 설정 해제합니다. 완료되면 콜백이 호출됩니다.
// ex) req.session.destroy();


// # 7.23
// 카카오 로그인 구현하기 (REST API)

// 카카오 로그인 구현하실 분들은 아래 링크들을 참조하시면 됩니다.
// 구현 방식은 깃허브 로그인과 거의 동일합니다.
// https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api

// 0. 애플리케이션 등록
// https://developers.kakao.com/docs/latest/ko/getting-started/app

// 1. 인가 코드 받기
// https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#request-code

// 2. 토큰 받기
// https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#request-token

// 3. 사용자 정보 가져오기
// https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#req-user-info


// ------------------------------- //#7 USER AUTHENTICATION -------------------------------




// ------------------------------- #8 USER PROFILE -------------------------------


// # 8.01
// all() --> get, post, put, delete 등 모든 http method에 적용됨
// (get/post 둘다 공통된 함수를 넣고 싶으면 all을 이용하면된다.)

// # 8.02
// const {
//   session: {
//     user: { _id },
//   },
//   body: { name, email, username, location },
// } = req;
// *위 코드 es6이며 아래 코드와 같음
// const id = req.session.user._id

// Model.findByIdAndUpdate()
// 문서의 _id 필드로 mongodb findAndModify 업데이트 명령을 실행합니다. findByIdAndUpdate(id, ...)는 findOneAndUpdate({ _id: id }, ...)와 동일합니다.

// // 사용 예시
// Model.findByIdAndUpdate(id, { name: 'jason bourne' }, options, callback)

// // is sent as (+타입스크립트)
// Model.findByIdAndUpdate(id, { $set: { name: 'jason bourne' }}, options, callback)
// https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate

// # 8.03
// findByIdAndUpdate() --> 찾은 데이터를 업데이트 해주고 싶으면  { new: true } 해주면 된다
// ex)  
//   const updatedUser = await User.findByIdAndUpdate(
//     _id, 
//     {
//       name,
//       email,
//       username,
//       location,
//     },
//     { new: true}
//   );
//   req.session.user = updatedUser;


// # 8.05
// userSchema.pre("save", async function(){
//   this.password = await bcrypt.hash(this.password, 5);
// })
// 위 처럼 pre("save") 할시에 아래 처럼 코드 사용하여 저장 할수 있음.
// --> user.save();


// await user.save();
// return res.redirect("/users/logout");

// 위와 같은 형태로 구현하면 해커들이 로직파악 후에 302 redirect를 프록시를 통해서 막은 후에 이전 세션 데이터도 활용할 수 있게 됩니다. 좀더 안전하게 하려면 아래와 같이 확실하게 destroy해주는게 좋아보여요.

// req.session.destroy();
// return res.redirect('/login');

// 추가로 이전비밀번호와 변경비밀번호가 같으면 튕겨주는게 좋을 듯 합니다.

// if (oldPassword === newPassword) {
// return res.status(400).render('users/change-password', {
// pageTitle,
// errorMessage: 'The old password equals new password',
// });
// }

-----

// # 8.06
// Multer
// Multer는 주로 파일 업로드에 사용되는 multipart/form-data를 처리하기 위한 node.js 미들웨어입니다.
// 주의! Multer는 multipart(multipart/form-data)가 아닌 form을 처리하지 않습니다.
// npm i multer
// ex) form(enctype="multipart/form-data")
// enctype="multipart/form-data"
// https://www.npmjs.com/package/multer

// multer(opts)
// dest 또는 storage: 파일을 저장할 위치
// ex) --> export const uploadFiles = multer({ dest: "uploads/" });
// fileFilter: 허용되는 파일을 제어하는 ​​함수
// limits: 업로드된 데이터의 한계
// preservePath: 기본 이름 대신 파일의 전체 경로 유지

// ex)
// const multer = require('multer')
// const upload = multer({ dest: './public/data/uploads/' })
// app.post('/stats', upload.single('uploaded_file'), function (req, res) {
// console.log(req.file, req.body)
// });

// .single(fieldname)
// 이름이 fieldname인 단일 파일을 수락합니다.
// 단일 파일은 req.file에 저장됩니다.
// req.file <-- 사용 할수 있게 됨

// multer 사용조건
// 1. form 에 사용조건 삽입
// 2. multer기본설정
// 3. upload middleware만들기
// 4. route에서 사용하기

// # 8.07
// !_절대 DB에는 파일을 저장하지 않는다. --> 폴더에 파일을 저장!!
// !_DB에는 그 파일의 위치를 저장한다.

// # 8.08

// * express.static("파일명") --> 이것은 디렉토리의 내부파일을 제공한다.
// ex) 

// - 브라우저에게 upload 파일을 볼 권한을 주어야한다. 하지만 그것은 보안상 좋지 않다.
// - 따라서 브라우저에게 어떤 폴더를 볼 수 있는지 static files serving이라는 것을 활성화 시킨다.

// # 8.09
// 샘플 비디오 파일
// https://sample-videos.com/
// https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4

// multer limit
// fileSize: multipart forms의 경우 최대 파일 크기 (바이트)
// https://www.npmjs.com/package/multer

// Byte to MB
// 1000000 Bytes(백만 Bytes) = 1 MB (in decimal)
// 1000000 Bytes = 0.95367431640625 MB (in binary)
// https://www.gbmb.org/bytes-to-mb

// # 8.11
// ObjectId --> mongoose 에서만 사용할 수 있음
// ex) type: mongoose.Schema.Types.ObjectId,
//  --> object 이고, loggedInUser._id는 string으로 서로 비교 할려면 String으로 바꿔줘야 한다

// *ref
// ref 어디서 찾을것이냐를 말해준답니다.
// 그리고 우리가 User.js에서 "User"이라는것을 만들었듯이 MongoDB 에 Collection에 있는것만 적을수 있답니다.
// 그러니까 ref:"User"은 가능하지만 ref:"Name" 같이 우리가 만들지 않은 Collection 은 불가능합니다.

// # 8.12
// * populate("데이터를 넣을 공간을 정함") --> 데이터를 가져와서 " " 넣을곳을 정하여 거기에 저장 함
// Mongoose에는 populate()를 통해 다른 컬렉션의 문서를 참조할 수 있습니다. Population은 문서의 지정된 경로를 다른 컬렉션의 문서로 자동 교체하는 프로세스입니다. 단일 문서, 여러 문서, 일반 개체, 여러 일반 개체 또는 쿼리에서 반환된 모든 개체를 채울 수 있습니다.
// const story = await Story.findOne({ title: 'Casino Royale' }).populate('author');

// populate의 사전적 정의
// 타동사. (서류에 데이터를) 덧붙이다

// ex) 
// const video = await Video.findById(id)
// console.log(video) 
// --> owner: new ObjectId('66a0642a7d3c590563705022'),

// populate("") 추가시 변화
// const video = await Video.findById(id).populate("owner");
// console.log(video)
// --->
// owner: {
//   _id: new ObjectId('66a0642a7d3c590563705022'),
//   email: 'll@ndk',
//   socialOnly: false,
//   username: 'gdf',
//   password: '$2b$05$R34A7AlXUUKwiCbMyj7wfOxBeKxaGDwcy2KJ2TZbcj40wsnclSqvq',
//   name: '박종혁',
//   location: '11',
//   __v: 0
// },
// Video.js 에서
// --> owner: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"}
// ref로 User를 설정 해주어서 user 값을 owner에 넣어준것이다.



// # 8.13
// User 모델에 array형식으로 video모델 연결, 속성추가
// video controller에서
// session _id 로 user을 찾고 user videos array에 created 된 newVideo의 id를 push한다

// *id를 push하는 것임을 기억하기!
// *user.save() 잊지말것!
// > 지금은 save 될때마다 pre save로 hash가 계속 일어나고 있음
// > bug fix 할 것

// 추가기능 구현 : my profile에서 영상 진입시 edit 불가하도록, video delete, edit에 임의 수정 불가하도록 owner속성 사용해 접근금지 기능 추가하기


// # 8.14
// isModified() -->  Mongoose에서 사용하는 메서드로, 문서(Document)에서 특정 필드가 수정되었는지 여부를 확인하는 데 사용됨.
// ex) 
//   if(this.isModified("password")){
//     this.password = await bcrypt.hash(this.password, 5);
//   }


// ------------------------------- //#8 USER PROFILE -------------------------------




// ------------------------------- #9 WEBPACK -------------------------------


// # 9.1
// Webpack은 .jpg 같은 거는 압축된 jpg 를 주고, JS 는 못생긴 거로, Sass 는 몬생긴 css 로 준다. 압축, 변형, 최소화등 필요한 작업들을 거치고 정리된 코드를 결과물로 준다.

// webpack, webpack-cli devDependencies 로 설치
// || 같음
// npm i webpack webpack-cli -D
// *D의 의미 : --save-dev 와 같음

// webpack아 여기는 소스파일들이 있고 여기는 너가 결과물을 보낼 폴더야
// webpack.config.js 파일에서 webpack 환경설정. 이 파일에서는 되게 몬생긴 JS 만 쓸 수 있다.

// *** 필수 설정 ***
// - entry: 우리가 처리하고자 하는 파일들(예쁜 js)
// - entry: 이 프로퍼티에 우리가 처리하고자 하는 파일의 경로 입력
// - output: 결과물
//  - filename: 이 프로퍼티에 우리 결과물이 될 파일 이름 입력
//  - path: 이 프로퍼티에 우리 결과물 파일을 어디에 저장할 지 지정 (이 경로는 절대경로여야 해!)

Webpack 시작하기: https://webpack.kr/guides/getting-started/
Webpack 설정: https://webpack.kr/concepts/configuration/

Typescript환경에서 Webpack 설정하기
npm install --save-dev typescript ts-loader webpack webpack-cli
https://webpack.kr/guides/typescript/


// # 9.2
// const path = require("path"); --> path를 import 해준거
// path.resolve() --> 몇 개가 됐는 내가 입력하는 파트들을 모아서 경로로 만들어 줌
// ex) path: path.resolve(__dirname, "assets", "js")
       --> /Users/tj02/종혁_연습/jjong_project/youtube-clone-project/assets/js
// rules --> 객체 array 타입 rules : [ { } ]


// /\.js$/ = RegExp 정규표션식
// 정규표현식에선 .가 분류 커맨드이므로 그냥 .을 쓸려면 \.을 해줘야 된다.
// 따라서 \.js는 .js이다

// path.resolve([...paths])
// path.resolve() 메서드는 경로 세그먼트 시퀀스를 절대 경로로 해석하는 데 사용됩니다. 경로 세그먼트가 전달되지 않으면 path.resolve()는 현재 작업 디렉토리의 절대 경로를 반환합니다.
// **(__dirname: 현재 파일 위치의 절대 경로)

// path.resolve('/foo/bar', './baz');
// // Returns: '/foo/bar/baz'

// https://nodejs.org/api/path.html#pathresolvepaths

// babel-loader
// npm install babel-loader -D
// https://github.com/babel/babel-loader

// webpack loader
// https://webpack.kr/loaders/

// webpack babel-loader
// https://webpack.kr/loaders/babel-loader/

// main.js에 빈 파일 나오는 오류 해결 방법
// mode를 설정해주지 않으면 기본적으로 production으로 설정되어 client/js폴더 내에 작성한 main.js를 변환했을 때, 빈 파일로 나올 수 있습니다.
// 빈 파일 나오시는 분들은 module.export안에 mode: "development"로 설정해주시면 됩니다.

// Typescript webpack.config.js 설정
// https://webpack.kr/guides/typescript/



// # 9.3
// * client file: Webpack이 처리하기 전 내가 코드를 작성할 파일
// * assets file: browser가 읽고 처리할 파일

// app.use("/static", express.static("assets"));
// --> /static 경로는 내가 만들고 싶은 경로를 만들어 줌
script(src="/static/js/main.js")


// # 9.4
// webpack은 뒤에서 부터 실행 한다.
// ' use: ["style-loader", "css-loader", "sass-loader"],'
// sass-loader -> css-loader -> style-loader 순

// 1. webpack의 rules 내부의 'test: /\.scss$/,' 코드에서 모든 scss파일들을 긁어온다

// 2. ' use: ["style-loader", "css-loader", "sass-loader"],'
      코드에서 sass-loader -> css-loader -> style-loader 순으로 loader가 적용되어 긁어온 scss 파일들을 변환시킨다
// 2.1 - sass-loader가 scss확장자 파일을 브라우저가 이해할 수 있는 css 파일로 변환시킨다
// 2.2 - css-loader가 @import, url()등의 최신형 css 코드를 브라우저가 이해할 수 있는 코드로 변환시켜 동작할 수 있도록 한다
// 2.3 - style-loader가 위 과정으로 변환시킨 css 코드를 DOM 내부에 적용시켜준다

// 4. 변환된 코드가 output에서 설정된 파일 경로에 설정된 파일명으로 저장된다

// 5. 저장된 변환 js 코드를 pug 파일에 적용시키기 위해 'script(src="/static/js/main.js")' 코드를 통해 긁어와 적용시킨다


// # 9.5
// MiniCssExtractPlugin
// 이 플러그인은 CSS를 별도의 파일로 추출합니다. CSS가 포함된 JS 파일별로 CSS 파일을 생성합니다. mini-css-extract-plugin을 css-loader와 결합하는 것이 좋습니다.
// npm install --save-dev mini-css-extract-plugin
// https://webpack.kr/plugins/mini-css-extract-plugin/

// MiniCssExtractPlugin Options
// ```
// plugins: [new MiniCssExtractPlugin({ filename: "css/style.css" })]
// ```
// https://webpack.js.org/plugins/mini-css-extract-plugin/#publicpath

// CssMinimizerWebpackPlugin
// https://webpack.kr/plugins/css-minimizer-webpack-plugin/

// 1. webpack이 자동으로 js안에 css를 녹여낸걸 분리할것
// 2. MiniCssExtract 설치
// 3. webpack.config.js에 require로 설치
// 4. module.exports에 plugins 속성 설정
// 5. scss 로더[] 맨 앞에 MiniCssExtractPlugin.loader 삽입
// => main.css가 분리되어 추출
// 6. assets>js>main.js 와 assets>css>styles.css로 폴더 분리
// - js : output 옵션 변경
// - css : plugins에 filename 속성추가 (filename: 폴더경로, 파일명)
// 7. pug에 css 연결하기
// href 경로는 script와 마찬가지로 static(app.use에서 설정한)경로 후 폴더경로



// # 9.6
// Watch and WatchOptions
// Webpack은 파일이 변경될 때마다 이를 감지하여 다시 컴파일 할 수 있습니다.

// watch
// watch 모드를 켭니다. 이제 초기 빌드 후 webpack은 해석 된 파일의 변경 사항을 계속 감시합니다. (webpack.config.js에 entry에 지정한 파일을 감시한다.)
// https://webpack.kr/configuration/watch/

// Nodemon
// nodemon은 디렉토리의 파일 변경이 감지되면 노드 응용 프로그램을 자동으로 다시 시작하여 node.js 기반 응용 프로그램을 개발하는 데 도움이 되는 도구입니다.
// https://github.com/remy/nodemon

// Sample nodemon.json
// https://github.com/remy/nodemon/blob/master/doc/sample-nodemon.md

// Nodemon Config file
// https://github.com/remy/nodemon#config-files




// ------------------------------- //#9 WEBPACK -------------------------------




// ------------------------------- #10 STYLES -------------------------------

// # 10.0

Reset CSS
https://meyerweb.com/eric/tools/css/reset

FontAwesome CDN
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css

// # 10.3
double populate
path : 가장먼저 내가 populate 하고싶은것
populate : 가장먼저 받고싶은 popluate를 통해 받은 정보 안에 있는 정보를 받는다
path : 내가 그 안에서 받고싶은 것
model : 원래 이 정보를 가지고 있는 모델


// ------------------------------- //#10 STYLES -------------------------------




// ------------------------------- #11 VIDEO PLAYER -------------------------------


// # 11.0
// --> 스크립트를 모든 페이지에 로드하는 방법을 바꾸기 위함
// * entry애서 오브젝트로 2개 이상 만들시에 output에 [name]으로 설정해줘야 파일이 오브젝트명에 따라 만들어짐
// entry: {
//   main: "./src/client/js/main.js",
//   videoPlayer: "./src/client/js/videoPlayer.js",
//  },
// output: {
//   filename: "js/[name].js",

// * block scripts --> block content처럼 script를 사용하고자 하는곳에만 사용 할 수 있음.

// *주석 처리 하기 
// 1. 화면에 보이는 주석처리 --> //
// ex)
    //
      div
        p 코멘트 내용

// 2. 화면에 보이지 않음(pug 전용) --> //-
// ex)
    //-
        div
          p 코멘트 내용

// # 11.1
// - 비디오 element와 오디오 element는 둘다 html media element로부터 상속을 받는다.
// https://developer.mozilla.org/ko/docs/Web/API/HTMLMediaElement

// - video도 각각의 method와 eventListener가 있다.

// # 11.03
// input type="range"에 사용 가능한 이벤트 (change, input)
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range

// 이벤트: change
// change 이벤트는 요소 변경이 끝나면 발생합니다.
// 텍스트 입력 요소인 경우에는 요소 변경이 끝날 때가 아니라 포커스를 잃을 때 이벤트가 발생합니다.

// 이벤트: input
// input 이벤트는 사용자가 값을 수정할 때마다 발생합니다.
// 키보드 이벤트와 달리 input 이벤트는 어떤 방법으로든 값을 변경할 때 발생합니다.

// # 11.04
// - loaded meta data event: 메타데이터가 로드 된 시점에 발생합니다
// - meta 데이터는 비디오를 제외한 모든 것을 말한다.
// - duration을 호출해서 총 시간을 기억할 수 있다.
// - timeupdate: currentTime 속성이 변경되는 시점에 발생합니다.=> video가 업데이트 될 때마다 event를 호출한다.

// loadeddata (en-US)
// 미디어의 첫번째 프레임이 로딩 완료된 시점에 발생합니다.

// timeupdate (en-US)
// currentTime 속성이 변경되는 시점에 발생합니다.


// # 11.05
// - date Constructor은 JS안에 있는 data class를 말한다.
// - new Date(0)은 1970/01/01 00:00:00을 의미한다. 컴퓨터는 이때부터 시간을 셌다. 단위는 밀리세컨드.
// - .toISOString()=>날짜의 포맷을 맞춰주는 함수
// - substr()=>자바스크립트의 문자열 자르기=>현재 안씀
// - 대신 substring()=> 차이는 몇개가 아닌, 몇번째 index까지
// subString(시작인덱스, 종료인덱스) 
// --> new Date(29 * 1000).toISOString().substring(11, 19);




// # 11.06
// * document.fullscreenElement --> 풀스크린이 아닐시 null 값을 반환.

// Fullscreen API
// Fullscreen API 는 특정 요소 Element(와 해당 자손들을)를 full-screen mode로 표시하고, 더 이상 필요하지 않으면 full-screen mode를 종료하는 메서드를 추가합니다.

// Element.requestFullscreen() (en-US)
// 유저 에이전트가 지정한 요소(그리고 그 자손들까지)를 full-screen mode로 설정하고, 브라우저의 모든 UI 요소와 다른 모든 애플리케이션을 화면에서 제거하도록 요구합니다. full-screen mode가 활성화되면 Promise resolved를 반환합니다.

// document.exitFullscreen() (en-US)
// user agent 가 full-screen mode에서 창 모드로 다시 전환되도록 요청합니다. full-screen mode가 완전히 종료되면 Promise resolved 를 반환합니다.

// DocumentOrShadowRoot.fullscreenElement (en-US) (사용 추천)
// fullscreenElement 속성은 DOM(혹은 shadow DOM)에서 현재 full-screen mode로 표시되는 요소Element를 알려줍니다. 이것이 null인 경우, document는 full-screen mode가 아닙니다.

// Document.fullscreen (en-US) (더 이상 사용되지 않는 속성)
// (fullscreenElement처럼 풀스크린을 감지할 수 있지만 사용 비추천)
// 문서에 현재 full-screen mode로 표시되는 요소가 있는 경우 true, 그렇지 않으면 false의 Boolean 값입니다.

// https://developer.mozilla.org/ko/docs/Web/API/Fullscreen_API


// # 11.09
// Mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// 기본 로직
// 1. 마우스를 움직이게 되면 기존 setTimeout이 clearTimeout에 의해 지워지고, 새로운 setTimeout이 생성되고, 실행되게 된다.
// 2. 그 상태에서 마우스를 움직이지 않으면 새로운 setTimeout이 3초 후에 실행되게 되서 비디오 컨트롤바를 숨긴다.
// 3. 움직이게 되면 다시 위의 1번처럼 기존 setTimeout은 clearTimeout에 의해 지워지고, 새로운 setTimeout이 생성된다.


// # 11.08


// ------------------------------- //#11 VIDEO PLAYER -------------------------------




// ------------------------------- #12 VIEWS API -------------------------------

# 12.0
// * api --> 프론트와 백엔드가 통신하는 방법을 말함
// 이동하지않고 url을 바꾸지않고 (interactive하게 = 상호작용) controller실행

# 12.1
// timeupdate --> video에서만 가능한 이벤트로 비디오 시청을 끝내면 발생하는 이벤트 이다
// video.addEventListener("timeupdate", );

// 속성 --> true, false, read only 같은 거를 속성
// Method(메소드) --> 어떤 기능을 하는거 load(), pause(), play() 같은 것들
// event

// HTML에 data저장하기 => JS 받아오기 : data-attribute
// 저장(data-변수명) 받아오기(element.dataset)
// js에서 data-set 가져올려면 --> 변수명.dataset.data변수명
   ex)
    const { id } = videoContainer.dataset;
    const id = videoContainer.dataset.id;

# 12.2
// .status(200) : render( ) 하기 전에 상태 코드를 정할 수 있음 
// VS
// .sendStatus(200): 상태를 보내고 연결을 끊음


// ------------------------------- //#12 VIEWS API -------------------------------




// ------------------------------- #13 VIDEO RECORDER -------------------------------


// # 13.0

  - MediaDevices.getUserMedia()
  MediaDevices 인터페이스의 getUserMedia() 메서드는 사용자에게 미디어 입력 장치 사용 권한을 요청하며, 사용자가 수락하면 요청한 미디어 종류의 트랙을 포함한 MediaStream (en-US)을 반환합니다. 스트림은 카메라, 비디오 녹화 장치, 스크린 공유 장치 등 하드웨어와 가장 비디오 소스가 생성하는 비디오 트랙과, 마이크, A/D 변환기 등 물리적과 가상 오디오 장치가 생성하는 오디오 스트림, 그리고 그 외의 다른 종류의 스트림을 포함할 수 있습니다.
  보통, MediaDevices 싱글톤 객체는 다음과 같이 navigator.mediaDevices를 사용해 접근합니다.
  navigator.mediaDevices.getUserMedia(constraints);
  https://developer.mozilla.org/ko/docs/Web/API/MediaDevices/getUserMedia

  - constraints
  요청할 미디어 유형과 각각에 대한 요구사항을 지정하는 MediaStreamConstraints 객체. constraints 매개변수는 두 개의 구성 요소, video와 audio를 가지는 객체로, 요청할 미디어 유형에 대해 설명합니다. 둘 중 적어도 하나는 지정해야 합니다.
  { audio: true, video: true }

  regenerator-runtime  --> * 현재 업데이트 되서 따로 설치 안해도 async 사용 가능
  Regenerator로 컴파일된 생성기 및 비동기 함수를 위한 독립 실행형 런타임입니다.
  npm i regenerator-runtime
  import regeneratorRuntime from "regenerator-runtime";
  https://www.npmjs.com/package/regenerator-runtime


// # 13.1

  HTMLMediaElement srcObject

  HTMLMediaElement 인터페이스의 srcObject 속성은 HTMLMediaElement와 연결된 미디어의 소스 역할을 하는 객체를 설정하거나 반환합니다.
  그 객체는 MediaStream, MediaSource, Blob 또는 파일(Blob에서 상속됨)일 수 있습니다.

  사용 예시
  이 예에서 카메라의 MediaStream은 새로 생성된 요소에 할당됩니다.
  ```
  const mediaStream = await navigator.mediaDevices.getUserMedia({video: true});
  const video = document.createElement('video');
  video.srcObject = mediaStream;
  ```
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject

  video.src : 정적인 비디오 파일 또는 URL
  video.srcObject : 동적인 미디어 stream (Live 등)



// # 13.2

  MediaRecorder.ondataavailable
  dataavailable 이벤트의 이벤트핸들러

  dataavailable 이벤트
  MediaRecorder.stop()이 실행될 때 발생하는 이벤트이다.


  MediaRecorder
  MediaStream Recording API의 MediaRecorder 인터페이스는 미디어를 쉽게 녹화할 수 있는 기능을 제공합니다. MediaRecorder() 생성자를 사용하여 생성됩니다.
  https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder

  MediaRecorder()
  기록할 MediaStream이 지정된 새 MediaRecorder 개체를 만듭니다.

  stream --> 0,1로 되어있는 구조로 흐르는 좁은 시냇물을(한 방향으로 흐르는 데이터의 흐름) 뜻함
  기록될 MediaStream입니다. 이 소스 미디어는 navigator.mediaDevices.getUserMedia()를 사용하여 생성된 스트림이나 audio, video 또는 canvas 요소에서 가져올 수 있습니다.

  MediaRecorder.start()
  미디어 녹화를 시작합니다. 이 메서드는 선택적으로 밀리초 단위의 값을 가진 타임슬라이스 인수를 전달할 수 있습니다.

  MediaRecorder.stop()
  저장된 데이터의 최종 Blob을 포함하는 dataavailable 이벤트가 발생하는 시점에서 기록을 중지합니다.

  MediaRecorder --> ondataavailable
  MediaRecorder.stop()이 실행될 때 발생하는 이벤트이다.
  ex) 
  recorder.ondataavailable = (event) => {
    videoFile = URL.createObjectURL(event.data);
    video.srcObject = null;
    video.src = videoFile;
    video.loop = true;
    video.play();
  };
  https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/ondataavailable


// # 13.3
  *src
  - src 속성은 미디어 요소의 소스를 URL 문자열로 설정하는 데 사용됩니다.
  - 이는 주로 파일 경로, HTTP URL, 또는 데이터 URL을 통해 정적 파일을 로드하는 데 사용됩니다.

  *srcObject
  - srcObject 속성은 MediaStream, MediaSource, Blob, 또는 File 객체를 직접 설정하는 데 사용됩니다.
  - 이는 주로 실시간 스트림이나 동적으로 생성된 미디어 소스를 HTMLMediaElement에 연결하는 데 사용됩니다.

  차이점 요약:
  - src:
  URL 문자열을 사용하여 정적 미디어 파일을 설정합니다.
  파일 경로, HTTP URL, 데이터 URL 등을 사용할 수 있습니다.

  - srcObject:
  MediaStream, MediaSource, Blob, File 객체 등을 직접 설정합니다.
  실시간 스트림이나 동적으로 생성된 미디어 소스에 사용됩니다.

  사용 시나리오:
  - src: 서버에 저장된 비디오 파일을 재생하거나, 외부 URL에서 비디오를 로드할 때 사용합니다.
  - srcObject: 웹캠 스트림을 실시간으로 표시하거나, 동적으로 생성된 미디어를 사용할 때 사용합니다.
  src는 주로 정적 미디어 파일을 로드하는 데 사용되고, srcObject는 실시간 스트림이나 동적으로 생성된 미디어 소스를 다루는 데 사용된다는 점이 주요 차이점입니다.


  -https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder
  -MediaRecorder를 이용해서 녹화한다. MediaRecorder는 비디오든 오디오든 모든 것을 녹화할 수 있다.
  -미리보기를 먼저 하고 녹화를 시작한다.
  -MediaRecorder를 만들고 stream을 보내면 된다.
  -recorder가 stop하면 dataavailable이 발생한다. e.data에 우리의 비디오가 있다. {Blob {size: 286951, type: 'video/x-matroska;codecs=avc1,opus'}}
  -e.data는 파일이다.
  -createObjectURL은 브라우저 메모리에서만 가능한 URL을 만들어준다.
  -만들어진 URL은 웹사이트 상에 존재하는 것처럼 보이지만 실제론 없다. 단순히 브라우저의 메모리를 가리키기만 하고 있는 URL이다.
  -위의 URL은 주소를 입력하면 나오지 않지만, 메모리에 저장하고 있어 비디오의 src에 입력이 가능하다.

  URL.createObjectURL()

  URL.createObjectURL() 정적 메서드는 주어진 객체를 가리키는 URL을 DOMString으로 반환합니다. 해당 URL은 자신을 생성한 창의 document가 사라지면 함께 무효화됩니다.

  object
  객체 URL을 생성할 File, Blob, MediaSource 객체.
  const objectURL = URL.createObjectURL(object)

  https://developer.mozilla.org/ko/docs/Web/API/URL/createObjectURL




// # 13.4
  a 태그의 download 속성
  - download 속성 추가시 링크 클릭하면 다운로드로 넘어가짐(download에 값 입력시 그 값에 맞게 파일명이 자동으로 입력됨)
  - 해당 URL을 다운로드 하게끔 해주다는 의미
  ex) <a href="blob:http://localhost:4000/de6e71bf-2355-43f0-a9af-2bbaafbebd46" download="MyRecording.webm"></a>


  recorder = new MediaRecorder(stream, { mimeType: 'video/mp4' });
  디폴트로 webm으로 되어 있어서 mimeType 안쓰고 해도 webm으로 저장이 되는데 mp4로 바꿀시 error.


// # 13.5




// # 13.6


// ------------------------------- //#13 VIDEO RECORDER -------------------------------




// ----------------------------- #14 WEBASSEMBLY VIDEO TRANSCODE -----------------------------





// ----------------------------- //#14 WEBASSEMBLY VIDEO TRANSCODE ---------------------------




// ------------------------------- #15 FLASH MESSAGES -------------------------------





// ------------------------------- //#15 FLASH MESSAGES -------------------------------




// ------------------------------- #16 COMMENT SECTION -------------------------------





// ------------------------------- //#16 COMMENT SECTION -------------------------------




// -------------------------- #17 [🔥 2024 UPDATE 🔥] DEPLOYMENT --------------------------





// -------------------------- //#17 [🔥 2024 UPDATE 🔥] DEPLOYMENT ------------------------



// -------------------------- #18 [2020 VERSION] DEPLOYMENT --------------------------





// -------------------------- //#18 [2020 VERSION] DEPLOYMENT ------------------------




// ------------------------------- //Youtube-clone-project -------------------------------

*/