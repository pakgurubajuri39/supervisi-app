// Data Master - SUDAH DIURUTKAN
const DAFTAR_GURU = [
    "Aji Wibowo, S.Pd",
    "Alma Arifany, S.Li",
    "Branka Yohanes F. Sitompul, S.Th",
    "Budi Setiawan, M.Pd",
    "Deni Lamria, S.H Gr",
    "Drs. Sumanto",
    "Endang Ruhimat, S.HI",
    "Fernansius, S.S, M.Pd",
    "Gunawan Surya Kusuma, S.T, M.M",
    "H. Gustian Maskat, S.Ag, M.M",
    "Husnul Khotimah, S.Ag",
    "Jasmine Rifdah Nafilla, S.Kom",
    "Lilik Hendrayanto, S.Pd Gr",
    "Luky, S.Pt",
    "M. Arbi Maulana, S.Pd",
    "Ms. Grace Sihombing, S.Pd",
    "Muhammad Naufal Luthfi, S.Pd",
    "Muslihah Amalia, S.Pd",
    "Nuraeni, S.Pd",
    "Nuris Watunnaba, S.Pd",
    "Reynard Cahyono, B.Sc",
    "Rina Ajizah, S.Mat",
    "Sulis Sulastri, S.Pd",
    "Widiya Dewi Lestari, S.Kom"
];

const DAFTAR_SUPERVISOR = [
    "Dr. Riza Pertiwi, M.Pd",
    "Dra. Hj. Brimayanti", 
    "Luky, S.Pt"
];

const DAFTAR_MAPEL = [
    "Bahasa Indonesia",
    "Bahasa Inggris",
    "Bahasa Inggris TK. Lanjut", 
    "Bahasa Korea",
    "Bahasa Sunda",
    "Biologi",
    "BK",
    "Ekonomi",
    "Fisika",
    "Geografi",
    "Informatika",
    "Kewirausahaan",
    "Kimia",
    "Matematika",
    "Matematika Tk. Lanjut",
    "Pendidikan Agama Islam",
    "Pendidikan Agama Kristen",
    "Pendidikan Jasmani Olah Raga & Kesehatan",
    "Pendidikan Kewarganegaraan",
    "Sejarah Indonesia",
    "Sejarah Peminatan", 
    "Seni Budaya dan Kesenian",
    "Sosiologi"
];

const DAFTAR_KELAS_FASE = [
    "10 SMA A/Fase E", 
    "10 SMA B/Fase E", 
    "11 SMA A Umum/Fase F",
    "11 SMA A1/Fase F",
    "11 SMA A2/Fase F",
    "11 SMA B Umum/Fase F",
    "11 SMA B/Fase F", 
    "12 SMA IPA/Fase F", 
    "12 SMA IPS/Fase F"
];

