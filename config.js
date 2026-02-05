// GANTI DENGAN DATA DARI SUPABASE ANDA
const SUPABASE_URL = 'https://azkahamam.github.io/kokoncong/';
const SUPABASE_KEY = 'https://pnmhnfkgkakvspadorkq.supabase.co';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// Gunakan variabel ini di file lain
window.supabase = supabaseClient;

// Fungsi sederhana untuk cek login admin
function cekLogin() {
    if (localStorage.getItem('admin_logged_in') !== 'true') {
        window.location.href = 'index.html';
    }
}
