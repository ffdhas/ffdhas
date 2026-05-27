/**
 * ============================================
 *   FROZEN FOOD D'HAS — DATA PRODUK
 * ============================================
 *
 * Cara tambah produk baru:
 * Salin salah satu blok di bawah, lalu ubah datanya.
 * ID harus unik (tidak boleh sama dengan yang lain).
 *
 * Field yang wajib diisi:
 *   id       : nomor unik
 *   name     : "Nama Produk"
 *   image    : "https://link-gambar.com/foto.jpg"
 *   price    : harga (angka, tanpa titik/koma)  contoh: 45000
 *   status   : "ready" atau "sold"
 *   category : pilih salah satu dari daftar berikut:
 *              "Daging" | "Seafood" | "Nugget & Sosis" | "Sayuran"
 *              "Siap Saji" | "Minuman" | "Cemilan" | "Bahan Dapur" | "Bumbu"
 *
 * ============================================
 */

window.products = [

  // ── DAGING ───────────────────────────────
  {
    id       : 1,
    name     : "Ayam Goreng Crispy",
    image    : "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80",
    price    : 45000,
    status   : "ready",
    category : "Daging"
  },
  {
    id       : 2,
    name     : "Rendang Daging Beku",
    image    : "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
    price    : 72000,
    status   : "ready",
    category : "Daging"
  },

  // ── SEAFOOD ──────────────────────────────
  {
    id       : 3,
    name     : "Udang Kupas Beku",
    image    : "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=80",
    price    : 85000,
    status   : "ready",
    category : "Seafood"
  },
  {
    id       : 4,
    name     : "Cumi Goreng Tepung",
    image    : "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400&q=80",
    price    : 68000,
    status   : "ready",
    category : "Seafood"
  },
  {
    id       : 5,
    name     : "Ikan Dori Fillet",
    image    : "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80",
    price    : 55000,
    status   : "sold",
    category : "Seafood"
  },

  // ── NUGGET & SOSIS ───────────────────────
  {
    id       : 6,
    name     : "Nugget Ayam Krispi",
    image    : "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=80",
    price    : 32000,
    status   : "ready",
    category : "Nugget & Sosis"
  },
  {
    id       : 7,
    name     : "Sosis Sapi Premium",
    image    : "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=400&q=80",
    price    : 38000,
    status   : "ready",
    category : "Nugget & Sosis"
  },

  // ── SAYURAN ──────────────────────────────
  {
    id       : 8,
    name     : "Edamame Beku",
    image    : "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=400&q=80",
    price    : 22000,
    status   : "ready",
    category : "Sayuran"
  },
  {
    id       : 9,
    name     : "Jagung Manis Pipil",
    image    : "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&q=80",
    price    : 18000,
    status   : "ready",
    category : "Sayuran"
  },

  // ── SIAP SAJI ────────────────────────────
  {
    id       : 10,
    name     : "Bakso Sapi Jumbo",
    image    : "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80",
    price    : 52000,
    status   : "ready",
    category : "Siap Saji"
  },
  {
    id       : 11,
    name     : "Dimsum Mix",
    image    : "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80",
    price    : 48000,
    status   : "ready",
    category : "Siap Saji"
  },

  // ── MINUMAN ──────────────────────────────
  {
    id       : 12,
    name     : "Es Krim Durian",
    image    : "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=80",
    price    : 28000,
    status   : "ready",
    category : "Minuman"
  },

  // ── CEMILAN ──────────────────────────────
  {
    id       : 13,
    name     : "Cireng Isi Keju",
    image    : "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
    price    : 15000,
    status   : "ready",
    category : "Cemilan"
  },
  {
    id       : 14,
    name     : "Risoles Mayo Frozen",
    image    : "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    price    : 20000,
    status   : "ready",
    category : "Cemilan"
  },

  // ── BAHAN DAPUR ──────────────────────────
  {
    id       : 15,
    name     : "Santan Kental Beku",
    image    : "https://images.unsplash.com/photo-1559181567-c3190b6cdb6a?w=400&q=80",
    price    : 12000,
    status   : "ready",
    category : "Bahan Dapur"
  },
  {
    id       : 16,
    name     : "Keju Parut Beku 200g",
    image    : "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400&q=80",
    price    : 25000,
    status   : "sold",
    category : "Bahan Dapur"
  },

  // ── BUMBU ────────────────────────────────
  {
    id       : 17,
    name     : "Bumbu Opor Siap Masak",
    image    : "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
    price    : 18000,
    status   : "ready",
    category : "Bumbu"
  },
  {
    id       : 18,
    name     : "Bumbu Rendang Frozen",
    image    : "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&q=80",
    price    : 22000,
    status   : "ready",
    category : "Bumbu"
  }

];