// Konfigurasi Rubrik - SUDAH DIPERBAIKI dengan sistem poin
const RUBRIK = {
    "1. Perencanaan Pembelajaran": [
        {
            "indikator": "Tujuan pembelajaran jelas & sesuai Capaian Pembelajaran (CP)",
            "checklists": [
                "Tujuan pembelajaran disampaikan di awal kegiatan",
                "Tujuan pembelajaran dirumuskan dengan kata kerja operasional (sesuai CP/Fase)",
                "Tujuan dikaitkan dengan manfaat nyata bagi siswa (kontekstual)",
                "Tujuan ditulis/ditampilkan secara visual (di papan tulis/media digital)"
            ],
            "maxScore": 4 // Maksimal 4 poin
        },
        {
            "indikator": "Integrasi 8 dimensi Profil Lulusan",
            "checklists": [
                "Guru mencantumkan minimal satu dimensi Profil Lulusan dalam RPP/ATP",
                "Keterkaitan dimensi dengan kegiatan pembelajaran dijelaskan secara eksplisit",
                "Nilai karakter yang diusung tampak dalam aktivitas atau proyek siswa",
                "Guru memberi penguatan sikap sesuai dimensi profil lulusan selama pembelajaran"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Kegiatan pembelajaran sesuai model/metode yang dipilih",
            "checklists": [
                "Langkah pembelajaran sesuai sintaks model yang dipilih",
                "Aktivitas siswa mencerminkan penerapan model tersebut",
                "Waktu dan alur kegiatan dirancang proporsional (pendahuluan–inti–penutup)",
                "Refleksi/penilaian selaras dengan tujuan model pembelajaran"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Media & instrumen asesmen sudah dipersiapkan",
            "checklists": [
                "Media pembelajaran relevan",
                "Media sudah disiapkan sebelumnya", 
                "Instrumen asesmen",
                "Media dan Asesmen"
            ],
            "maxScore": 4
        }
    ],
    "2. Pendahuluan": [
        {
            "indikator": "Pembukaan, salam, doa - Persiapan fisik dan psikis peserta didik",
            "checklists": [
                "Salam dan sapa", 
                "Doa", 
                "Presensi", 
                "Pengamatan kondisi kelas/siswa"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Apersepsi & pemantik (mengaitkan pengetahuan awal)",
            "checklists": [
                "Mengecek pemahaman siswa materi prasyarat",
                "Mengkaitkan materi dengan pengetahuan sebelumnya",
                "Memberikan motivasi",
                "Membuat suasana awal pembelajaran yang menyenangkan",
                "Membangun optimisme siswa"
            ],
            "maxScore": 4 // Tetap maksimal 4 meskipun ada 5 checklist
        },
        {
            "indikator": "Asesmen diagnostik (mengetahui kesiapan siswa)",
            "checklists": [
                "Menayangkan media pengantar (gambar, cerita atau video)",
                "Memberikan pertanyaan inti/Pemantik", 
                "Menyampaikan tujuan",
                "Menyampaikan Pembelajaran bermakna/Kontektual"
            ],
            "maxScore": 4
        }
    ],
    "3. Kegiatan Inti": [
        {
            "indikator": "Pembelajaran berdiferensiasi sesuai kebutuhan siswa",
            "checklists": [
                "Memiliki data asesmen awal pembelajaran",
                "Guru memahami perbedaan karakteristik belajar siswa",
                "Guru memahami perbedaan kompetensi awal siswa", 
                "Guru melaksanakan pembelajaran sesuai karakteristik siswa"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Menyajikan materi mudah diterima",
            "checklists": [
                "Dengan bahasa yang mudah diterima",
                "Sesuai dengan tingkat kemampuan siswa",
                "Dari yang mudah ke yang sulit",
                "Dari yang kongkrit ke yang abstrak"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Strategi aktif (diskusi, proyek, gallery walk, dll.)",
            "checklists": [
                "Pembelajaran yang menyenangkan",
                "Menggunakan metode yang bervariatif",
                "Menggunakan berbagai sumber",
                "Mengembangkan pembelajaran yang efektif"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Pemanfaatan TIK & media digital",
            "checklists": [
                "Menggunakan kelas virtual",
                "Menggunakan media presentasi", 
                "Menggunakan media suara/audio",
                "Menggunakan media video",
                "Menggunakan media Interaktif", 
                "Menggunakan media yang menyenangkan",
                "Menggunakan media lainnya"
            ],
            "maxScore": 4 // Tetap maksimal 4 meskipun ada 7 checklist
        },
        {
            "indikator": "Guru berperan sebagai fasilitator pembelajaran",
            "checklists": [
                "Menguasai materi yang diajarkan",
                "Menggunakan model/pendekatan yang tepat",
                "Mampu menyelesaikan permasalahan dikelas",
                "Menunjukan kemampuan berpikir kritis",
                "Menunjukan kemampuan berpikir kreatif", 
                "Menunjukan kompetensi lainnya"
            ],
            "maxScore": 4 // Tetap maksimal 4 meskipun ada 6 checklist
        },
        {
            "indikator": "Siswa aktif, kolaboratif, dan berpikir kritis",
            "checklists": [
                "Guru melakukan interaksi tanya jawab",
                "Siswa aktif merespon pertanyaan",
                "Siswa aktif bertanya",
                "Guru merespon dengan kualitas baik"
            ],
            "maxScore": 4
        }
    ],
    "4. Penutup": [
        {
            "indikator": "Refleksi bersama siswa",
            "checklists": [
                "Ada kegiatan refleksi proses pembelajaran",
                "Ada kegiatan refleksi materi pembelajaran", 
                "Siswa merespon aktif kegiatan refleksi",
                "Guru memberikan penguatan hasil diskusi refleksi"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Kesimpulan pembelajaran disusun bersama", 
            "checklists": [
                "Guru mendorong siswa mengambil kesimpulan",
                "Siswa merespon pengambilan kesimpulan",
                "Terjadi diskusi pengambilan kesimpulan",
                "Kesimpulan diambil bersama dan dikuatkan oleh guru"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Penguatan & tindak lanjut pembelajaran",
            "checklists": [
                "Guru memberi tugas untuk menguatkan penguasaan materi hari ini",
                "Guru menjelaskan materi atau topik yang akan datang",
                "Guru mengkaitkan materi hari ini dengan materi yang akan datang", 
                "Guru memberi saran agar siswa mempersiapkan untuk materi yang akan datang"
            ],
            "maxScore": 4
        }
    ],
    "5. Pengelolaan Kelas": [
        {
            "indikator": "Tata ruang sesuai dengan kegiatan pembelajaran",
            "checklists": [
                "Tata ruang disesuaikan dengan model/metode pembelajaran",
                "Penempatan guru dan siswa memungkinkan interaksi dua arah",
                "Area kerja siswa rapi dan mudah berpindah sesuai aktivitas",
                "Terdapat akses mudah terhadap media atau sumber belajar"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Suasana kelas kondusif & nyaman",
            "checklists": [
                "Guru menciptakan iklim saling menghargai dan ramah",
                "Siswa merasa aman menyampaikan pendapat",
                "Kondisi fisik kelas (kebersihan, pencahayaan, ventilasi) baik", 
                "Guru menegur/mengarahkan siswa dengan cara positif dan mendidik"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Manajemen waktu efektif",
            "checklists": [
                "Pembukaan, inti, dan penutup sesuai waktu yang direncanakan",
                "Transisi antar kegiatan berjalan lancar tanpa waktu terbuang",
                "Guru mengatur durasi aktivitas sesuai kebutuhan siswa",
                "Kegiatan selesai tepat waktu dengan hasil belajar tercapai"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Semua siswa terlibat dalam pembelajaran",
            "checklists": [
                "Guru memberikan kesempatan yang merata kepada seluruh siswa",
                "Ada variasi strategi agar semua siswa berpartisipasi",
                "Guru memperhatikan dan menindaklanjuti siswa yang pasif",
                "Siswa menunjukkan antusiasme dan keterlibatan nyata dalam kegiatan"
            ],
            "maxScore": 4
        }
    ],
    "6. Penilaian Pembelajaran": [
        {
            "indikator": "Asesmen beragam (as, for, of learning)",
            "checklists": [
                "Asesmen dilakukan selama proses (for learning)",
                "Asesmen juga dilakukan di akhir kegiatan (of learning)", 
                "Asesmen digunakan untuk memandu langkah berikutnya (as learning)",
                "Variasi instrumen: observasi, proyek, kuis, jurnal, refleksi, dsb."
            ],
            "maxScore": 4
        },
        {
            "indikator": "Instrumen penilaian jelas (rubrik, ceklis, dsb.)",
            "checklists": [
                "Instrumen disiapkan sebelum kegiatan dimulai",
                "Rubrik/ceklis menunjukkan kriteria dan indikator yang terukur",
                "Siswa memahami kriteria penilaian yang digunakan",
                "Instrumen digunakan secara konsisten selama asesmen"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Fokus penilaian pada proses & hasil belajar",
            "checklists": [
                "Guru mengamati proses kerja/berpikir siswa",
                "Penilaian mencakup keterampilan, sikap, dan pengetahuan",
                "Siswa mendapat kesempatan memperbaiki hasil berdasarkan proses", 
                "Guru menilai secara adil dan proporsional antara proses dan hasil"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Umpan balik (feedback) konstruktif diberikan",
            "checklists": [
                "Umpan balik diberikan segera setelah kegiatan atau tugas",
                "Disampaikan dengan bahasa positif dan memotivasi",
                "Menjelaskan kelebihan dan area yang perlu diperbaiki",
                "Siswa diberi kesempatan menindaklanjuti atau memperbaiki hasilnya"
            ],
            "maxScore": 4
        }
    ],
    "7. Nilai Tambah / Inovasi": [
        {
            "indikator": "Pembelajaran kontekstual sesuai minat/isu siswa",
            "checklists": [
                "Materi dikaitkan dengan situasi kehidupan nyata siswa",
                "Guru menggunakan contoh kasus atau fenomena kontekstual",
                "Siswa dapat mengekspresikan pendapat sesuai pengalaman pribadi",
                "Aktivitas pembelajaran menumbuhkan relevansi dan makna belajar"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Kolaborasi dengan orang tua/komunitas",
            "checklists": [
                "Ada komunikasi aktif dengan orang tua tentang kegiatan belajar",
                "Guru mengundang partisipasi komunitas (narasumber, mitra, dsb.)",
                "Produk atau proyek siswa melibatkan dukungan eksternal", 
                "Kolaborasi memberi nilai tambah pada hasil belajar siswa"
            ],
            "maxScore": 4
        },
        {
            "indikator": "Integrasi nilai karakter & spiritual",
            "checklists": [
                "Guru mencontohkan sikap positif dalam perilaku sehari-hari",
                "Aktivitas pembelajaran mengandung nilai karakter",
                "Siswa diberi ruang untuk refleksi nilai-nilai kehidupan atau spiritual",
                "Penilaian mencakup aspek sikap dan karakter"
            ],
            "maxScore": 4
        }
    ]
};

// Inisialisasi Aplikasi
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    // Setup event listener untuk login
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });
    
    // Set tanggal hari ini
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('tanggal_supervisi').value = today;
    
    // Populate dropdowns
    populateDropdown('nama_guru', DAFTAR_GURU);
    populateDropdown('mapel', DAFTAR_MAPEL);
    populateDropdown('kelas_fase', DAFTAR_KELAS_FASE);
    populateDropdown('nama_supervisor', DAFTAR_SUPERVISOR);
    
    // Generate rubrik
    generateRubrik();
    
    // Load saved draft
    loadDraft();
    
    // Cek jika sudah login
    checkLoginStatus();
}

function populateDropdown(elementId, data) {
    const select = document.getElementById(elementId);
    select.innerHTML = '<option value="">Pilih...</option>';
    data.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
    });
}

function generateRubrik() {
    const container = document.getElementById('rubrik-container');
    container.innerHTML = '';
    
    for (const [komponen, indikators] of Object.entries(RUBRIK)) {
        const komponenDiv = document.createElement('div');
        komponenDiv.className = 'komponen-group';
        
        const komponenTitle = document.createElement('h3');
        komponenTitle.textContent = komponen;
        komponenDiv.appendChild(komponenTitle);
        
        indikators.forEach((indikator, idx) => {
            const indikatorCard = document.createElement('div');
            indikatorCard.className = 'indikator-card';
            
            const header = document.createElement('div');
            header.className = 'indikator-header';
            
            const title = document.createElement('h4');
            title.textContent = indikator.indikator;
            header.appendChild(title);
            
            const skorDisplay = document.createElement('span');
            skorDisplay.className = 'skor-display';
            skorDisplay.id = `skor_${komponen.replace(/\s+/g, '_')}_${idx}`;
            skorDisplay.textContent = 'Skor: 0/4';
            header.appendChild(skorDisplay);
            
            indikatorCard.appendChild(header);
            
            const checklistGroup = document.createElement('div');
            checklistGroup.className = 'checklist-group';
            
            indikator.checklists.forEach((checklist, checklistIdx) => {
                const checklistItem = document.createElement('div');
                checklistItem.className = 'checklist-item';
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `check_${komponen.replace(/\s+/g, '_')}_${idx}_${checklistIdx}`;
                checkbox.dataset.komponen = komponen;
                checkbox.dataset.indikator = idx;
                checkbox.dataset.checklist = checklistIdx;
                checkbox.addEventListener('change', () => {
                    hitungSkorIndikator(komponen, idx);
                    saveDraft();
                });
                
                const label = document.createElement('label');
                label.htmlFor = checkbox.id;
                label.textContent = checklist;
                
                checklistItem.appendChild(checkbox);
                checklistItem.appendChild(label);
                checklistGroup.appendChild(checklistItem);
            });
            
            indikatorCard.appendChild(checklistGroup);
            komponenDiv.appendChild(indikatorCard);
        });
        
        container.appendChild(komponenDiv);
    }
}

// FUNGSI HITUNG SKOR YANG SUDAH DIPERBAIKI
function hitungSkorIndikator(komponen, indikatorIndex) {
    const indikator = RUBRIK[komponen][indikatorIndex];
    const checkboxes = document.querySelectorAll(
        `input[data-komponen="${komponen}"][data-indikator="${indikatorIndex}"]`
    );
    
    let checkedCount = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) checkedCount++;
    });
    
    // SETIAP CHECKLIST YANG DICENTANG = 1 POIN
    let skor = checkedCount;
    
    // JIKA LEBIH DARI MAKSIMAL, SET KE MAKSIMAL
    const maxScore = indikator.maxScore || 4;
    if (skor > maxScore) {
        skor = maxScore;
    }
    
    // Update display skor
    const skorDisplay = document.getElementById(`skor_${komponen.replace(/\s+/g, '_')}_${indikatorIndex}`);
    if (skorDisplay) {
        skorDisplay.textContent = `Skor: ${skor}/${maxScore}`;
        skorDisplay.className = `skor-display skor-${skor}`;
    }
    
    return skor;
}

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Default login (tidak ditampilkan di UI)
    if (username === 'pakguru' && password === 'bajuri39') {
        // Simpan status login di localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        
        // Tampilkan aplikasi utama
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('mainApp').classList.remove('hidden');
    } else {
        alert('Username atau password salah!');
    }
}

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('mainApp').classList.remove('hidden');
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    document.getElementById('loginModal').style.display = 'flex';
    document.getElementById('mainApp').classList.add('hidden');
    
    // Reset form
    document.getElementById('loginForm').reset();
}

function openTab(tabName) {
    // Sembunyikan semua tab content
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    
    // Non-aktifkan semua tab buttons
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    
    // Tampilkan tab yang dipilih
    document.getElementById(tabName).classList.add('active');
    
    // Aktifkan button yang dipilih
    event.currentTarget.classList.add('active');
    
    // Jika pindah ke tab laporan, generate preview
    if (tabName === 'laporan') {
        generateLaporanPreview();
    }
}

function kumpulkanDataIdentitas() {
    return {
        nama_guru: document.getElementById('nama_guru').value,
        mapel: document.getElementById('mapel').value,
        kelas_fase: document.getElementById('kelas_fase').value,
        topik_materi: document.getElementById('topik_materi').value,
        jml_jam: document.getElementById('jml_jam').value,
        tanggal_supervisi: document.getElementById('tanggal_supervisi').value,
        nama_supervisor: document.getElementById('nama_supervisor').value
    };
}

function kumpulkanDataChecklist() {
    const data = {};
    
    for (const [komponen, indikators] of Object.entries(RUBRIK)) {
        indikators.forEach((indikator, idx) => {
            const key = `${komponen}_${idx}`;
            data[key] = [];
            
            indikator.checklists.forEach((checklist, checklistIdx) => {
                const checkbox = document.getElementById(`check_${komponen.replace(/\s+/g, '_')}_${idx}_${checklistIdx}`);
                data[key].push(checkbox ? checkbox.checked : false);
            });
        });
    }
    
    return data;
}

function generateLaporan() {
    const identitas = kumpulkanDataIdentitas();
    const checklists = kumpulkanDataChecklist();
    const analisis_kekuatan = document.getElementById('analisis_kekuatan').value;
    const analisis_perbaikan = document.getElementById('analisis_perbaikan').value;
    
    // Validasi data
    if (!identitas.nama_guru || !identitas.mapel || !identitas.kelas_fase) {
        alert('Harap lengkapi data identitas terlebih dahulu!');
        openTab('identitas');
        return;
    }
    
    showLoading(true);
    
    try {
        const laporanData = processLaporanData(identitas, checklists, analisis_kekuatan, analisis_perbaikan);
        tampilkanLaporan(laporanData);
        
        alert('Laporan berhasil di-generate!');
    } catch (error) {
        alert('Terjadi kesalahan: ' + error.message);
    } finally {
        showLoading(false);
    }
}

// FUNGSI PROCESS LAPORAN YANG SUDAH DIPERBAIKI
function processLaporanData(identitas, checklists, analisis_kekuatan, analisis_perbaikan) {
    // Hitung skor dengan sistem baru
    const skorKomponen = {};
    let totalSkor = 0;
    let totalIndikator = 0;
    let totalMaksimal = 0;
    
    for (const [komponen, indikators] of Object.entries(RUBRIK)) {
        skorKomponen[komponen] = 0;
        let indikatorCount = 0;
        
        indikators.forEach((indikator, idx) => {
            const key = `${komponen}_${idx}`;
            if (checklists[key]) {
                // Hitung skor berdasarkan jumlah checklist yang dicentang
                const checkedCount = checklists[key].filter(v => v).length;
                let skor = checkedCount;
                
                // Batasi skor maksimal
                const maxScore = indikator.maxScore || 4;
                if (skor > maxScore) {
                    skor = maxScore;
                }
                
                skorKomponen[komponen] += skor;
                totalSkor += skor;
                totalMaksimal += maxScore;
                indikatorCount++;
                totalIndikator++;
            }
        });
        
        if (indikatorCount > 0) {
            skorKomponen[komponen] = skorKomponen[komponen] / indikatorCount;
        }
    }
    
    // Hitung rata-rata
    const rataRataKeseluruhan = totalIndikator > 0 ? totalSkor / totalIndikator : 0;
    const kategoriKeseluruhan = kategoriNilai(rataRataKeseluruhan);
    
    return {
        identitas,
        skor_komponen: skorKomponen,
        total_skor: totalSkor,
        total_indikator: totalIndikator,
        total_maksimal: totalMaksimal,
        rata_rata: rataRataKeseluruhan,
        kategori: kategoriKeseluruhan,
        analisis_kekuatan,
        analisis_perbaikan,
        tanggal_generate: new Date().toLocaleString('id-ID')
    };
}

function kategoriNilai(r) {
    if (r < 2) return "Perlu Peningkatan";
    else if (r < 3) return "Cukup";
    else if (r < 3.5) return "Baik";
    return "Sangat Baik";
}

function tampilkanLaporan(laporan) {
    const preview = document.getElementById('laporanPreview');
    
    let html = `
        <div class="laporan-content">
            <div class="laporan-header">
                <h1>INSTRUMEN SUPERVISI PEMBELAJARAN</h1>
                <p><strong>SMA GENESIS MEDICARE</strong><br>Tahun Pelajaran 2025/2026</p>
            </div>
            
            <h2>A. Identitas Guru</h2>
            <table class="identity-table">
                <tr><td>Nama Guru</td><td>${laporan.identitas.nama_guru}</td></tr>
                <tr><td>Mata Pelajaran</td><td>${laporan.identitas.mapel}</td></tr>
                <tr><td>Kelas/Fase</td><td>${laporan.identitas.kelas_fase}</td></tr>
                <tr><td>Topik/Materi</td><td>${laporan.identitas.topik_materi}</td></tr>
                <tr><td>Jumlah Jam</td><td>${laporan.identitas.jml_jam}</td></tr>
                <tr><td>Tanggal Supervisi</td><td>${formatTanggal(laporan.identitas.tanggal_supervisi)}</td></tr>
                <tr><td>Nama Supervisor</td><td>${laporan.identitas.nama_supervisor}</td></tr>
            </table>
            
            <div class="score-summary">
                <h3>Ringkasan Nilai</h3>
                <p><strong>Total Skor:</strong> ${laporan.total_skor} dari ${laporan.total_maksimal} (maksimal)</p>
                <p><strong>Rata-rata Keseluruhan:</strong> ${laporan.rata_rata.toFixed(2)}</p>
                <p><strong>Kategori:</strong> <span class="badge ${laporan.kategori.toLowerCase().replace(' ', '-')}">${laporan.kategori}</span></p>
            </div>
            
            <h2>B. Rekapitulasi Skor per Komponen</h2>
            <table class="identity-table">
                <tr style="background-color: #1e3a8a; color: white;">
                    <th style="padding: 10px; text-align: left;">Komponen Penilaian</th>
                    <th style="padding: 10px; text-align: center;">Skor Rata-rata</th>
                    <th style="padding: 10px; text-align: center;">Kategori</th>
                </tr>
    `;
    
    for (const [komponen, skor] of Object.entries(laporan.skor_komponen)) {
        const kategori = kategoriNilai(skor);
        html += `
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">${komponen}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">${skor.toFixed(2)}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">
                    <span class="badge ${kategori.toLowerCase().replace(' ', '-')}">${kategori}</span>
                </td>
            </tr>
        `;
    }
    
    html += `
            </table>
            
            <h2>C. Analisis Kinerja Mendalam</h2>
            <div class="analisis-section">
                <h3>✅ Kekuatan yang Menonjol</h3>
                <div class="analisis-content">${formatAnalisis(laporan.analisis_kekuatan)}</div>
                
                <h3>🎯 Area Pengembangan untuk Pertumbuhan</h3>
                <div class="analisis-content">${formatAnalisis(laporan.analisis_perbaikan)}</div>
            </div>
            
            <div class="laporan-footer">
                <p><em>Laporan di-generate secara otomatis pada: ${laporan.tanggal_generate}</em></p>
                <p><strong>Dikembangkan oleh:</strong> Pak Guru Luky, S.Pt - Wakil Kepala Sekolah Bidang Kurikulum SMA Genesis Medicare</p>
            </div>
        </div>
    `;
    
    preview.innerHTML = html;
}

function formatTanggal(tanggal) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(tanggal).toLocaleDateString('id-ID', options);
}

function formatAnalisis(text) {
    if (!text) return '<p class="text-muted">Tidak ada analisis</p>';
    return text.split('\n').map(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
            return `<p style="margin: 5px 0; padding-left: 10px;">${trimmed}</p>`;
        }
        return `<p style="margin: 8px 0;">${trimmed}</p>`;
    }).join('');
}

function generateLaporanPreview() {
    const identitas = kumpulkanDataIdentitas();
    if (identitas.nama_guru && identitas.mapel) {
        const preview = document.getElementById('laporanPreview');
        preview.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <i class="fas fa-check-circle" style="font-size: 3em; color: #10b981; margin-bottom: 20px;"></i>
                <h3>Data Siap untuk Generate Laporan</h3>
                <p>Klik tombol "Generate Laporan" untuk membuat laporan lengkap</p>
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px; text-align: left;">
                    <p><strong>Guru:</strong> ${identitas.nama_guru}</p>
                    <p><strong>Mapel:</strong> ${identitas.mapel}</p>
                    <p><strong>Kelas:</strong> ${identitas.kelas_fase}</p>
                    <p><strong>Topik:</strong> ${identitas.topik_materi}</p>
                </div>
            </div>
        `;
    }
}

async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const laporanContent = document.querySelector('.laporan-content');
    
    if (!laporanContent) {
        alert('Silakan generate laporan terlebih dahulu!');
        return;
    }
    
    showLoading(true);
    
    try {
        const canvas = await html2canvas(laporanContent, {
            scale: 2,
            useCORS: true,
            logging: false
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        
        const namaGuru = document.getElementById('nama_guru').value || 'supervisi';
        const fileName = `Laporan_Supervisi_${namaGuru.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        pdf.save(fileName);
        
        alert('Laporan berhasil diunduh!');
    } catch (error) {
        alert('Error saat mengunduh PDF: ' + error.message);
    } finally {
        showLoading(false);
    }
}

function saveDraft() {
    const draft = {
        identitas: kumpulkanDataIdentitas(),
        checklists: kumpulkanDataChecklist(),
        analisis: {
            kekuatan: document.getElementById('analisis_kekuatan').value,
            perbaikan: document.getElementById('analisis_perbaikan').value
        },
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('supervisi_draft', JSON.stringify(draft));
    alert('Draft berhasil disimpan!');
}

function loadDraft() {
    const saved = localStorage.getItem('supervisi_draft');
    if (saved) {
        try {
            const draft = JSON.parse(saved);
            
            // Load identitas
            Object.keys(draft.identitas).forEach(key => {
                const element = document.getElementById(key);
                if (element) element.value = draft.identitas[key];
            });
            
            // Load checklists
            Object.keys(draft.checklists).forEach(key => {
                const [komponen, idx] = key.split('_');
                draft.checklists[key].forEach((isChecked, checklistIdx) => {
                    const checkbox = document.getElementById(`check_${komponen.replace(/\s+/g, '_')}_${idx}_${checklistIdx}`);
                    if (checkbox) checkbox.checked = isChecked;
                });
            });
            
            // Recalculate scores
            for (const [komponen, indikators] of Object.entries(RUBRIK)) {
                indikators.forEach((indikator, idx) => {
                    hitungSkorIndikator(komponen, idx);
                });
            }
            
            // Load analisis
            document.getElementById('analisis_kekuatan').value = draft.analisis.kekuatan || '';
            document.getElementById('analisis_perbaikan').value = draft.analisis.perbaikan || '';
            
        } catch (error) {
            console.error('Error loading draft:', error);
        }
    }
}

function showLoading(show) {
    const loading = document.getElementById('loading');
    if (show) {
        loading.classList.remove('hidden');
    } else {
        loading.classList.add('hidden');
    }
}
