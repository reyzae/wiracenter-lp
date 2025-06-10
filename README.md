# WiraCenter

WiraCenter adalah platform web untuk berbagi pengetahuan, proyek, dan solusi digital. Website ini menyediakan artikel, showcase proyek, dan berbagai tools yang berguna untuk pengembangan skills di bidang teknologi.

## 🚀 Fitur Utama

- **Beranda** - Landing page dengan overview platform
- **Tentang** - Informasi tentang visi, misi, dan nilai-nilai WiraCenter
- **Artikel** - Kumpulan artikel dan tutorial seputar teknologi
- **Proyek** - Showcase karya dan proyek digital
- **Tools** - Kumpulan utilities dan tools berguna (akan dikembangkan)
- **Kontak** - Form kontak dan informasi komunikasi

## 📁 Struktur Proyek

```
wiracenter/
│
├── index.html              # Halaman utama
├── about.html              # Halaman tentang
├── contact.html            # Halaman kontak
├── tools/                  # Direktori untuk tools (kosong, akan diisi)
├── articles/
│   └── index.html          # Halaman daftar artikel
├── projects/
│   └── index.html          # Halaman daftar proyek
├── assets/
│   ├── css/
│   │   └── style.css       # Stylesheet utama
│   ├── js/
│   │   └── main.js         # JavaScript utama
│   └── img/                # Direktori gambar (kosong)
└── README.md               # Dokumentasi proyek
```

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur dan markup
- **CSS3** - Styling dan layout dengan Flexbox/Grid
- **JavaScript (ES6+)** - Interaktivitas dan functionality
- **Responsive Design** - Mobile-first approach

## ✨ Fitur CSS

- **Responsive Design** - Tampil optimal di semua ukuran layar
- **Modern Layout** - Menggunakan CSS Grid dan Flexbox
- **Smooth Animations** - Transisi yang halus dan menarik
- **Custom Components** - Komponen UI yang konsisten
- **Dark/Light Theme Ready** - Siap untuk implementasi theme switching

## 🎯 Fitur JavaScript

- **Form Validation** - Validasi real-time untuk form kontak
- **Smooth Scrolling** - Navigasi yang halus antar section
- **Mobile Navigation** - Menu responsif untuk perangkat mobile
- **Intersection Observer** - Animasi saat scroll
- **Error Handling** - Penanganan error yang robust
- **Performance Monitoring** - Monitoring performa halaman

## 🚀 Cara Menggunakan

1. **Clone atau download** proyek ini
2. **Buka `index.html`** di browser untuk melihat website
3. **Kustomisasi konten** sesuai kebutuhan Anda
4. **Tambahkan gambar** ke folder `assets/img/`
5. **Kembangkan tools** di folder `tools/`

## 📝 Panduan Pengembangan

### Menambahkan Halaman Baru

1. Buat file HTML baru di root directory
2. Copy struktur dari file yang sudah ada
3. Update navigation di semua halaman
4. Tambahkan styling khusus jika diperlukan

### Menambahkan Artikel

1. Buat file HTML baru di folder `articles/`
2. Update `articles/index.html` untuk menambahkan link
3. Gunakan struktur yang konsisten

### Menambahkan Proyek

1. Buat showcase baru di `projects/index.html`
2. Tambahkan gambar project ke `assets/img/`
3. Update metadata proyek

### Kustomisasi Styling

1. Edit `assets/css/style.css`
2. Gunakan CSS custom properties untuk konsistensi
3. Maintain responsive breakpoints

## 🎨 Color Palette

- **Primary Blue**: `#3498db`
- **Dark Blue**: `#2980b9`
- **Success Green**: `#2ecc71`
- **Dark Green**: `#27ae60`
- **Text Dark**: `#2c3e50`
- **Text Gray**: `#555`
- **Background Light**: `#f8f9fa`
- **White**: `#ffffff`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔧 Konfigurasi

### Meta Tags
Setiap halaman sudah dilengkapi dengan meta tags dasar:
- Charset UTF-8
- Viewport untuk responsive
- Title yang SEO-friendly

### Performance
- Optimized CSS dan JavaScript
- Lazy loading ready
- Minimal external dependencies

## 📊 Browser Support

