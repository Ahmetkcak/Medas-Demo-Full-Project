import React from 'react';

const PermissionCreate = () => {
  return (
    <div className="p-6 min-h-full bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-semibold">İzin Formu</h2>
        <div className='flex flex-col gap-2'>
          <a className="fflex justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
            + Manuel İzin Formu
          </a>
          <a className="flex justify-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800" href='/permission/permission-list'>
            İzin Listesi
          </a>
        </div>
      </div>

      <form>
        <div className="flex flex-col mb-2">
          <p className="font-medium">İzin Türü</p>
          <div className="flex gap-4 flex-col">
            <label className="flex items-center">
              <input type="radio" name="permissionType" className="form-radio h-5 w-5 text-gray-900" />
              <span className="ml-2">Özel İzin</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="permissionType" className="form-radio h-5 w-5 text-gray-900" />
              <span className="ml-2">Sınav İzni</span>
            </label>
            <div className="">
              <label className="block text-sm font-medium text-gray-700">Adı-Soyadı</label>
              <input type="text" className="w-60 px-3 py-2 border border-gray-300 rounded-md" />
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-10 mb-2">
          <div className="">
            <label className="block text-sm font-medium text-gray-700">Departman/İşletme</label>
            <input type="text" className="w-[400px] px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 ">Onaya Gidecek Kişi:</label>
            <input type="text" className="w-60 px-3 py-2 border border-gray-300 rounded-md" />
          </div>
        </div>

        <div className=''>
          <div className="flex flex-row gap-6 mb-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 ">Çıkması Gereken Tarih/Saat</label>
              <div className="flex gap-1">
                <input type="date" className="w-60 px-3 py-2 border border-gray-300 rounded-md" />
                <input type="time" className="w-28 px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 ">Dönmesi Gereken Tarih/Saat</label>
              <div className="flex gap-1">
                <input type="date" className="w-60 px-3 py-2 border border-gray-300 rounded-md" />
                <input type="time" className="w-28 px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>
          </div>
          <div className="flex flex-row mb-2">
            <div className="">
              <label className="block text-sm font-medium text-gray-700 ">İzin/Görev Sebebi:</label>
              <textarea className="w-[736px] px-3 py-2 border border-gray-300 rounded-md" rows="5" placeholder='İzin/Görev Sebebi'></textarea>
            </div>
            <div className="flex flex-col gap-6 items-center ml-4 mt-6">
              <div>
                <label className="text-sm font-medium text-gray-700 ">Toplam Gün:</label>
                <input type="text" className="h-10 w-24 ml-2 px-2 py-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 ">Toplam Saat:</label>
                <input type="text" className="h-10 w-24 ml-2 px-2 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <button type="submit" className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
            ONAYA GÖNDER
          </button>
        </div>
      </form>
    </div>
  );
};

export default PermissionCreate;