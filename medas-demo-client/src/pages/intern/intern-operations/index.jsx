import { addIntern, getIntern } from '@/api/intern';
import daysOptions from '@/mock/daysOptions';
import internshipType from '@/mock/internshipType';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const InternForm = () => {


  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    phone: '',
    company: '',
    department: '',
    section: '',
    responsiblePerson: '',
    university: '',
    internshipDays: '',
    contactPerson: '',
    contactPhone: '',
    workPlace: '',
    internshipType: '',
    schoolAdvisor: '',
    schoolAdvisorPhone: ''
  });

  const {id} = useParams();

  useEffect(() => {
    async function fetchInternData() {
      if (id) {
        try {
          const res = await getIntern(id);
          setFormData(res.data);
        } catch (error) {
          toast.error("Stajyer bilgileri alınamadı.");
        }
      }
    }
    fetchInternData();
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await addIntern(formData);
    if (res.status !== 201) {      
      // toast.error(res.response.data.detail);
    }
    else {
      toast.success("Stajyer başarıyla eklendi");
    }
  };

  return (
    <div className="min-h-full bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Stajyer Bilgileri</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" onSubmit={handleSubmit}>

        <div className='flex flex-col'>
          <div className="">
            <label className="block text-sm font-medium text-gray-800 mb-1">Adı-Soyadı</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="px-3 py-2 w-60 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-800 focus:ring-2" />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-800 mb-1">Şirketi</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} className="px-3 py-2 w-60 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-800 focus:ring-2" />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-800 mb-1">Okulu</label>
            <input type="text" name="university" value={formData.university} onChange={handleChange} className="px-3 py-2 border w-60 border-gray-300 rounded-md focus:outline-none focus:ring-gray-800 focus:ring-2" />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-800 mb-1">Aranacak Kişi-İletişim</label>
            <div className="">
              <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} className="px-3 py-2 border w-60 border-gray-300 rounded-md focus:outline-none focus:ring-gray-800 focus:ring-2" />
              <input type="tel" name="contactPhone" value={formData.contactPhone} onChange={handleChange} pattern='[0-9]{3}[0-9]{3}[0-9]{4}' className="px-3 ml-2 py-2 w-60 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-800 focus:ring-2" />
            </div>
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-800 mb-1">Sorumlu Okul Hocası-İletişim</label>
            <div className="">
              <input type="text" name="schoolAdvisor" value={formData.schoolAdvisor} onChange={handleChange} className="px-3 py-2 border border-gray-300 w-60 rounded-md focus:outline-none focus:ring-gray-800 focus:ring-2" />
              <input type="tel" name="schoolAdvisorPhone" value={formData.schoolAdvisorPhone} onChange={handleChange} pattern='[0-9]{3}[0-9]{3}[0-9]{4}' className="px-3 py-2 w-60 ml-2 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-800 focus:ring-2" />
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className="">
            <label className="block text-sm font-medium text-gray-800 mb-1">İkamet (İl/İlçe)</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} className="px-3 py-2 w-60 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-800 focus:ring-2" />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-800 mb-1">Departmanı/İşletmesi</label>
            <input type="text" name="department" value={formData.department} onChange={handleChange} className="px-3 py-2 border w-60 border-gray-300 rounded-md focus:outline-none focus:ring-gray-800 focus:ring-2" />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-800 mb-1">Bölümü</label>
            <input type="text" name="section" value={formData.section} onChange={handleChange} className="px-3 py-2 border w-60 border-gray-300 rounded-md focus:outline-none focus:ring-gray-800 focus:ring-2" />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-800 mb-1">Sorumlu Kişi*(Zorunlu Alan)</label>
            <input type="text" name="responsiblePerson" value={formData.responsiblePerson} onChange={handleChange} className="px-3 py-2 border w-60 border-gray-300 rounded-md focus:outline-none focus:ring-gray-800 focus:ring-2" required />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-800 mb-1">Staj Türü</label>
            <select name="internshipType" value={formData.internshipType} onChange={handleChange} className="px-3 py-2 w-60 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800">
             {internshipType.map((type) =>(
                <option key={type.value} value={type.label === "Select" ? "" : type.label}>
                  {type.label}
                </option>
             ))}
            </select>
          </div>
        </div>
        <div>
          <div className="">
            <label className="block text-sm font-medium text-gray-800 mb-1">Cep Telefonu</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} pattern='[0-9]{3}[0-9]{3}[0-9]{4}' className="px-3 py-2 w-60 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-800 focus:ring-2" />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-800 mb-1">İş Yeri</label>
            <input type="text" name="workPlace" value={formData.workPlace} onChange={handleChange} className="px-3 py-2 w-60 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-800 focus:ring-2" />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-800 mb-1">Staj Günleri</label>
            <select
              name="internshipDays"
              value={formData.internshipDays}
              onChange={handleChange}
              className="px-3 py-2 w-60 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              {daysOptions.map((day) => (
                <option key={day.value} value={day.label === "Select" ? "" : day.label}>
                  {day.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex">
          <button type="submit" className="bg-gray-950 rounded-xl text-white px-8 py-2 items-center hover:bg-gray-800 transition duration-200 mt-6">
            KAYDET
          </button>
        </div>
      </form>
    </div>
  );
}

export default InternForm;