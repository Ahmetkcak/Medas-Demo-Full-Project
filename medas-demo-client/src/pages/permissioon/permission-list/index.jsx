import { permissionSheetName } from '@/constants/excelSheetNames';
import exportToExcel from '@/utils/exportToExcel';
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const PermissionList = () => {

  const [permissions, setPermissions] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleExport = () => {
    const headers = ["Adı-Soyadı", "Departman/İşletme", "Okulu", "Çıkış Tarihi", "Giriş Tarihi", "İzin Süresi", "Detay"];
    const data = permissions.map(permission => [
      permission.fullName,
      permission.company,
      permission.university,
      permission.section,
      permission.responsiblePerson,
      permission.department,
      permission.internshipDays
    ]);
    exportToExcel(data, headers, permissionSheetName, "izin_listesi.xlsx");
  };

  return (
    <div className="p-6">
      <div className="flex items-end justify-end mb-6">
        <div className="flex space-x-4">
          <button onClick={handleExport} className="bg-white text-gray-950 px-4 py-2 ring-1 ring-gray-950 rounded-full flex items-center">
            <span className="mr-2">Dışa Aktar</span>
          </button>
          <select name="" id="" className='bg-white text-gray-950 px-4 py-2 ring-1 ring-gray-950 rounded-full'>
            <option value="">Tümü</option>
            <option value="">Onay Bekleyenler</option>
            <option value="">Onaylananlar</option>
            <option value="">Reddedilenler</option>
          </select>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2">Adı-Soyadı</th>
              <th className="px-4 py-2">Departman/İşletme</th>
              <th className="px-4 py-2">Okulu</th>
              <th className="px-4 py-2">Çıkış Tarihi</th>
              <th className="px-4 py-2">Giriş Tarihi</th>
              <th className="px-4 py-2">İzin Süresi</th>
              <th className="px-4 py-2">Detay</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission) => (
              <tr key={permission.id} className="bg-white border-t">
                <td className="px-4 py-2">{permission.fullName}</td>
                <td className="px-4 py-2">{permission.company}</td>
                <td className="px-4 py-2">{permission.university}</td>
                <td className="px-4 py-2">{permission.section}</td>
                <td className="px-4 py-2">{permission.responsiblePerson}</td>
                <td className="px-4 py-2">{permission.department}</td>
                <td className="px-4 py-2">{permission.internshipDays}</td>
                <td className="px-4 py-2">
                  <a href="" className="text-blue-500 underline flex items-center">
                    <FaArrowRight className="ml-2" color='black' size={20} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 bg-gray-50 border-t">
          <div className="flex justify-center space-x-2">
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded ${currentPage === page ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
              >
                {page + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PermissionList