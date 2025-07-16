import { getRequestServer } from '@/service/getRequest'
import CategoryContent from './CategoryContent'

const Category = async () => {
    const categoriesList = await getRequestServer("/categories")
    return <CategoryContent categoriesList={categoriesList} />
}

export default Category