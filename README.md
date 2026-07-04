# 📚 Bookstore Management System

A simple **Bookstore Management System** with a **Backend REST API** and a **Frontend Web Application**.

The system allows users to manage:

- 📖 Books
- 📦 Inventory
- 🛒 Orders (Book Sales)
- 📊 Revenue Reports (sales, income, expenses, best-selling books, employee sales)

---

# 🧱 Tech Stack

| Part | Technology |
|------|------------|
| **Backend** | Node.js, Express, TypeScript, Prisma ORM, PostgreSQL (Neon), Multer (Image Upload) |
| **Frontend** | React, TypeScript, Vite, Recharts |

Project structure:

```text
Book-Store/
├── Backend/      # REST API (Port 3000)
└── Frontend/     # Web App (Port 5173)
```

---

# ✅ Requirements

Before running the project, make sure you have:

- **Node.js 18 or newer** (Node.js 20+ is recommended)

Check your version:

```bash
node -v
```

- A **PostgreSQL database on Neon**

This project uses the Neon serverless adapter (`@prisma/adapter-neon`), so you need a Neon database instead of a local PostgreSQL database.

Create a free database:

https://neon.tech

After creating a project, copy the connection string. It looks like this:

```text
postgresql://user:password@xxxxx.neon.tech/database?sslmode=require
```

---

# 🚀 How to Run the Project

Open **two terminal windows**.

One terminal runs the backend.

The other runs the frontend.

---

## 1. Start the Backend

Go to the Backend folder:

```bash
cd Backend
```

Install packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The API will run at:

```
http://localhost:3000
```

---

## 2. Start the Frontend

Open another terminal.

Go to the Frontend folder:

```bash
cd Frontend
```

Install packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser:

```
http://localhost:5173
```

---

### Vite Proxy

The frontend is already configured to proxy:

- `/api`
- `/uploads`

to

```
http://localhost:3000
```

Because of this, you **do not need to configure CORS**.

---

# 🌱 Seed Sample Data (Optional)

A new database is empty.

You can add sample data by running these commands inside the **Backend** folder.

Create sample employees:

```bash
npx tsx prisma/seed-nv.ts
```

Create sample inventory:

```bash
npx tsx prisma/seed-kho.ts
```

These scripts are safe to run multiple times.

---

## Create Data Manually

You can also use the web interface.

Recommended order:

1. **Books**
   - Click **Add Book**
   - Enter book information
   - Upload a cover image
   - Set the initial stock

2. **Inventory**
   - Open Inventory
   - Click **View Details**
   - Add stock
   - Choose shelf location

3. **Orders**
   - Create a new order
   - Select books
   - Enter quantity
   - Choose an employee
   - Submit the order

4. **Revenue**
   - Select a start date
   - Select an end date
   - Click **Confirm**
   - View the reports

---

# 📜 Useful Commands

## Backend

| Command | Description |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build the project |
| `npm start` | Run the production build |
| `npx prisma db push` | Update database schema |
| `npx prisma generate` | Generate Prisma Client |
| `npx prisma studio` | Open Prisma Studio |

---

## Frontend

| Command | Description |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build the frontend |
| `npm run preview` | Preview the production build |

---

# 🛠️ Troubleshooting

### Backend is not running

If you see:

- `ERR_CONNECTION_REFUSED`
- API errors
- Cannot connect to the server

Start the backend:

```bash
cd Backend
npm run dev
```

The frontend needs the backend to run.

---

### Database error

If you see database errors or `DATABASE_URL` errors:

1. Check `Backend/.env`

2. Make sure `DATABASE_URL` contains your Neon connection string.

3. Run:

```bash
npx prisma db push
```

Then:

```bash
npx prisma generate
```

---

### New database changes are not working

If you pull new code or change the Prisma schema:

```bash
npx prisma generate
```

Then restart the backend:

```bash
npm run dev
```

---

### Employee list is empty

If you cannot create orders or add inventory because no employees appear:

```bash
npx tsx prisma/seed-nv.ts
```

---

### Revenue or Orders show no data

- In the **Orders** page, open the **View Orders** tab.
- In the **Revenue** page, choose a valid date range and click **Confirm**.

---

# 📌 Notes

- Do **not** upload `Backend/.env` to GitHub.
- Add `.env` to your `.gitignore` file.
- Book cover images are stored in:

```text
Backend/uploads/
```

They are available from:

```text
/uploads/filename
```

---

# 👨‍💻 Author

This project was created for learning full-stack web development using:

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL (Neon)
- React
- Vite
```