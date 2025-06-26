## 🎬Overlook App

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

```bash
npm run dev
```

3. Создайте файл .env.local на основе .env.example в корне проекта (movie-app)

4. Получите TMDB API ключ:
👉 [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)
Зарегистрируйтесь и создайте API ключ (v3).

5. Вставьте ключ в .env.local:
  `NEXT_PUBLIC_TMDB_ACCESS_KEY=ваш_ключ_от_TMDB`

6. Запустите проект:

```bash
npm run dev
```
