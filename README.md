# 🌿 **Mede – Medical Assistance & Appointment Web Platform**

Mede is a lightweight, front-end web application designed to simplify healthcare interactions.
It provides patients and doctors with an intuitive interface for **appointments**, **hospital information**, **personal medical profiles**, **map navigation**, and an integrated **AI-powered chatbot**.

This project was built for hackathons and academic demonstrations and can be extended into a full medical ecosystem.

---

## 🚀 **Features**

### 🏥 **Hospital Information**

* View nearby hospitals
* Details pages for medical centers
* Medical department listings

### 📅 **Appointment Booking**

* Easy appointment scheduling
* Clean UI for selecting doctors and times
* Confirmation and rescheduling options

### 🧑‍⚕️ Personal Medical Profile

* View personal medical data
* Upload/see medical records
* Blood group-based styling features

### 💬 AI Medical Chatbot

* Real-time chatbot (via `chatbot.js`)
* Can answer basic medical questions
* Friendly conversational UI

### 🗺️ Map Integration

* Hospital/clinic map view
* Embedded map (`try_map4.html`)

### 🔐 Login Page

* Simple authentication UI (`login.html`)

---

## 🗂️ **Project Structure**

```
mede/
│
├── index.html            # Home page
├── login.html            # Login screen
├── hospital.html         # Hospital information page
├── appoinment1.html      # Appointment system
├── chatbot.html          # Medical chatbot interface
├── personal.html         # Personal profile
├── try_map4.html         # Map page
│
├── chatbot.js            # Chatbot logic
├── j.js                  # General JS functions
│
├── style.css             # Main styling
├── p.css                 # Profile styling
├── personal.css          # Personal dashboard
├── Blood.css             # Blood-related UI theme
│
├── images/               # Hospital pictures, logos, etc.
└── ...
```

---

## 🛠️ **Tech Stack**

| Category   | Technology                                                   |
| ---------- | ------------------------------------------------------------ |
| Frontend   | HTML5, CSS3, JavaScript                                      |
| Mapping    | Embedded Map (e.g., Google Maps / OpenStreetMap placeholder) |
| UI Assets  | Custom images, icons                                         |
| Deployment | Static hosting (GitHub Pages, Netlify, Vercel, etc.)         |

---

## 🧪 **How to Run Locally**

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Hariprasath191/mede.git
```

### 2️⃣ Open the folder

```bash
cd mede
```

### 3️⃣ Run using a local server (recommended)

#### Option A — Python

```bash
python3 -m http.server 8000
```

Then open:
👉 [http://localhost:8000](http://localhost:8000)

#### Option B — VS Code Live Server

1. Install the *Live Server* extension
2. Right-click `index.html` → **Open with Live Server**

---

## 📸 **Screenshots (Add yours here)**

You can place screenshots in `/images/screenshots/` and update this section:

| Page        | Screenshot                                         |
| ----------- | -------------------------------------------------- |
| Homepage    | ![Home](images/screenshots/home.png)               |
| Chatbot     | ![Chatbot](images/screenshots/chatbot.png)         |
| Appointment | ![Appointment](images/screenshots/appointment.png) |

---

## 📚 **Future Improvements (Roadmap)**

* [ ] Backend integration (Django / Node.js / Firebase)
* [ ] Real user authentication
* [ ] Doctor dashboard
* [ ] Patient medical history database
* [ ] AI chatbot using real medical LLM APIs
* [ ] Progressive Web App (PWA) support
* [ ] Dark mode

---

## 🤝 **Contributing**

We welcome contributions!

1. **Fork** the repo
2. Create a branch:

   ```bash
   git checkout -b feature-xyz
   ```
3. Commit your changes:

   ```bash
   git commit -m "Added new feature"
   ```
4. Push to your branch:

   ```bash
   git push origin feature-xyz
   ```
5. Open a **Pull Request**

---

## 📄 **License**

Add your preferred license here (MIT recommended).

Example:

```
This project is licensed under the MIT License.
```

---

## 🌟 **Support**

If you like this project, give it a ⭐ on GitHub!
Have questions? Want improvements? Just ask — I can help you extend the project further.
