import { getInterns } from '@/api/intern';
import { internSheetName } from '@/constants/excelSheetNames';
import exportToExcel from '@/utils/exportToExcel';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const InternList = () => {
    const [interns, setInterns] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);



    useEffect(() => {
        async function fetchInterns() {
            try {
                const res = await getInterns(currentPage, 10);
                setInterns(res.data.items);
                setTotalPages(res.data.pages);
            } catch (error) {
                console.error("Error fetching interns:", error);
            }
        }
        fetchInterns();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleExport = () => {
        const headers = ["Adı-Soyadı", "Şirketi", "Okulu", "Bölümü", "Sorumlu Kişi", "Departman/İşletme", "Staj Günleri"];        
        const data = interns.map(intern => [
            intern.fullName,
            intern.company,
            intern.university,
            intern.section,
            intern.responsiblePerson,
            intern.department,
            intern.internshipDays
        ]);        
        exportToExcel(data, headers, internSheetName, "stajyerler_listesi.xlsx");
    };

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <a href='/intern/intern-create' className="bg-gray-950 rounded-full text-white px-4 py-2 items-center hover:bg-gray-800 transition duration-200">
                    <span className="mr-2">+ Yeni Kayıt</span>
                </a>
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
                            <th className="px-4 py-2">Şirketi</th>
                            <th className="px-4 py-2">Okulu</th>
                            <th className="px-4 py-2">Bölümü</th>
                            <th className="px-4 py-2">Sorumlu Kişi</th>
                            <th className="px-4 py-2">Departman/İşletme</th>
                            <th className="px-4 py-2">Staj Günleri</th>
                            <th className="px-4 py-2">Detay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {interns.map((intern) => (
                            <tr key={intern.id} className="bg-white border-t">
                                <td className="px-4 py-2">{intern.fullName}</td>
                                <td className="px-4 py-2">{intern.company}</td>
                                <td className="px-4 py-2">{intern.university}</td>
                                <td className="px-4 py-2">{intern.section}</td>
                                <td className="px-4 py-2">{intern.responsiblePerson}</td>
                                <td className="px-4 py-2">{intern.department}</td>
                                <td className="px-4 py-2">{intern.internshipDays}</td>
                                <td className="px-4 py-2">
                                    <a href={`/intern/intern-details/${intern.id}`} className="text-blue-500 underline flex items-center">
                                        <FaArrowRight className="ml-2" color='black' size={20}/>
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
    );
};

export default InternList;