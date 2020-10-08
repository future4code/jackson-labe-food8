import { FormControl, Container } from '@material-ui/core'
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

export const RestaurantCardInfo = styled.div`
    width: 100%;
    height: 18px;
    padding: 4px 16px 16px 16px;
    box-sizing: border-box;
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
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;

  ${props => {
    if(props.currentCategory === props.this ){
      return `color: #5cb646`
    }
  }}
`

export const TitleWrapper = styled.div`
  width: 100%;
  height: 18px;
  padding: 0 16px;
  margin-top: 12px;
`
