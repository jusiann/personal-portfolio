# Personal Portfolio

> Modern ve şık tasarıma sahip kişisel portfolyo web sitesi.

![License](https://img.shields.io/github/license/jusiann/personal-portfolio)
![Stars](https://img.shields.io/github/stars/jusiann/personal-portfolio?style=social)

---

## İçindekiler

- [Hakkında](#hakkında)
- [Özellikler](#özellikler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Konfigürasyon](#konfigürasyon)
- [İletişim](#iletişim)

---

## Hakkında

Yazılım geliştirici kimliğinizi profesyonel bir şekilde yansıtan modern portfolyo web sitesi. Projelerinizi, yeteneklerinizi ve deneyimlerinizi etkileyici animasyonlar ve responsive tasarım ile sergileyin.

**Teknoloji Yığını:**

- **Dil:** JavaScript (ES6+)
- **Framework:** React 19.1.1 + Vite 7.1.7
- **Stil:** Tailwind CSS 4.1.17 + Bootstrap 5.3.8
- **Animasyon:** Framer Motion 12.23.24
- **Diğer:** i18next, EmailJS, React Router DOM

---

## Özellikler

- **Tema Desteği** — Dark/Light mode geçişi (LocalStorage ile kalıcı)
- **Çoklu Dil** — Türkçe/İngilizce dil desteği
- **Sayfa Animasyonları** — Framer Motion ile akıcı geçişler
- **İletişim Formu** — EmailJS entegrasyonu ile çalışan form
- **CV İndirme** — PDF formatında özgeçmiş paylaşımı
- **Responsive Tasarım** — Tüm cihazlara uyumlu arayüz
- **Typing Effect** — Dinamik yazı efekti
- **Sosyal Linkler** — GitHub, LinkedIn ve diğer platformlar

---

## Kurulum

### Gereksinimler

- Node.js >= 18
- npm veya yarn

### Hızlı Başlangıç

```bash
# Repoyu klonla
git clone https://github.com/jusiann/personal-portfolio.git
cd personal-portfolio/my-portfolio

# Bağımlılıkları yükle
npm install

# Ortam değişkenlerini ayarla
cp .env.example .env
# EmailJS bilgilerinizi .env dosyasına ekleyin

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açarak projeyi görüntüleyebilirsiniz.

### Diğer Komutlar

```bash
# Üretim derlemesi oluştur
npm run build

# Derlemeyi önizle
npm run preview

# Kod kalitesi kontrolü
npm run lint
```

---

## Kullanım

### Sayfalar

| Sayfa | Yol | Açıklama |
|-------|-----|----------|
| Ana Sayfa | `/` | Hero section, profil ve sosyal medya |
| Özgeçmiş | `/resume` | Biyografi, eğitim ve deneyim |
| Yetenekler | `/skills` | Teknik beceriler ve seviye göstergeleri |
| Projeler | `/projects` | Proje kartları ve detayları |
| İletişim | `/contact` | EmailJS ile çalışan iletişim formu |

### Özelleştirme

Portfolyonuzu kişiselleştirmek için:

1. `src/data/profile.json` — Kişisel bilgiler
2. `src/data/projects.json` — Proje listesi
3. `src/data/skills.json` — Yetenekler
4. `src/data/locales/` — Dil dosyaları (tr.json, en.json)

---

## Konfigürasyon

### Ortam Değişkenleri (.env)

| Değişken | Açıklama |
|----------|----------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS servis ID'si |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID'si |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

### Tema ve Dil

| Dosya | Açıklama |
|-------|----------|
| `src/context/ThemeContext.jsx` | Tema yönetimi |
| `src/context/LanguageContext.jsx` | Dil yönetimi |
| `src/data/locales/tr.json` | Türkçe çeviriler |
| `src/data/locales/en.json` | İngilizce çeviriler |

---

## İletişim

**Adil Efe** — insta:adlefee — adilefe257@gmail.com

Proje: [https://github.com/jusiann/personal-portfolio](https://github.com/jusiann/personal-portfolio)
