# Games Shop - Full Stack Project

מערכת חנות משחקים - פרויקט פול סטאק

---

## תוכן עניינים

- [אודות הפרויקט](#אודות-הפרויקט)
- [טכנולוגיות](#טכנולוגיות)
- [התקנה והרצה](#התקנה-והרצה)
- [מבנה הפרויקט](#מבנה-הפרויקט)
- [פיצ'רים עיקריים](#פיצרים-עיקריים)
- [API עיקרי](#api-עיקרי)
- [תרומה](#תרומה)
- [יוצרים](#יוצרים)

---

## אודות הפרויקט

פרויקט זה הוא מערכת חנות משחקים אינטרנטית, הכוללת צד שרת ב-ASP.NET Core (C#) עם Entity Framework, צד לקוח ב-React, וחיבור למסד נתונים SQL Server. המערכת מאפשרת ניהול משחקים, קטגוריות, לקוחות, סל קניות, רכישות ועוד.

---

## טכנולוגיות

- **Frontend:**  
  - ReactJS  
  - Axios  
  - Bootstrap

- **Backend:**  
  - ASP.NET Core 6  
  - Entity Framework Core  
  - AutoMapper  
  - SQL Server

---

## התקנה והרצה

### דרישות מוקדמות

- Node.js ו-npm מותקנים
- Visual Studio 2022 ומעלה
- SQL Server מותקן (או LocalDB)

### שלבים

1. **שכפול הפרויקט:**
   ```sh
   git clone <repository-url>
   ```

2. **הקמת מסד נתונים:**
   - להריץ את הסקריפט [DataBaseGames.sql](DataBaseGames.sql) על שרת SQL.

3. **הרצת צד שרת:**
   - לפתוח את הפתרון `[server/server.sln](server/server.sln)` ב-Visual Studio.
   - להגדיר את פרויקט `server` כפרויקט התחלתי.
   - להריץ (`F5`).

4. **הרצת צד לקוח:**
   - לעבור לתיקיית `pq`:
     ```sh
     cd pq
     npm install
     npm start
     ```
   - האתר יעלה בברירת מחדל ל- http://localhost:3000

---

## מבנה הפרויקט

```
.
├── DataBaseGames.sql
├── pq/                # צד לקוח (React)
│   ├── src/
│   ├── public/
│   └── package.json
└── server/            # צד שרת (ASP.NET Core)
    ├── BL/
    ├── DAL/
    ├── DTO/
    └── server/
```

---

## פיצ'רים עיקריים

- ניהול משחקים (הוספה, עידכון, מחיקה, צפייה)
- ניהול קטגוריות
- רישום והתחברות לקוחות
- סל קניות ורכישה
- ניהול משתמשים והרשאות (מנהל/משתמש רגיל)
- REST API מלא
- ממשק משתמש נוח וידידותי

---

## API עיקרי

- כתובת ברירת מחדל ל-API:  
  `https://localhost:7227/api/`

- דוגמאות:
  - `/api/Game/GetAllList` - שליפת כל המשחקים
  - `/api/Category/myGetCategory` - שליפת כל הקטגוריות
  - `/api/Customer/addCust` - הוספת לקוח
  - `/api/Buy/addBuy` - הוספת רכישה

---

## תרומה

נשמח לקבל Pull Requests, הצעות לשיפור ודיווחי באגים!

---

## יוצרים

- [השם שלך כאן]
- פרטי קשר: [המייל שלך]

---

בהצלחה!
