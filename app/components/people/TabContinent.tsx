import React from 'react'

import PeopleList from './PeopleList'
import PeopleActionList from './PeopleActionList'

export  enum TabEnum {
    "PEOPLE" = "People",
    "ACTION" = "All My Actions",
  }
  
const TabContinent = ({activeTab,searchText}) => {
  return (
   activeTab === TabEnum.PEOPLE ? 
   <PeopleList searchText={searchText}/>
   :
   <PeopleActionList/>
  )
}

export default TabContinent

