import { toast } from 'react-toastify';
import * as XLSX from 'xlsx';

const exportToExcel = (data, headers, sheetName, fileName) => {
    if (data.length === 0) {
        toast.error('No data available for export.');
        return;
    }
    const ws = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName);
};

export default exportToExcel;