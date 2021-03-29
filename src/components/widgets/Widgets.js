import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search'
import SettingsIcon from '@material-ui/icons/Settings'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>
          Nigeria Trends <SettingsIcon className='widgets__settingsIcon' />
        </h2>

        <div className='trends'>
          <div className='first-trend'>
            <p className='p1'>
              1. Trending <MoreHorizIcon />
            </p>
            <h3>#MondayMotivation</h3>
            <p>30.6k Tweets</p>
          </div>
        </div>
        <div className='trends'>
          <div className='first-trend'>
            <p className='p1'>
              2. Trending <MoreHorizIcon />
            </p>
            <h3>#mondaythoughts</h3>
            <p>19k Tweets</p>
          </div>
        </div>
        <div className='trends'>
          <div className='first-trend'>
            <p className='p1'>
              3. Trending <MoreHorizIcon />
            </p>
            <h3>#MafiaCultureVol2</h3>
            <p>1,248 Tweets</p>
          </div>
        </div>
        <div className='trends'>
          <div className='first-trend'>
            <p className='p1'>
              4. Trending <MoreHorizIcon />
            </p>
            <h3>#LagosToAba5k</h3>
            <p>1,438 Tweets</p>
          </div>
        </div>
        <div className='trends'>
          <div className='first-trend'>
            <p className='p1'>
              5. Trending <MoreHorizIcon />
            </p>
            <h3>#TinubuIsKey</h3>
            <p>21.1k Tweets</p>
          </div>
        </div>
        <div className='trends'>
          <div className='first-trend'>
            <h4 className='show'>Show More</h4>
          </div>
        </div>

        {/*<TwitterTweetEmbed tweetId={'1374373725919846412'} />
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='udosinachii'
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://facebook.com/udosinachi'}
          options={{ text: '#reactjs is awesome', via: 'udosinachii' }}
        />*/}
      </div>
      <div className='footer'>
        <p>Terms and services</p>
        <p>Privacy policy</p>
        <p>Cookie policy</p>
        <p>Ads info</p>
        <p>More...</p>
        <p>2021 Twitter, Inc.</p>
      </div>
    </div>
  )
}

export default Widgets
