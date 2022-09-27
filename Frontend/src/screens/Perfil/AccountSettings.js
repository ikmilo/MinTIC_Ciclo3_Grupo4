// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

// ** Demo Tabs Imports
import TabAccount from './account-settings/TabAccount'
import TabSecurity from './account-settings/TabSecurity'
import TableBasic from './account-settings/TableBasic'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState('account')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='Perfil'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Perfil</TabName>
              </Box>
            }
          />
          <Tab
            value='Seguridad'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline />
                <TabName>Seguridad</TabName>
              </Box>
            }
          />
          <Tab
            value='Compras'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocalGroceryStoreIcon />
                <TabName>Mis Compras</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='Perfil'>
          <TabAccount />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='Seguridad'>
          <TabSecurity />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='Compras'>
          <TableBasic />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default AccountSettings
