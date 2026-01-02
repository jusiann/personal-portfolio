# Kişisel Portfolyo Web Sitesi

Bu proje, React ve Vite kullanılarak geliştirilmiş kişisel bir portfolyo web sitesidir. Yazılım/bilişim alanında kariyer hedefleyen bir öğrencinin profesyonel kimliğini yansıtmak amacıyla tasarlanmıştır.

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

```bash
# Proje dizinine git
cd my-portfolio

# Bağımlılıkları yükle
npm install

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

## Proje Yapısı

```
my-portfolio/
├── src/
│   ├── assets/              # Statik dosyalar (görseller vb.)
│   ├── components/          # React bileşenleri
│   │   ├── ContactCard.jsx
│   │   ├── CrimsonWebBackground.jsx
│   │   ├── Footer.jsx
│   │   ├── HomeCard.jsx
│   │   ├── LanguageToggle.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── PageTransition.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ResumeCard.jsx
│   │   ├── SkillsCard.jsx
│   │   ├── SocialLinks.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── TypingEffect.jsx
│   ├── context/             # Context API dosyaları
│   │   ├── LanguageContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/                # Mock data dosyaları
│   │   ├── locales/         # Dil dosyaları (tr.json, en.json)
│   │   ├── profile.json
│   │   ├── projects.json
│   │   └── skills.json
│   ├── lib/                 # Yardımcı fonksiyonlar
│   ├── pages/               # Sayfa bileşenleri
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── Skills.jsx
│   ├── App.jsx              # Ana uygulama bileşeni
│   ├── main.jsx             # Uygulama giriş noktası
│   └── index.css            # Global stiller
├── package.json
└── vite.config.js
```

## Kullanılan Teknolojiler

### Temel Teknolojiler
| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| React | 19.1.1 | UI geliştirme kütüphanesi |
| Vite | 7.1.7 | Build aracı ve geliştirme sunucusu |
| React Router DOM | 7.9.5 | Sayfa yönlendirmeleri |

### UI ve Stil
| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| Tailwind CSS | 4.1.17 | Utility-first CSS framework |
| Bootstrap | 5.3.8 | CSS framework |
| React Bootstrap | 2.10.10 | Bootstrap React bileşenleri |
| Framer Motion | 12.23.24 | Animasyon kütüphanesi |

### Araçlar ve Yardımcılar
| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| i18next | 25.6.0 | Çoklu dil desteği |
| react-i18next | 16.2.1 | React için i18next entegrasyonu |
| EmailJS | 4.4.1 | E-posta gönderimi |
| clsx | 2.1.1 | Koşullu className yönetimi |
| tailwind-merge | 3.3.1 | Tailwind sınıf birleştirme |

### İkonlar
| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| Lucide React | 0.553.0 | İkon kütüphanesi |
| React Icons | 5.5.0 | Popüler ikon setleri |
| Simple Icons | 15.21.0 | Marka ikonları |

## Özellikler

- **Tema Desteği** - Dark/Light mode geçişi (Local Storage ile kalıcı)
- **Çoklu Dil** - Türkçe/İngilizce dil desteği (Local Storage ile kalıcı)
- **Responsive Tasarım** - Mobil uyumlu arayüz
- **Sayfa Geçişleri** - Framer Motion ile animasyonlu geçişler
- **İletişim Formu** - EmailJS entegrasyonu ile çalışan form
- **CV İndirme** - PDF formatında CV indirme

## Sayfalar

| Sayfa | Route | Açıklama |
|-------|-------|----------|
| Ana Sayfa | `/` | Hero section, profil ve sosyal medya |
| Hakkımda | `/resume` | Biyografi, eğitim ve deneyim |
| Yetenekler | `/skills` | Teknik beceriler ve seviye göstergeleri |
| Projeler | `/projects` | Proje kartları ve filtreleme |
| İletişim | `/contact` | İletişim formu |
