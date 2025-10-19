// Data untuk dropdown
const dataGuru = [
    "Budi Santoso, S.Pd",
    "Siti Rahayu, M.Pd", 
    "Ahmad Fauzi, S.Pd",
    "Dewi Lestari, M.Pd",
    "Rizki Pratama, S.Pd"
];

const dataMapel = [
    "Matematika",
    "Bahasa Indonesia", 
    "Bahasa Inggris",
    "IPA",
    "IPS",
    "Pendidikan Agama",
    "PKn",
    "Seni Budaya",
    "PJOK",
    "Prakarya"
];

const dataKelas = [
    "Kelas X - Fase E",
    "Kelas XI - Fase F", 
    "Kelas XII - Fase F"
];

const dataSupervisor = [
    "Dr. Anwar Kasim, M.Pd",
    "Drs. Hasan Basri",
    "Dra. Maya Sari, M.Pd"
];

// Data rubrik penilaian
const rubrikData = [
    {
        id: 1,
        aspek: "Perencanaan Pembelajaran",
        deskripsi: "Kesesuaian RPP dengan kurikulum, tujuan pembelajaran, dan langkah-langkah kegiatan",
        skor: 0
    },
    {
        id: 2, 
        aspek: "Pelaksanaan Pembelajaran",
        deskripsi: "Keterlaksanaan pembelajaran sesuai RPP, pengelolaan kelas, dan alokasi waktu",
        skor: 0
    },
    {
        id: 3,
        aspek: "Penggunaan Media/Strategi",
        deskripsi: "Kesesuaian media dan strategi dengan tujuan pembelajaran serta karakteristik siswa", 
        skor: 0
    },
    {
        id: 4,
        aspek: "Penilaian Pembelajaran",
        deskripsi: "Kesesuaian teknik penilaian dengan tujuan pembelajaran dan pemberian umpan balik",
        skor: 0
    },
    {
        id: 5,
        aspek: "Interaksi Pembelajaran", 
        deskripsi: "Kualitas interaksi guru-siswa dan siswa-siswa dalam proses pembelajaran",
        skor: 0
    }
];

// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    populateDropdowns();
    generateRubrik();
    setDefaultDate();
    
    // Event listener untuk form login
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });
    
    // Cek jika sudah login
    checkLoginStatus();
}

function populateDropdowns() {
    // Populate dropdown guru
    const selectGuru = document.getElementById('nama_guru');
    dataGuru.forEach(guru => {
        const option = document.createElement('option');
        option.value = guru;
        option.textContent = guru;
        selectGuru.appendChild(option);
    });
    
    // Populate dropdown mapel
    const selectMapel = document.getElementById('mapel');
    dataMapel.forEach(mapel => {
        const option = document.createElement('option');
        option.value = mapel;
        option.textContent = mapel;
        selectMapel.appendChild(option);
    });
    
    // Populate dropdown kelas
    const selectKelas = document.getElementById('kelas_fase');
    dataKelas.forEach(kelas => {
        const option = document.createElement('option');
        option.value = kelas;
        option.textContent = kelas;
        selectKelas.appendChild(option);
    });
    
    // Populate dropdown supervisor
    const selectSupervisor = document.getElementById('nama_supervisor');
    dataSupervisor.forEach(supervisor => {
        const option = document.createElement('option');
        option.value = supervisor;
        option.textContent = supervisor;
        selectSupervisor.appendChild(option);
    });
}

