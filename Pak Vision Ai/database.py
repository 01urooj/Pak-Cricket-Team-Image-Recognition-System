import sqlite3

# Database Connection
conn = sqlite3.connect("database.db")

# Cursor
cursor = conn.cursor()

# ===============================
# Users Table
# ===============================
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
""")

# ===============================
# History Table
# ===============================
cursor.execute("""
CREATE TABLE IF NOT EXISTS history (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    player_name TEXT NOT NULL,

    role TEXT,

    accuracy TEXT,

    age TEXT,

    city TEXT,

    scan_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP

)
""")

# Save Changes
conn.commit()

# Close Connection
conn.close()

print("✅ Database & History table created successfully!")




