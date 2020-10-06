import { Typography, FormControl, Container } from '@material-ui/core'
import styled from 'styled-components'

export const SearchInput = styled(FormControl)`
    width: 328px;
    height: 56px;
    border-radius: 2px;
    margin: 8px 16px !important;
`

export const FeedContainer = styled(Container)`
    box-sizing: border-box;
    padding: 0 16px;
    justify-content: center;
`

export const RestaurantName = styled(Typography)`
    width: 100%;
`

export const RestaurantCardInfo = styled(Typography)`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const Slider = styled.div`
  padding: 4px;
  box-sizing: border-box;
  height: 42px;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
`

export const Category = styled.p`
  height: 18px;
  margin: 12px 16px;
`