function generateRubrik() {
    const container = document.getElementById('rubrik-container');
    
    rubrikData.forEach(item => {
        const rubrikItem = document.createElement('div');
        rubrikItem.className = 'rubrik-item';
        rubrikItem.innerHTML = `
            <div class="rubrik-header">
                <div class="rubrik-title">${item.aspek}</div>
                <div class="score-buttons">
                    ${[1, 2, 3, 4].map(score => `
                        <button type="button" class="score-btn ${score === 1 ? 'active' : ''}" 
                                onclick="setScore(${item.id}, ${score})">
                            ${score}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="rubrik-desc">${item.deskripsi}</div>
        `;
        container.appendChild(rubrikItem);
    });
}

function setScore(itemId, score) {
    // Update data
    const item = rubrikData.find(r => r.id === itemId);
    if (item) {
        item.skor = score;
    }
    
    // Update UI
    const buttons = document.querySelectorAll(`.rubrik-item:nth-child(${itemId}) .score-btn`);
    buttons.forEach((btn, index) => {
        if (index === score - 1) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function setDefaultDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('tanggal_supervisi').value = today;
}

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'pakguru' && password === 'bajuri39') {
        // Simpan status login di localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        
        // Tampilkan aplikasi utama
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('mainApp').classList.remove('hidden');
    } else {
        alert('Username atau password salah!\\n\\nDefault login:\\nUsername: pakguru\\nPassword: bajuri39');
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
}

function generateLaporan() {
    showLoading();
    
    // Simulasi proses generate
    setTimeout(() => {
        const laporanData = collectLaporanData();
        displayLaporanPreview(laporanData);
        hideLoading();
    }, 1500);
}

function collectLaporanData() {
    return {
        guru: document.getElementById('nama_guru').value,
        mapel: document.getElementById('mapel').value,
        kelas: document.getElementById('kelas_fase').value,
        topik: document.getElementById('topik_materi').value,
        jam: document.getElementById('jml_jam').value,
        tanggal: document.getElementById('tanggal_supervisi').value,
        supervisor: document.getElementById('nama_supervisor').value,
        rubrik: rubrikData,
        kekuatan: document.getElementById('analisis_kekuatan').value,
        perbaikan: document.getElementById('analisis_perbaikan').value,
        totalSkor: rubrikData.reduce((sum, item) => sum + item.skor, 0),
        rataRata: (rubrikData.reduce((sum, item) => sum + item.skor, 0) / rubrikData.length).toFixed(2)
    };
}

function displayLaporanPreview(data) {
    const preview = document.getElementById('laporanPreview');
    
    preview.innerHTML = `
        <div class="laporan-content">
            <div class="laporan-header" style="text-align: center; margin-bottom: 2rem;">
                <h2 style="color: #1f2937; margin-bottom: 0.5rem;">LAPORAN SUPERVISI PEMBELAJARAN</h2>
                <p style="color: #6b7280;">SMA Genesis Medicare - Tahun Pelajaran 2025/2026</p>
                <hr style="margin: 1rem 0; border: 1px solid #e5e7eb;">
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #374151; margin-bottom: 1rem;">Identitas</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb; width: 30%;"><strong>Nama Guru</strong></td>
                        <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb;">${data.guru}</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb;"><strong>Mata Pelajaran</strong></td>
                        <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb;">${data.mapel}</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb;"><strong>Kelas/Fase</strong></td>
                        <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb;">${data.kelas}</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb;"><strong>Topik/Materi</strong></td>
                        <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb;">${data.topik}</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb;"><strong>Supervisor</strong></td>
                        <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb;">${data.supervisor}</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb;"><strong>Tanggal</strong></td>
                        <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb;">${formatDate(data.tanggal)}</td>
                    </tr>
                </table>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #374151; margin-bottom: 1rem;">Hasil Penilaian</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    ${data.rubrik.map(item => `
                        <tr>
                            <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb; width: 70%;">${item.aspek}</td>
                            <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb; text-align: center;">${item.skor}/4</td>
                        </tr>
                    `).join('')}
                    <tr style="background: #f8fafc;">
                        <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb;"><strong>Total Skor</strong></td>
                        <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb; text-align: center;"><strong>${data.totalSkor}/20</strong></td>
                    </tr>
                    <tr style="background: #f8fafc;">
                        <td style="padding: 0.5rem;"><strong>Rata-rata</strong></td>
                        <td style="padding: 0.5rem; text-align: center;"><strong>${data.rataRata}</strong></td>
                    </tr>
                </table>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #10b981; margin-bottom: 1rem;">Kekuatan yang Teramati</h3>
                <div style="background: #f0fdf4; padding: 1rem; border-radius: 8px; border-left: 4px solid #10b981;">
                    ${formatTextArea(data.kekuatan)}
                </div>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #f59e0b; margin-bottom: 1rem;">Area Pertumbuhan</h3>
                <div style="background: #fffbeb; padding: 1rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
                    ${formatTextArea(data.perbaikan)}
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 2rem; color: #6b7280; font-size: 0.9rem;">
                <p>Laporan ini dihasilkan secara otomatis oleh Sistem Supervisi Pembelajaran SMA Genesis Medicare</p>
            </div>
        </div>
    `;
}

function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

function formatTextArea(text) {
    return text.replace(/\n/g, '<br>') || '<em>Belum diisi</em>';
}

function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loading').classList.add('hidden');
}

function downloadPDF() {
    showLoading();
    
    // Gunakan html2canvas dan jsPDF untuk generate PDF
    const element = document.getElementById('laporanPreview');
    
    html2canvas(element).then(canvas => {
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
        
        pdf.save(`Laporan-Supervisi-${document.getElementById('nama_guru').value}-${new Date().toISOString().split('T')[0]}.pdf`);
        hideLoading();
    });
}

function saveDraft() {
    const data = collectLaporanData();
    localStorage.setItem('draftSupervisi', JSON.stringify(data));
    alert('Draft berhasil disimpan!');
}
