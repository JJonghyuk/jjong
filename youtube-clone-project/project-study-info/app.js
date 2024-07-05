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

// *서버 만들기*

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

// app.use(logger);
// app.get("/", handleHome);
// app.get("/protected",handleProtected);


// #3.5
// middleware --> 중간에 있는 소프트웨어 / request & response 사이에 있는것 / use(""), get("") 함수에서 사용 가능
//  - (req, res, next) 함수 3개 필요 next 함수를 사용함(middleware가 아닌 마지막 함수는 next() 함수 사용x)
//  - 다음 함수로 넘기는 함수
// middleware = controller
//  - ex) const handleClick = (req, res, next) --> next라는 함수가 있는데, 함수가 끝나고 next() 함수를 실행해주는거다. 
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
// **
// :id(\\d+) --> id를 붙인 이유는 이름을 붙이기 위해서 (컨트롤러에서 필요)
// req.params.id --> 이런식으로 이름을 붙여서 사용 하기 위해

// Routing
// https://expressjs.com/ko/guide/routing.html

// 정규표현식 테스트 사이트
// https://www.regexpal.com

// \w+: 모든 문자, 숫자 선택
// \d+: 모든 숫자 선택


// ------------------------------- //#4 ROUTERS -------------------------------



// ------------------------------- #5 TEMPLATES -------------------------------





// ------------------------------- //#5 TEMPLATES -------------------------------




// ------------------------------- #6 MONGODB AND MONGOOSE -------------------------------





// ------------------------------- //#6 MONGODB AND MONGOOSE -------------------------------




// ------------------------------- #7 USER AUTHENTICATION -------------------------------





// ------------------------------- //#7 USER AUTHENTICATION -------------------------------




// ------------------------------- #8 USER PROFILE -------------------------------





// ------------------------------- //#8 USER PROFILE -------------------------------




// ------------------------------- #9 WEBPACK -------------------------------





// ------------------------------- //#9 WEBPACK -------------------------------




// ------------------------------- #10 STYLES -------------------------------





// ------------------------------- //#10 STYLES -------------------------------




// ------------------------------- #11 VIDEO PLAYER -------------------------------





// ------------------------------- //#11 VIDEO PLAYER -------------------------------




// ------------------------------- #12 VIEWS API -------------------------------





// ------------------------------- //#12 VIEWS API -------------------------------




// ------------------------------- #13 VIDEO RECORDER -------------------------------





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

