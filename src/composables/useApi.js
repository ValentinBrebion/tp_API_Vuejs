
import getMenus from '@/services/api.service.js'

const formMenu = []

export default function useApi() {
    
    async function fetchMenus() {
        try {
            const response = await getMenus();
            response.data.records.map(record => {
                formMenu.push({
                    date: record.fields.plat_date,
                    plats: record.fields.plat_libelle
                });
            });
            console.log(formMenu)
        } catch (error) {
            console.error('Erreur lors de la récupération des menus:', error)
        }
    }
    return {
        fetchMenus, 
        formMenu
    }
}
