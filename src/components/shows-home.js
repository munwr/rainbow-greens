/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import PopulateShows from './populate-shows'
import PopulateEpisodes from './populate-episodes'
import Search from './search'

export default function ShowsHome() {
  return (
    <Tabs>
      <TabList>
        <Tab>All Shows</Tab>
        <Tab>Episodes</Tab>
      </TabList>
      <Search/>
      <TabPanel>
        <PopulateShows/>
      </TabPanel>
      <TabPanel>
        <PopulateEpisodes/>
      </TabPanel>
    </Tabs>
  )
}