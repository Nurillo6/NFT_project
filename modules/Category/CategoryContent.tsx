import { CategoryPageType, CategoryType } from '@/@types/CategoryType'
import { CategoryCard, Heading } from '@/components'
import { FC } from 'react'

const CategoryContent:FC<CategoryPageType> = ({categoriesList}) => {
    // const t = useTranslations() bu yerda tarjima qilasiz, hookni chaqirish esdan chiqmasin
    return (
        <section className='py-[80px]'>
            <div className="containers">
                <Heading tag='h2' classList='!mb-[60px]'>Browse Categories</Heading>
                <div className='flex ] justify-between flex-wrap space-y-[30px] gap-[10px]'>
                    {categoriesList?.data?.map((item: CategoryType) => <CategoryCard key={item.id} item={item} />)}
                </div>
            </div>
        </section>
    )
}

export default CategoryContent