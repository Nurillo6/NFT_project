import { getRequestServer } from '@/service/getRequest'
import React from 'react'
import CollectionContent from './CollectionContent'

const Collections= async () => {
    const collections = await getRequestServer("/collections?limit=3")

    return <CollectionContent collections={collections}/>
}

export default Collections