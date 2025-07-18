import TopCreatorContent from '@/modules/TopCreators/TopCreatorContent'
import { getRequestServer } from '@/service/getRequest'

const TopCreator = async () => {
    const topCreatorData = await getRequestServer("/ranking/rankings?period=all")
    const topCreatorToday = await getRequestServer("/ranking/rankings?period=today")
    const topCreatorWeek = await getRequestServer("/ranking/rankings?period=week")
    const topCreatorMonth = await getRequestServer("/ranking/rankings?period=month")
    
    return <TopCreatorContent topCreatorToday={topCreatorToday} topCreatorWeek={topCreatorWeek} topCreatorMonth={topCreatorMonth} topCeatorData={topCreatorData}/>
}

export default TopCreator