- Chrome (modern versions)
- Firefox (modern versions)
- Safari (modern versions)
- Edge (modern versions)

## 🤝 Kontribusi

Jika Anda ingin berkontribusi:

1. Fork repository ini
2. Buat branch untuk fitur baru (`git checkout -b feature/nama-fitur`)
3. Commit perubahan (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin feature/nama-fitur`)
5. Buat Pull Request

## 📄 Lisensi

Proyek ini bersifat open source dan dapat digunakan untuk keperluan personal maupun komersial.

## 📞 Kontak

- **Email**: info@wiracenter.com
- **Website**: [wiracenter.com](#)
- **Social Media**: [Link ke media sosial]

## 🔄 Changelog

### Version 1.0.0 (2025-06-02)
- Initial release
- Basic website structure
- Responsive design
- Contact form functionality
- Article dan project showcase
- Mobile navigation

## 🚧 Roadmap

- [ ] Implementasi CMS untuk artikel
- [ ] Blog functionality
- [ ] User authentication
- [ ] Comment system
- [ ] Search functionality
- [ ] Dark/Light theme toggle
- [ ] Multilingual support
- [ ] PWA features
- [ ] Performance optimization
- [ ] SEO enhancement

---

**WiraCenter** - Platform untuk berbagi pengetahuan dan inovasi digital 🚀
=======
# wiracenter-lp
Wiracenter Landing Page [Final] 



===========================================================

Wiracenter Static Website
=========================
Personal digital space for innovation, knowledge, and productivity tools.
This project uses static HTML/CSS/JS with Decap (Netlify) CMS for easy content management.

--------------------------------------------------
DEPLOYMENT & MAINTENANCE
--------------------------------------------------
- Live Site    : https://wiracenter.netlify.app/
- CMS Admin    : /admin (protected, multi-user via Netlify Identity)
- GitHub Repo  : https://github.com/username/wiracenter   <-- ganti sesuai repo kamu

--------------------------------------------------
FOLDER STRUCTURE
--------------------------------------------------
/
├── index.html
├── about.html
├── articles/
│   └── index.html
├── projects/
│   └── index.html
├── tools.html
├── contact.html
├── admin/
│   ├── index.html
│   └── config.yml
├── content/
│   ├── articles/
│   ├── projects/
│   └── tools/
├── assets/
│   ├── css/
│   ├── js/
│   └── images/

--------------------------------------------------
GIT WORKFLOW (Daily Usage)
--------------------------------------------------
* Jalankan perintah di terminal pada folder project kamu.

1. Cek status perubahan:
   git status

2. Tambahkan semua perubahan ke staging:
   git add .

3. Commit perubahan:
   git commit -m "Deskripsi singkat perubahan"

4. Push ke GitHub:
   git push origin main

5. Tarik perubahan terbaru dari GitHub (jika multi-device/tim):
   git pull origin main

--------------------------------------------------
SETUP BARU (Jika Belum Ada Repo Git)
--------------------------------------------------
git init
git remote add origin https://github.com/username/repo.git
git add .
git commit -m "Initial commit"
git push -u origin main

--------------------------------------------------
TROUBLESHOOTING GIT
--------------------------------------------------
- Gagal push (karena ada perubahan di remote):
    git pull origin main --allow-unrelated-histories
    (resolve conflict jika ada, lalu add + commit + push ulang)

- Merge conflict:
    Selesaikan manual file bermasalah, lalu:
    git add .
    git commit -m "fix conflict"
    git push origin main

--------------------------------------------------
MAINTENANCE CMS
--------------------------------------------------
- Tambah/edit artikel, project, tools:
    Login ke /admin (Decap CMS) -> create content -> publish
    Konten otomatis masuk ke /content/ dan repo, site auto-deploy

- Edit layout/frontend:
    Edit file di lokal, push ke GitHub, site auto deploy

--------------------------------------------------
CATATAN
--------------------------------------------------
- Semua perubahan content yang diupdate dari CMS otomatis commit ke repo.
- Kalau error login CMS, cek config.yml dan status Netlify Identity.

--------------------------------------------------
CREDITS
--------------------------------------------------
Built and managed by Reyza Wirakusuma & contributors.
Powered by Decap CMS (https://decapcms.org/), Netlify (https://netlify.com/).
