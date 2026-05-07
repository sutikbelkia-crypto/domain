// Deploy ke Vercel:
// 1. Upload project ke GitHub
// 2. Login ke https://vercel.com
// 3. Import repository GitHub
// 4. Klik Deploy
// 5. Selesai

export default function DomainManagementApp() {
  const domainData = [
    {
      no: 1,
      domain: 'kapuashulukab.go.id',
      pengelola: 'Diskominfotik',
      kecamatan: 'Putussibau Utara',
      aplikasi: '-',
      tanggal: '17 Januari 2008',
      kategori: 'Kabupaten'
    },
    {
      no: 2,
      domain: 'nangabetung.desa.id',
      pengelola: 'Nanga Betung',
      kecamatan: 'Boyan Tanjung',
      aplikasi: 'OpenSID 2.8',
      tanggal: '04 April 2019',
      kategori: 'Desa'
    },
    {
      no: 3,
      domain: 'sriwangi.desa.id',
      pengelola: 'Sriwangi',
      kecamatan: 'Boyan Tanjung',
      aplikasi: '-',
      tanggal: '04 April 2019',
      kategori: 'Desa'
    },
    {
      no: 4,
      domain: 'labian.desa.id',
      pengelola: 'Labian',
      kecamatan: 'Batang Lupar',
      aplikasi: '-',
      tanggal: '26 April 2019',
      kategori: 'Desa'
    },
    {
      no: 5,
      domain: 'boyantanjung.desa.id',
      pengelola: 'Boyan Tanjung',
      kecamatan: 'Boyan Tanjung',
      aplikasi: 'SIDEKA-NG',
      tanggal: '08 Mei 2019',
      kategori: 'Desa'
    }
  ];

  const totalDomain = domainData.length;
  const totalDesa = domainData.filter((d) => d.kategori === 'Desa').length;
  const totalKabupaten = domainData.filter((d) => d.kategori === 'Kabupaten').length;

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-3xl shadow-lg p-6 border border-slate-200">
          <h1 className="text-3xl font-bold text-slate-800">
            Sistem Informasi Domain Kabupaten Kapuas Hulu
          </h1>
          <p className="text-slate-500 mt-2">
            Daftar Domain Yang Dikelola Diskominfotik Tahun 2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-slate-500 text-sm">Total Domain</h2>
            <p className="text-4xl font-bold text-slate-800 mt-2">{totalDomain}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-slate-500 text-sm">Domain Desa</h2>
            <p className="text-4xl font-bold text-slate-800 mt-2">{totalDesa}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-slate-500 text-sm">Domain Kabupaten</h2>
            <p className="text-4xl font-bold text-slate-800 mt-2">{totalKabupaten}</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="p-5 border-b border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">
                Data Domain
              </h2>
              <p className="text-slate-500 text-sm">
                Monitoring domain desa dan pemerintah daerah
              </p>
            </div>

            <input
              type="text"
              placeholder="Cari domain..."
              className="border border-slate-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="p-3 text-left">No</th>
                  <th className="p-3 text-left">Nama Domain</th>
                  <th className="p-3 text-left">Pengelola</th>
                  <th className="p-3 text-left">Kecamatan</th>
                  <th className="p-3 text-left">Aplikasi</th>
                  <th className="p-3 text-left">Tanggal Daftar</th>
                  <th className="p-3 text-left">Kategori</th>
                </tr>
              </thead>

              <tbody>
                {domainData.map((item) => (
                  <tr
                    key={item.no}
                    className="border-b border-slate-200 hover:bg-slate-50"
                  >
                    <td className="p-3">{item.no}</td>
                    <td className="p-3 font-medium text-blue-700">
                      {item.domain}
                    </td>
                    <td className="p-3">{item.pengelola}</td>
                    <td className="p-3">{item.kecamatan}</td>
                    <td className="p-3">{item.aplikasi}</td>
                    <td className="p-3">{item.tanggal}</td>
                    <td className="p-3">
                      <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs">
                        {item.kategori}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            Fitur Pengembangan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="border rounded-2xl p-4">
              ✅ Import data otomatis dari file Excel
            </div>

            <div className="border rounded-2xl p-4">
              ✅ Monitoring masa aktif domain
            </div>

            <div className="border rounded-2xl p-4">
              ✅ Dashboard statistik domain
            </div>

            <div className="border rounded-2xl p-4">
              ✅ Export PDF dan Excel
            </div>

            <div className="border rounded-2xl p-4">
              ✅ Login admin dan operator
            </div>

            <div className="border rounded-2xl p-4">
              ✅ Integrasi database MySQL / PostgreSQL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
