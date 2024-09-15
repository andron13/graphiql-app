# RESTfull client

## Application structure

RESTfull client, which includes:

- method selector
- text input for the endpoint url
- request editor
- headers editor
- response section

### RESTfull client

- This route should be private.
- Header should be visible.
- Method selector. Selected method should be reflected in the application url (e.g. http://restclient.com/GET), for more details, please, check the next section.
- Endpoint (url) input.
- Request body editor / JSON viewer. It will be used in the response section in read-only mode. Should support prettifying. Please, mind that request body editor should support at least JSON and the plain text. Support of the XML syntax is not mandatory.
- Variables editor section.
- Headers editor section.
- Response section. Should be read only. Should contain information about HTTP response code and the response status.

#### RESTfull client template

```
+----------------------------------------------------+
|                      Header                        |
|  +----------------------------------------------+  |
|  | [Logo] | Language Toggle | [Sign Out] |      |  |
|  +----------------------------------------------+  |
+----------------------------------------------------+
|                                                    |
|   +------------------- REST Client -------------+  |
|   | +-------------+ +--------------------------+ | |
|   | | Method      | | Endpoint URL             | | |
|   | +-------------+ +--------------------------+ | |
|   | Headers: [Add Header Button]                 | |
|   | +------------------------------------------+ | |
|   | | Header Key | Header Value                | | |
|   | +------------------------------------------+ | |
|   | Body: [JSON/Text Editor]                     | |
|   +---------------------------------------------+  |
|                                                    |
|   +----------------- Response -------------------+ |
|   | Status: [HTTP Status Code]                   | |
|   | Body: [Read-Only JSON Viewer]                | |
|   +---------------------------------------------+  |
+----------------------------------------------------+
|                      Footer                        |
|    [GitHub Link] | Year | [Course Logo]            |
+----------------------------------------------------+

```

#### Routing on RESTfull client

Route URL will be comprised of selected method as a route params, request url encoded in base64 as a route param, request body (if applicable) as stringified json also encoded in base64 as another optional route param, and each presented header as a query param.
Let's say we want to make a GET request to the `https://jsonplaceholder.typicode.com/posts/1`:

```curl
curl https://jsonplaceholder.typicode.com/posts/1
```

So the url might look so:
`http://localhost:5137/GET/aHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzE=`
And we you want to make a POST request to the same endpoint, e.g.:

```curl
curl -d '{"title":"fakeTitle","userId":1,"body":"fakeMessage"}' https://jsonplaceholder.typicode.com/posts
```

Headers, specified in the editor, should be provided as url query parameters (mind that you need to url encode headers values):
`http://localhost:5137/POST/aHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3Rz/eyJ0aXRsZSI6ImZha2VUaXRsZSIsInVzZXJJZCI6MSwiYm9keSI6ImZha2VNZXNzYWdlIn0=?Content-Type=application%2Fjson`

## Evaluation criteria

### RESTfull client - max 120 points

- [ ] Functional editor enabling query editing and prettifying, request body provided in the url as base64-encoded on focus out. - **40 points**
- [ ] Functional read-only response section, with information about HTTP status and the code. - **30 mpoints**
- [ ] Method selector, shows all the valid HTTP verbs, value is provided in the url on change. - **10 points**
- [ ] Input for the url, entered value is provided in base64-encoded way on change. - **15 points**
- [ ] Variables section that can shown or hidden, specified variables are included in the body. - **15 points**
- [ ] Headers section, value is provided in the url on header add/change. - **20 points**

## ru

# RESTful клиент

## Структура приложения

RESTful клиент, который включает в себя:

- селектор метода
- текстовое поле для ввода URL конечной точки
- редактор запроса
- редактор заголовков
- секцию для отображения ответа

### RESTful клиент

- Этот маршрут должен быть приватным.
- Заголовок должен быть видимым.
- Селектор метода. Выбранный метод должен отображаться в URL приложения (например, http://restclient.com/GET), для подробностей смотрите следующий раздел.
- Поле для ввода конечного URL (endpoint).
- Редактор тела запроса / просмотрщик JSON. Будет использоваться в секции ответа в режиме только для чтения. Должен поддерживать форматирование (prettifying). Имейте в виду, что редактор тела запроса должен поддерживать как минимум JSON и обычный текст. Поддержка синтаксиса XML не обязательна.
- Секция редактора переменных.
- Секция редактора заголовков.
- Секция ответа. Должна быть только для чтения. Должна содержать информацию о коде HTTP ответа и статусе ответа.

#### Шаблон RESTful клиента

```
+----------------------------------------------------+
|                      Заголовок                     |
|  +----------------------------------------------+  |
|  | [Логотип] | Переключатель языка | [Выйти]    |  |
|  +----------------------------------------------+  |
+----------------------------------------------------+
|                                                    |
|   +------------------- REST Клиент --------------+ |
|   | +-------------+ +--------------------------+ | |
|   | | Метод       | | Конечный URL             | | |
|   | +-------------+ +--------------------------+ | |
|   | Заголовки: [Кнопка добавления заголовка]      | |
|   | +------------------------------------------+ | |
|   | | Ключ заголовка | Значение заголовка      | | |
|   | +------------------------------------------+ | |
|   | Тело: [Редактор JSON/Текста]                 | |
|   +---------------------------------------------+  |
|                                                    |
|   +----------------- Ответ ---------------------+ |
|   | Статус: [HTTP Код состояния]                 | |
|   | Тело: [Просмотрщик JSON только для чтения]   | |
|   +---------------------------------------------+  |
+----------------------------------------------------+
|                      Нижний колонтитул              |
|    [Ссылка на GitHub] | Год | [Логотип курса]       |
+----------------------------------------------------+

```

#### Маршрутизация в RESTful клиенте

URL маршрута будет состоять из выбранного метода как параметра маршрута, URL запроса, закодированного в base64, как параметра маршрута, тела запроса (если применимо) в виде строки JSON, также закодированной в base64 как еще одного необязательного параметра маршрута, и каждого представленного заголовка в виде параметра запроса.
Допустим, мы хотим выполнить GET-запрос к `https://jsonplaceholder.typicode.com/posts/1`:

```curl
curl https://jsonplaceholder.typicode.com/posts/1
```

Тогда URL может выглядеть так:
`http://localhost:5137/GET/aHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzE=`

И если вы хотите выполнить POST-запрос к тому же конечному URL, например:

```curl
curl -d '{"title":"fakeTitle","userId":1,"body":"fakeMessage"}' https://jsonplaceholder.typicode.com/posts
```

Заголовки, указанные в редакторе, должны быть переданы в виде параметров запроса URL (учтите, что значения заголовков нужно кодировать в URL):
`http://localhost:5137/POST/aHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3Rz/eyJ0aXRsZSI6ImZha2VUaXRsZSIsInVzZXJJZCI6MSwiYm9keSI6ImZha2VNZXNzYWdlIn0=?Content-Type=application%2Fjson`

## Критерии оценки

### RESTful клиент - максимум 120 баллов

- [ ] Функциональный редактор, позволяющий редактировать запросы и форматировать их, тело запроса, предоставленное в URL, кодируется в base64 при потере фокуса. - **40 баллов**
- [ ] Функциональная секция ответа только для чтения, с информацией о статусе HTTP и коде. - **30 баллов**
- [ ] Селектор метода, отображает все допустимые HTTP-глаголы, значение отображается в URL при изменении. - **10 баллов**
- [ ] Поле для ввода URL, введенное значение отображается в закодированном виде в base64 при изменении. - **15 баллов**
- [ ] Секция переменных, которая может быть показана или скрыта, указанные переменные включаются в тело запроса. - **15 баллов**
- [ ] Секция заголовков, значение отображается в URL при добавлении/изменении заголовка. - **20 баллов**
