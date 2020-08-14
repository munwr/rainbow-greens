/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import PopulateShows from './populate-shows'
import PopulateEpisodes from './populate-episodes'
import Search from './search'

const styles = {
  container: {
    'min-height': '75vh',
    variant: 'variants.container',
    '.react-tabs__tab-list': {
      bg: 'alternate',
      border: 'none',
      p: 3,
      mb: 4,
      mt: 3,
      'text-align': 'center',
      'list-style': 'none',
      'li': {
        display: 'inline-block',
        mr: 3,
        'border-radius': '6px'
      },
      '.react-tabs__tab--selected': {
        bg: 'primary',
        color: 'alternate',
        border: 'none'
      }
    }
  }
}
export default function ShowsHome() {
  return (
    <Tabs sx={styles.container}>
      <TabList>
        <Tab>All Shows</Tab>
        <Tab>Episodes</Tab>
        {/* <Tab><Search/></Tab> */}
      </TabList>
      <TabPanel>
        <PopulateShows/>
      </TabPanel>
      <TabPanel>
        <PopulateEpisodes/>
      </TabPanel>
      {/* <TabPanel>
        Enter a Keyword
      </TabPanel> */}
    </Tabs>
  )
}