## 🍿  Movie App

## 📦 Установка:

1. Клонируйте репозиторий:

```bash
git clone git@github.com:ntbcmnv/movie-app.git
#или
git clone https://github.com/ntbcmnv/movie-app.git

#затем
cd movie-app
```

2. Установите зависимости:

```bash
npm install
```

3. Запустите приложение
```bash
npm run dev
```

4. Создайте файл .env.local на основе .env.example в корне проекта (movie-app)

5. Получите TMDB API ключ:
👉 [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)

Зарегистрируйтесь и создайте API ключ (v3).

6. Вставьте ключ в .env.local:
  `NEXT_PUBLIC_TMDB_ACCESS_KEY=ваш_ключ_от_TMDB`

7. Запустите проект:

```bash
npm run dev
```
