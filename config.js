// GANTI DENGAN DATA DARI SUPABASE ANDA
const SUPABASE_URL = 'URL_ANDA_DI_SINI';
const SUPABASE_KEY = 'ANON_KEY_ANDA_DI_SINI';

const supabase = lib.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Fungsi sederhana untuk cek login admin
function cekLogin() {
    if (localStorage.getItem('admin_logged_in') !== 'true') {
        window.location.href = 'index.html';
    }
}