<img src="https://user-images.githubusercontent.com/61308457/169084662-b24045df-34c3-4350-97eb-6659f8381d55.svg" />

<div align="center">
  <img src="https://img.shields.io/badge/-React-202124?logo=react&logoColor=61DAFB&style=flat-square" />
  <img src="https://img.shields.io/badge/JavaScript-202124?style=flat-square&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.JS-339933?style=flat-square&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-464646?style=flat-square&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=nginx&logoColor=white" />
</div>

<h3 align="center">
  <a href="#about">О проекте</a>
  •
  <a href="#techs">Технологии</a>
  •
  <a href="#functionality">Функциональность</a>
  •
  <a href="#routes">Маршруты</a>
  •
  <a href="#install">Установка</a>
</h3>

<h4 align=center>Интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки.</h4>

<h3 align="center">
  <a href=".." title="Link">Demo</a> 
  •
  <a href="https://iv-a.github.io/react-burger/">GitHubPages</a>
</h3>
<br>
<h1 id="about">О проекте</h1>
<table>
  <tbody>
    <tr>
      <td>
        <p align="center"><b>Выполнен <br> в рамках курса Веб-разработки от Яндекс.Практикум. </b><p>
        <p align="center">Сервис, позволяющий пользователям делиться своими изображениями и оценивать чужие.</p>
      </td>
      <td width="70%"><img src="https://user-images.githubusercontent.com/61308457/168448705-1d49221c-23e8-4bea-b1dd-698e1f825b82.gif"/></td>
    </tr>
  </tbody>
</table>

<h1 id="techs">Технологии</h1>
<table>
  <thead>
    <tr>
      <th width="200px">Frontend</th>
      <th width="200px">Backend</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React Router</li>
          <li>React Context</li>
          <li>LocalStorge</li>
          <li>Cookie</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>JavaScript</li>
          <li>MongoDB</li>
          <li>nginx</li>
          <li>REST API</li>
          <li>JWT</li>
          <li>LocalStorge</li>
          <li>Cookie</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<h1 id="functionality">Функциональность</h1>
<ul>
  <li>Создание/публикация/удаление постов с изображениями;</li>
  <li>Постановка/удаление лайков;</li>
  <li>Открытие/закрытие модальных окон;</li>
  <li>Регистрация/авторизация пользователей;</li>
  <li>Редактирование профиля;</li>
  <li>Валидация форм, как на стороне клиента, так и сервера;</li>
  <li>Отзывчивая верстка, адаптированная под различные разрешения экрана;</li>
  <li>Защита роутов авторизацией;</li>
  <li>Ограничение числа запросов  с одного IP в единицу времени;</li>
  <li>Бережное хранение паролей в виде хэша;</li>
  <li>Идетентификация по JWT через httpOnly Cookie;</li>
  <li>Централизованная обработка ошибок.</li>
</ul>

<h1 id="routes">Маршруты</h1>
<table>
  <thead>
    <tr>
      <th>Метод</th>
      <th>Маршрут</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>GET</code></td>
      <td><code>/users</code></td>
      <td>возвращает всех пользователей</td>
    </tr>
    <tr>
      <td><code>GET</code></td>
      <td><code>/users/:userId</code></td>
      <td>возвращает пользователя по _id</td>
    </tr>
    <tr>
      <td><code>POST</code></td>
      <td><code>/users</code></td>
      <td>создаёт пользователя</td>
    </tr>
    <tr>
      <td><code>GET</code></td>
      <td><code>/cards</code></td>
      <td>возвращает все карточки</td>
    </tr>
    <tr>
      <td><code>POST</code></td>
      <td><code>/cards</code></td>
      <td>создаёт карточку</td>
    </tr>
    <tr>
      <td><code>DELETE</code></td>
      <td><code>/cards/:cardId</code></td>
      <td>удаляет карточку по идентификатору</td>
    </tr>
    <tr>
      <td><code>PATCH</code></td>
      <td><code>/users/me</code></td>
      <td>обновляет профиль</td>
    </tr>
    <tr>
      <td><code>PATCH</code></td>
      <td><code>/users/me/avatar</code></td>
      <td>обновляет аватар</td>
    </tr>
    <tr>
      <td><code>PUT</code></td>
      <td><code>/cards/:cardId/likes</code></td>
      <td>поставить лайк карточке</td>
    </tr>
    <tr>
      <td><code>DELETE</code></td>
      <td><code>/cards/:cardId/likes</code></td>
      <td>убрать лайк с карточки</td>
    </tr>
  </tbody>
</table>
<h1 id="install">Установка</h1>
<ol>
<li>
  <p>Создаем рабочую директорию с произвольным именем (например dev):</p>
<pre>
mkdir <имя рабочей директории>
</pre>
</li>
<li>
  <p>Клонируем репозиторий в рабочую директорию:</p>
  <ul>
  <li>
    <p>Переходим в рабочую директорию:</p>
<pre>
cd <имя рабочей директории>
</pre>
  </li>
  <li>
    <p>Клонируем репо:</p>
<pre>
git clone https://github.com/iv-a/react-mesto-api-full.git
</pre>
  </li>
    <li>
      В рабочей директории должна появиться папка проекта <code>react-mesto-api-full</code>
    </li>
  </ul>
</li>
<li>
  <p>Переходим в папку с проектом:</p>
<pre>
cd react-mesto-api-full
</pre>
</li>
<h3>Backend</h3>
<li>
  <p>Переходим в директорию с бэкендом:</p>
<pre>
cd backend
</pre>
</li>
<li>
  <p>Устанавливаем зависимости:</p>
<pre>
npm install
</pre>
</li>
<li>
  <p>Запускаем проект:</p>
<pre>
npm run start
</pre>
</li>
<h3>Frontend</h3>
<li>
  <p>Переходим в директорию с фронтендом:</p>
<pre>
cd frontend
</pre>
</li>
<li>
  <p>Устанавливаем зависимости:</p>
<pre>
npm install
</pre>
</li>
<li>
  <p>Запускаем проект:</p>
<pre>
npm start
</pre>
</li>
</ol>

